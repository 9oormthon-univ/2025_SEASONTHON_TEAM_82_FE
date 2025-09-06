//네트워크 채널
import { useState,useEffect } from "react";
import { useNavigate,useLocation} from "react-router-dom";
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
import chat from "../images/chat.png";

const Network = () => {
const navigate = useNavigate();
const location = useLocation();
 const [activeTab, setActiveTab] = useState("자유게시판");
 const [posts, setPosts] = useState([]);
       
 const handleTabClick = (tabName, path) => {
  setActiveTab(tabName);
   navigate(path); 
  };

 useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("freePosts")) || [];
    setPosts(savedPosts);
  }, [activeTab,location]); // 자유게시판 탭 올 때마다 갱신

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

      {/* 자유게시판 글 목록 */}
      {activeTab === "자유게시판" && (
        <div className="post-list">
          {posts.length === 0 ? (
            <p className="no-posts">아직 작성된 글이 없습니다.</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="post-item">
                <div className="post-deco">
            <img
              src={chat} // 글마다 항상 보여줄 꾸며진 이미지
              alt="장식 이미지"
            />
          </div>
          <div className ="post-text">
                <h3 className="post-title">{post.title}</h3>
           
                <p className="post-content">{post.content}</p>
              </div>
            </div>
          
            ))
          )}
        </div>
      )}


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