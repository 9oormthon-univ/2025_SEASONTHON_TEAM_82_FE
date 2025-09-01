// Home.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper 기본 스타일
import { Autoplay, Pagination } from "swiper/modules"; // Pagination 모듈 추가
import "swiper/css/pagination"; // Pagination 스타일
import { Link } from "react-router-dom";
import "./Home.css";

import food from "../images/food.png";
import study from "../images/study.png";
import it from "../images/it.png";
import grow from "../images/grow.png";
import search from "../images/search.png";
import alarm from "../images/alarm.png";
import Logo from "../images/Logo.png";
import my from "../images/my.png";
import home from "../images/home.png";
import portfolio from "../images/portfolio.png";
import info from "../images/info.png";
import network from "../images/network.png";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";

const Home = () => {
  const items = [
    { name: "요식업", path: "/info" },
    { name: "교육업", path: "/info" },
    { name: "스타트업/IT", path: "/info" },
    { name: "친환경", path: "/info" },
  ];

  return (

     <div className="home">
      {/* 상단 배너 */}
      <div className="top-banner">
        <h3 className="logo">
          <img src={Logo} alt="로고" />
        </h3>
        <div className="header-buttons">
        <div className="top-icons">
          <Link to="/settings"><img src={search} alt="설정" /></Link>
          <Link to="/alert"><img src={alarm} alt="알림" /></Link>
          
        </div>
      </div>
    </div>
      {/* 슬라이드 배너 */}
      <div className="banner-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="banner img">
              <Link to="/settings"><img src={banner1} alt="배너1" /></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner img">
              <Link to="/settings"><img src={banner2} alt="배너2" /></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner img">
              <Link to="/settings"><img src={banner3} alt="배너3" /></Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 중간 아이콘 */}
      <h2>나에게 맞는 창업 아이템은?</h2>
      <div className="categories">
        <Link to="/food"><img src={food} alt="요식업" /></Link>
        <Link to="/edu"><img src={study} alt="교육업" /></Link>
        <Link to="/it"><img src={it} alt="스타트업/IT" /></Link>
        <Link to="/eco"><img src={grow} alt="친환경" /></Link>
      </div>

      {/* 이달의 창업정보 */}
<div className="monthly-info">
  <h3>이달의 창업정보</h3>
  <div className="monthly-banners">
    <Link to="/info"><p>배너1</p></Link>
    <Link to="/info"><p>배너2</p></Link>
  </div>
</div>

      {/* 하단 탭바 */}
      <div className="bottom-tab">
        <Link to="/home"><img src={home} alt="홈"/></Link>
        <Link to="/info"><img src={info} alt="정보"/></Link>
        <Link to="/portfolio"><img src={portfolio} alt="포트폴리오"/></Link>
        <Link to="/network"><img src={network} alt="네트워크"/></Link>
        <Link to="/my"><img src={my} alt="마이"/></Link>
      </div>
    </div>
  );
};

export default Home;