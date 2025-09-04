//창업모집페이지
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Recruit.css";
import {Link} from "react-router-dom";
import { FiEdit } from "react-icons/fi";

import search from "../images/search.png";
import my from "../images/my.png";
import homeg from "../images/homeg.png";
import portfolio from "../images/portfolio.png";
import info from "../images/info.png";
import networkh from "../images/networkh.png";
import write from "../images/write.png";

const Recruit = () => {
    const navigate = useNavigate();
 const [activeTab, setActiveTab] = useState("창업모집");
       
 const handleTabClick = (tabName, path) => {
  setActiveTab(tabName);
   navigate(path); // 각 탭에 맞는 라우팅 경로 이동
  };
    return (
   <div className= "recruit">
    <div className="network-container">
      {/* 헤더 */}
      <header className="network-header">
        <h2>창업 네트워크</h2>
      <div className = "search-icon">
        <Link to="/settings2"><img src={search} alt="검색" /></Link>
        </div>
       </header>
      </div>

       {/* 탭 메뉴 */}
      <nav className="network-tabs">
        <span
          className={activeTab === "자유게시판" ? "tab active" : "tab"}
          onClick={() => handleTabClick("자유게시판", "/networktab")}
        >
          자유게시판
        </span>
        <span
          className={activeTab === "창업모집" ? "tab active" : "tab"}
          onClick={() => handleTabClick("창업모집", "/network/recruit")}
        >
          창업모집
        </span>
        <span
          className={activeTab === "요청함" ? "tab active" : "tab"}
          onClick={() => handleTabClick("요청함", "/network/request")}
        >
          요청함
        </span>
      </nav>

       {/* 글쓰기 버튼 */}
            <button className="write-button" onClick={() => navigate("/writingrecruit")}>
               <img src={write} alt="글쓰기" />
      
      
              <FiEdit size={24} />
            </button>

      {/* 하단 탭바 */}
                  <div className="bottom-tab">
                    <Link to="/Home"><img src={homeg} alt="홈"/></Link>
                    <Link to="/infotab"><img src={info} alt="정보"/></Link>
                    <Link to="/portfoliotab"><img src={portfolio} alt="포트폴리오"/></Link>
                    <Link to="/networktab"><img src={networkh} alt="네트워크"/></Link>
                    <Link to="/mytab"><img src={my} alt="마이"/></Link>
                  </div>

    </div>
    );
}

export default Recruit;