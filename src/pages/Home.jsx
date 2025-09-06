// Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { STRINGS } from "../content/strings";

import "./Home.css";
import "../components/ui/Page";
import "../components/ui/nav/Nav";
import "../styles/phone.css";

import FoundationInfo from "../components/button/home/FoundationInfo";
import Nav from "../components/ui/nav/Nav";

import search from "../images/home/searchBtn.svg";
import notice from "../images/home/noticeBtn.svg";
import banner from "../images/home/banner.svg";

import food from "../images/home/foodIcon.svg";
import edu from "../images/home/eduIcon.svg";
import startup from "../images/home/startupIcon.svg";
import eco from "../images/home/ecoIcon.svg";
import express from "../images/home/expressIcon.svg";
import service from "../images/home/serviceIcon.svg";

// --- 응답 안전 파서 ---
function extractList(json) {
  const root = json?.data ?? json;
  if (Array.isArray(root)) return root;
  if (Array.isArray(root?.items)) return root.items;
  if (Array.isArray(root?.content)) return root.content;
  if (Array.isArray(root?.items?.content)) return root.items.content;
  return [];
}

function mapItem(it) {
  return {
    id: it?.id ?? it?.foundationInfoId ?? crypto.randomUUID(),
    title: it?.title ?? it?.foundationTitle ?? it?.name ?? "무제",
    subtitle: it?.subtitle ?? it?.summary ?? it?.description ?? "",
    image: it?.imgUrl ?? banner,          // 이미지가 없으면 임시 아이콘
    link: it?.detailUrl ?? it?.linkUrl ?? "/info",
  };
}

const Home = () => {
  const [reco, setReco] = useState([]);
  const [loading, setLoading] = useState(true);

  // 추천 리스트 불러오기
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("accessToken");
        const base = import.meta.env.VITE_API_BASE_URL || "";
        // 대부분의 스프링 Pageable은 page/size 형식. (pageable.*만 받으면 아래 주석 라인으로 교체)
        const url = `${base}/api/v1/foundation-info-list/recommend?page=0&size=3`;
        // const url = `${base}/api/v1/foundation-info-list/recommend?pageable.page=0&pageable.size=3`;

        const resp = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
          signal: controller.signal,
        });

        if (!resp.ok) {
          throw new Error(`API 실패: ${resp.status}`);
        }

        const json = await resp.json();
        const list = extractList(json).map(mapItem);
        setReco(list);
      } catch (e) {
        if (e.name !== "AbortError") {
          console.error("이달의 추천 창업정보 불러오기 실패:", e);
          setReco([]);
        }
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

  return (
    <div className="PhoneCanvas">
      <div className="PhoneFrame HomeScene">
        {/* 상단 배너 */}
        <div className="top-banner">
          <h3 className="logo">{STRINGS.BridgeOn}</h3>
          <div className="header-buttons">
            <div className="top-icons">
              <Link to="/settings"><img src={search} alt="설정" className="searchBtn" /></Link>
              <Link to="/alert"><img src={notice} alt="알림" className="noticeBtn" /></Link>
            </div>
          </div>
        </div>

        <div className="home-content">
          <div className="banner-container">
            <img src={banner} className="banner" alt="" />
          </div>

          {/* 중간 아이콘 */}
          <h3 className="foundation-guide-comment">나에게 맞는 창업 아이템은?</h3>
          <div className="categories">
            <div className="food-container">
              <Link to="/food"><img src={food} alt="요식업" /></Link>
              <p>요식업</p>
            </div>
            <div className="edu-container">
              <Link to="/edu"><img src={edu} alt="교육업" /></Link>
              <p>교육업</p>
            </div>
            <div className="startup-container">
              <Link to="/it"><img src={startup} alt="스타트업/IT" /></Link>
              <p>스타트업/IT</p>
            </div>
            <div className="eco-container">
              <Link to="/eco"><img src={eco} alt="친환경" /></Link>
              <p>친환경</p>
            </div>
            <div className="express-container">
              <Link to="/eco"><img src={express} alt="유통업" /></Link>
              <p>유통업</p>
            </div>
            <div className="service-container">
              <Link to="/eco"><img src={service} alt="서비스업" /></Link>
              <p>서비스업</p>
            </div>
          </div>

          {/* 이달의 창업정보 - 추천 */}
          <div className="monthly-info">
            <h3 className="foundation-guide-comment monthly-recommend">이달의 추천 창업정보</h3>
            <Link to="/info" className="monthly-more" aria-label="이달의 추천 창업정보 더보기">더보기</Link>

            <div className="monthly-banners">
              {loading ? (
                <div className="intro-box">불러오는 중…</div>
              ) : reco.length === 0 ? (
                <div className="intro-box is-empty">표시할 정보가 없습니다.</div>
              ) : (
                reco.map(item => (
                  <FoundationInfo
                    key={item.id}
                    to={item.link}
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                ))
              )}
            </div>
          </div>

          <div className="banner-trend">
            <Link to="/Trend"><img src={banner} className="banner" alt="" /></Link>
          </div>
        </div>

        <Nav />
      </div>
    </div>
  );
};

export default Home;