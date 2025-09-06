import React from "react";
import { STRINGS } from "../../content/strings";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
          <header className="info-header">
            <p>창업 정보</p>
            <div className = "search-icon">
              <Link to="/settings2"><img src={search} alt="검색" /></Link>
            </div>
          </header>

          <h3 className="subtitle-info">카테고리 별 보기</h3>

          {/* 카테고리 */}
          <div className="category">
            <button onClick={() => goToCategory("food")}>
              <div>
                <img src={food} alt="요식업" />
                <p>요식업</p>
              </div>
            </button>
            <button onClick={() => goToCategory("study")}>
              <div>
                <img src={study} alt="교육업" />
                <p>교육업</p>
              </div>
            </button>
            <button onClick={() => goToCategory("it")}>
              <div>
                <img src={it} alt="스타트업/IT" />
                <p>스타트업/IT</p>
              </div>
            </button>
            <button onClick={() => goToCategory("grow")}>
              <div>
                <img src={grow} alt="친환경" />
                <p>친환경</p>
              </div>
            </button>
            <button onClick={() => goToCategory("distribution")}>
              <div>
                <img src={distribution} alt="유통업" />
                <p>유통업</p>
              </div> 
            </button>
            <button onClick={() => goToCategory("service")}>
              <div>
                <img src={service} alt="서비스업" />
                <p>서비스업</p>
              </div>
            </button>
          </div>
          
          <h3 className="subtitle-info">이달의 창업 정보</h3>

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