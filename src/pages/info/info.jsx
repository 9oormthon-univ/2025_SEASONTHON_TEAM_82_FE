// info.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./info.css";
import "../../components/ui/Page";
import Nav from "../../components/ui/nav/Nav";
import "../../styles/phone.css";
import MonthlyStartup from "../../components/button/monthlyinfo/monthlystartup";

import food from "../../images/home/foodIcon.svg";
import study from "../../images/home/eduIcon.svg";
import it from "../../images/home/startupIcon.svg";
import grow from "../../images/home/ecoIcon.svg";
import distribution from "../../images/home/expressIcon.svg";
import service from "../../images/home/serviceIcon.svg";
import search from "../../images/search.png";
import group from "../../images/group.png";

function calcDDay(dateStr) {
  if (!dateStr) return 0;
  const today = new Date();
  const due = new Date(dateStr);
  const diffMs = due.setHours(0,0,0,0) - today.setHours(0,0,0,0);
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

function mapItem(it) {
  const title = it?.title ?? it?.foundationTitle ?? it?.name ?? "무제";
  const subtitle = it?.subtitle ?? it?.summary ?? it?.description ?? "";
  const deadline = it?.deadline ?? it?.endDate ?? it?.dueDate ?? it?.applyEndDate;
  const dDay = typeof it?.dDay === "number" ? it.dDay : calcDDay(deadline);
  const image = it?.imageUrl ?? group;
  const link = it?.detailUrl ?? it?.linkUrl ?? "/info";
  const id = it?.id ?? it?.foundationInfoId ?? title;
  return { id, title, subtitle, dDay, image, link };
}

// 응답에서 리스트 부분만 안전하게 뽑아내기
function extractList(json) {
  const root = json?.data ?? json;

  // 1) data가 배열
  if (Array.isArray(root)) return root;

  // 2) data.items가 배열 (ResponseDto + items)
  if (Array.isArray(root?.items)) return root.items;

  // 3) 스프링 Page 형태 (content 배열)
  if (Array.isArray(root?.content)) return root.content;

  // 4) 중첩된 items.content
  if (Array.isArray(root?.items?.content)) return root.items.content;

  // 5) content가 객체인데 values가 배열처럼 쓰일 때(드묾)
  if (root?.content && typeof root.content === "object") {
    const vals = Object.values(root.content);
    if (vals.every(v => typeof v === "object")) return vals;
  }

  // 6) 마지막 방어: 배열 아님
  return [];
}

const Info = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const goToCategory = (category) => navigate(`/category/${category}`);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("accessToken");
        if (!token) {
          navigate("/login");
          return;
        }
        const base = import.meta.env.VITE_API_BASE_URL || "";
        // Pageable 일반형
        const url = `${base}/api/v1/foundation-info-list?page=0&size=3`;
        // 만약 백엔드가 pageable.* 형식만 받는다면 위 줄 대신 아래 사용:
        // const url = `${base}/api/v1/foundation-info-list?pageable.page=0&pageable.size=3&pageable.sort=createdAt,desc`;

        const resp = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
          signal: controller.signal,
        });

        if (resp.status === 401) {
          navigate("/login");
          return;
        }
        if (!resp.ok) throw new Error(`API 실패: ${resp.status}`);

        const json = await resp.json();
        const list = extractList(json);

        // 디버깅에 도움 (개발 중에만)
        if (!Array.isArray(list)) {
          console.debug("foundation-info-list 응답 구조", json);
        }

        setItems(list.map(mapItem));
      } catch (e) {
        if (e.name !== "AbortError") {
          console.error("이달의 창업 정보 불러오기 실패:", e);
          setItems([]);
        }
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, [navigate]);

  return (
    <div className="PhoneCanvas">
      <div className="PhoneFrame MyScene">
        <div className="my-content">

          {/* 헤더 */}
          <header className="info-header">
            <p>창업 정보</p>
            <div className="search-icon">
              <Link to="/settings2"><img src={search} alt="검색" /></Link>
            </div>
          </header>

          <h3 className="subtitle-info">카테고리 별 보기</h3>

          <div className="category">
            <button onClick={() => goToCategory("food")}>
              <div><img src={food} alt="요식업" /><p>요식업</p></div>
            </button>
            <button onClick={() => goToCategory("study")}>
              <div><img src={study} alt="교육업" /><p>교육업</p></div>
            </button>
            <button onClick={() => goToCategory("it")}>
              <div><img src={it} alt="스타트업/IT" /><p>스타트업/IT</p></div>
            </button>
            <button onClick={() => goToCategory("grow")}>
              <div><img src={grow} alt="친환경" /><p>친환경</p></div>
            </button>
            <button onClick={() => goToCategory("distribution")}>
              <div><img src={distribution} alt="유통업" /><p>유통업</p></div>
            </button>
            <button onClick={() => goToCategory("service")}>
              <div><img src={service} alt="서비스업" /><p>서비스업</p></div>
            </button>
          </div>

          <h3 className="subtitle-info">이달의 창업 정보</h3>

          <div className="monthly-banners">
            {loading ? (
              <div className="intro-box">불러오는 중…</div>
            ) : items.length === 0 ? (
              <div className="intro-box is-empty">표시할 정보가 없습니다.</div>
            ) : (
              items.map((it) => (
                <MonthlyStartup
                  key={it.id}
                  to={it.link}
                  image={it.image}
                  title={it.title}
                  subtitle={it.subtitle}
                  dDay={it.dDay}
                />
              ))
            )}
          </div>

        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Info;