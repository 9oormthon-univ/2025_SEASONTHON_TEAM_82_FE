// Home.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Pagination 모듈 추가
import { Link } from "react-router-dom";
import { STRINGS } from "../content/strings";

import "swiper/css"; // Swiper 기본 스타일
import "swiper/css/pagination"; // Pagination 스타일

import "./Home.css";
import "../components/ui/Page";
import "../components/ui/nav/Nav";
import "../styles/phone.css";

import "../components/button/home/FoundationInfo"

import search from "../images/home/searchBtn.svg";
import notice from "../images/home/noticeBtn.svg";

import banner from "../images/home/banner.svg";

import food from "../images/home/foodIcon.svg";
import edu from "../images/home/eduIcon.svg";
import startup from "../images/home/startupIcon.svg";
import eco from "../images/home/ecoIcon.svg";
import express from "../images/home/expressIcon.svg";
import service from "../images/home/serviceIcon.svg";

import my from "../images/my.png";
import home from "../images/home.png";
import portfolio from "../images/portfolio.png";
import info from "../images/info.png";
import network from "../images/network.png";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";

import FoundationInfo from "../components/button/home/FoundationInfo";
import Nav from "../components/ui/nav/Nav";

const Home = () => {
  const items = [
    { name: "요식업", path: "/info" },
    { name: "교육업", path: "/info" },
    { name: "스타트업/IT", path: "/info" },
    { name: "친환경", path: "/info" },
    { name: "유통업", path: "/info" },
    { name: "서비스업", path: "/info" },
  ];

  return (
    <div className="PhoneCanvas">
      <div className="PhoneFrame HomeScene">
        
        {/* 상단 배너 */}
        <div className="top-banner">
          <h3 className="logo">{STRINGS.BridgeOn}</h3>
          <div className="header-buttons">
            <div className="top-icons">
              <Link to="/settings"><img src={search} alt="설정" className="searchBtn"/></Link>
              <Link to="/alert"><img src={notice} alt="알림" className="noticeBtn"/></Link>
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

          {/* 이달의 창업정보 */}
          <div className="monthly-info">
            <h3 className="foundation-guide-comment monthly-recommend">이달의 추천 창업정보</h3>
            <Link to="/info" className="monthly-more" aria-label="이달의 추천 창업정보 더보기">더보기</Link>
            <div className="monthly-banners">
              <FoundationInfo to="/info" image={eco} 
                title="교육 스타트업 창업 프로그램"
                subtitle="교육의 미래를 이끌어갈 당신을 위해"              
              />
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
