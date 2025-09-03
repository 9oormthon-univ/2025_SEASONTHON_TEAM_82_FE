//정보페이지
import { Link } from "react-router-dom";
import React from "react";
import "./Info.css";

import my from "../images/my.png";
import homeg from "../images/homeg.png";
import portfolio from "../images/portfolio.png";
import infoh from "../images/infoh.png";
import network from "../images/network.png";
import search from "../images/search.png";
import food from "../images/food.png";
import study from "../images/study.png";
import it from "../images/it.png";
import grow from "../images/grow.png";
import distribution from "../images/distribution.png";
import service from "../images/service.png";

const Info = () => {
  return (
    <div className="Info">
      {/* 헤더 */}
            <header className="Info-header">
              <h3>창업 정보</h3>
            <div className = "search-icon">
              <Link to="/settings3"><img src={search} alt="검색" /></Link>
              </div>
             </header>

       {/* 하단 탭바 */}
                  <div className="bottom-tab">
                    <Link to="/Home"><img src={homeg} alt="홈"/></Link>
                    <Link to="/infotab"><img src={infoh} alt="정보"/></Link>
                    <Link to="/portfoliotab"><img src={portfolio} alt="포트폴리오"/></Link>
                    <Link to="/networktab"><img src={network} alt="네트워크"/></Link>
                    <Link to="/mytab"><img src={my} alt="마이"/></Link>
                  </div>
    </div>
  );
};

export default Info; 