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
import distribution from "../images/distribution.png";
import service from "../images/service.png";

const Home = () => {
    const items = [
        { name: "요식업", path: "/info" },
        { name: "교육업", path: "/info" },
        { name: "스타트업/IT", path: "/info" },
        { name: "친환경", path: "/info" },
        { name: "서비스업", path: "/info" },
        { name: "유통업", path: "/info" }
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
                        <Link to="/settings"><img src={search} alt="검색" /></Link>
                        <Link to="/alert"><img src={alarm} alt="알림" /></Link>
                    </div>
                </div>
            </div>

            {/* 슬라이드 배너 */}
            <div className="banner-container">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={false}
                    pagination={{ clickable: true }}
                    slidesPerView={1.2}         // 한 화면에 1.2배 보여주기 → 옆 슬라이드 일부 보임
                    centeredSlides={true}       // 중앙 정렬
                    spaceBetween={10} 
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
            <div className="category-title">
                나에게 맞는 창업 아이템은?
            </div>
            <div className="categories-scroll">
                <div className="categories">
                    <Link to="/food"><img src={food} alt="요식업" /></Link>
                    <Link to="/edu"><img src={study} alt="교육업" /></Link>
                    <Link to="/it"><img src={it} alt="스타트업/IT" /></Link>
                    <Link to="/eco"><img src={grow} alt="친환경" /></Link>
                    <Link to="/service"><img src={service} alt="서비스업" /></Link>
                    <Link to="/distribution"><img src={distribution} alt="유통업" /></Link>
                </div>
            </div>

            {/* 이달의 창업정보 */}
            <div className="category-title">
                이달의 창업정보
            </div>
            <div className="monthly-banners">
                <Link to="/info"><p>추천1</p></Link>
                <Link to="/info"><p>추천2</p></Link>
            </div>

            {/* 하단 탭바 */}
            <div className="bottom-tab">
                <Link to="/Home"><img src={home} alt="홈"/></Link>
                <Link to="/infotab"><img src={info} alt="정보"/></Link>
                <Link to="/portfoliotab"><img src={portfolio} alt="포트폴리오"/></Link>
                <Link to="/networktab"><img src={network} alt="네트워크"/></Link>
                <Link to="/mytab"><img src={my} alt="마이"/></Link>
            </div>
        </div>
    );
};

export default Home;
