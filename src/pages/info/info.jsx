import React from "react";
import { STRINGS } from "../../content/strings";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./info.css";
import "../../components/ui/Page";
import Nav from "../../components/ui/nav/Nav";
import "../../styles/phone.css";
import MonthlyStartup from "../../components/button/monthlyinfo/monthlystartup";

import food from "../../images/food.png";
import study from "../../images/study.png";
import it from "../../images/it.png";
import grow from "../../images/grow.png";
import distribution from "../../images/distribution.png";
import service from "../../images/service.png";
import search from "../../images/search.png";
import group from "../../images/group.png";

const Info = () => {
  const navigate = useNavigate();

  const goToCategory = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="PhoneCanvas">
      <div className="PhoneFrame MyScene">
        <div className="my-content">

        {/* 헤더 */}
      <header className="network-header">
        <h2 >창업 정보</h2>
      <div className = "search-icon">
        <Link to="/settings2"><img src={search} alt="검색" /></Link>
        </div>
       </header>

       <h3 style={{ paddingLeft: "20px", marginTop: "-5px" }}>카테고리 별 보기</h3>
          {/* 카테고리 */}
          <div className="category">
            <button onClick={() => goToCategory("food")}>
              <img src={food} alt="요식업" />
            </button>
            <button onClick={() => goToCategory("study")}>
              <img src={study} alt="교육업" />
            </button>
            <button onClick={() => goToCategory("it")}>
              <img src={it} alt="스타트업/IT" />
            </button>
            <button onClick={() => goToCategory("grow")}>
              <img src={grow} alt="친환경" />
            </button>
            <button onClick={() => goToCategory("distribution")}>
              <img src={distribution} alt="유통업" />
            </button>
            <button onClick={() => goToCategory("service")}>
              <img src={service} alt="서비스업" />
            </button>
          </div>
          <h3 style ={{paddingLeft:"20px"}}>이달의 창업 정보</h3>

           <div className="monthly-banners">
                         <MonthlyStartup to="/info" image={group} 
                           title="서비스 스타트업 프로그램"
                           subtitle="청년 맞춤형 서비스 창업 멘토링&사업화 지원" 
                           dDay={7}             
                         />
                          <MonthlyStartup to="/info" image={group} 
                           title="서비스 스타트업 프로그램"
                           subtitle="청년 맞춤형 서비스 창업 멘토링&사업화 지원"
                           dDay={7}
                         />
                          <MonthlyStartup to="/info" image={group} 
                           title="서비스 스타트업 프로그램"
                           subtitle="청년 맞춤형 서비스 창업 멘토링&사업화 지원"
                           dDay={7}
                         />
                       </div>
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Info;