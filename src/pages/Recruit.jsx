//창업모집페이지
import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
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
import bookmark1 from "../images/bookmark1.png";
import bookmark2 from "../images/bookmark2.png";

const Recruit = () => {
 const navigate = useNavigate();
 const location = useLocation();
 const [activeTab, setActiveTab] = useState("창업모집");
 const [region, setRegion] = useState("");
 const [posts, setPosts] = useState([]);
   const decoImages = [bookmark1, bookmark2,];
   const regionList = [
    "전체",
    "서울",
    "인천",
    "충남",
    "강원",
    "부산",
    "광주",
    "대구",
    "울산",
    "세종",
    "충북",
    "경북",
    "경남",
    "제주",
    "전북",
    "전남",
  ];     

const handleDecoClick = (postId) => {
  setPosts((prevPosts) =>
    prevPosts.map((post) => {
      if (post.id === postId) {
        // 현재 데코 이미지가 bookmark1이면 bookmark2로, bookmark2면 bookmark1로
        const nextDeco = post.deco === bookmark1 ? bookmark2 : bookmark1;
        return { ...post, deco: nextDeco };
      }
      return post;
    })
  );
};


 const handleTabClick = (tabName, path) => {
  setActiveTab(tabName);
   navigate(path); // 각 탭에 맞는 라우팅 경로 이동
  };

   useEffect(() => {
      const savedPosts2 = JSON.parse(localStorage.getItem("recruitPosts")) || [];
      const postsWithDeco = savedPosts2.map((p) => ({ ...p,
         deco: p.deco || bookmark1,
         region: p.region || "전체", // 기본값
         field: p.field || "모집분야 미정",
      })); // 기본값 }));
      setPosts(postsWithDeco);
    }, [activeTab,location]); 
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

      {/*지역설정 버튼*/}
      < div className ="region-button">
     <select value={region} onChange={(e) => setRegion(e.target.value)}>
      <option value="">선택</option>
     <option value="전체">전체</option>
     <option value="서울">서울</option>
     <option value="인천">인천</option>
     <option value="충남">충남</option>
     <option value="강원">강원</option>
     <option value="부산">부산</option>
     <option value="광주">광주</option>
     <option value="대구">대구</option>
     <option value="울산">울산</option>
     <option value="세종">세종</option>
     <option value="충북">충북</option>
     <option value="경북">경북</option>
     <option value="경남">경남</option>
     <option value="제주">제주</option>
     <option value="전북">전북</option>
     <option value="전남">전남</option>
      </select>
      </div>

      {/*글 업로드*/}
      {activeTab === "창업모집" && (
        <div className="post-list">
          {posts.length === 0 ? (
            <p className="no-posts">아직 작성된 글이 없습니다.</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="post-item">
                  {/* 지역 */}
        <span className="post-region">{post.region}</span>

          {/* 제목과 모집분야 */}
        <div className="post-text">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-field">{post.field}</p>
        </div>
          {/* 북마크 이미지 */}
        <img
          className="post-bookmark"
          src={post.deco || bookmark1}
          alt="데코 이미지"
          onClick={() => handleDecoClick(post.id)}
        />
              </div>
          
               ))
             )}
             </div>
        )}


       {/* 글쓰기 버튼 */}
            <button className="write-button" onClick={() => navigate("/writingrecruit")}>
               <img src={write} alt="글쓰기" />
      
      
              <FiEdit size={24} />
            </button>

      {/* 하단 탭바 */}
                  <div className="bottom-tab">
                    <Link to="/Home"><img src={homeg} alt="홈"/></Link>
                    <Link to="/info"><img src={info} alt="정보"/></Link>
                    <Link to="/portfoliotab"><img src={portfolio} alt="포트폴리오"/></Link>
                    <Link to="/networktab"><img src={networkh} alt="네트워크"/></Link>
                    <Link to="/mytab"><img src={my} alt="마이"/></Link>
                  </div>

    </div>
    );
}

export default Recruit;