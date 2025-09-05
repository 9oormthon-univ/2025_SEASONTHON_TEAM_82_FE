//네트워크 채널
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Network.css";
import { FiEdit } from "react-icons/fi"; 
//  글쓰기 아이콘
 import { Link } from "react-router-dom";


import search from "../images/search.png";
import write from "../images/write.png";
import my from "../images/my.png";
import homeg from "../images/homeg.png";
import portfolio from "../images/portfolio.png";
import info from "../images/info.png";
import networkh from "../images/networkh.png";

const Network = () => {
const navigate = useNavigate();
 const [activeTab, setActiveTab] = useState("자유게시판");
       
 const handleTabClick = (tabName, path) => {
  setActiveTab(tabName);
   navigate(path); // 각 탭에 맞는 라우팅 경로 이동
  };

  return (
    <div className="network">
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
          onClick={() => handleTabClick("자유게시판", "/network/free")}
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
      <button className="write-button" onClick={() => navigate("/writingfree")}>
         <img src={write} alt="글쓰기" />


        <FiEdit size={24} />
      </button>

      {/* 하단 탭바 */}
            <div className="bottom-tab">
              <Link to="/Home"><img src={homeg} alt="홈"/></Link>
              <Link to="/info"><img src={info} alt="정보"/></Link>
              <Link to="/portfolio"><img src={portfolio} alt="포트폴리오"/></Link>
              <Link to="/networktab"><img src={networkh} alt="네트워크"/></Link>
              <Link to="/mytab"><img src={my} alt="마이"/></Link>
            </div>
    </div>
  );
};
export default Network;