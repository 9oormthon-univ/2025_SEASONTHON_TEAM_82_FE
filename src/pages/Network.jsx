//네트워크 채널
import { useState,useEffect } from "react";
import { useNavigate,useLocation} from "react-router-dom";
import "./Network.css";
import { FiEdit } from "react-icons/fi"; 
//  글쓰기 아이콘
import { Link } from "react-router-dom";

import Nav from "../components/ui/nav/Nav";

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

  const [loading, setLoading] = useState(false);
       
  const handleTabClick = (tabName, path) => {
    setActiveTab(tabName);
    navigate(path); 
  };

 useEffect(() => {
    if (activeTab !== "자유게시판") return;

    const fetchFreeBoards = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("accessToken");
        if (!token) {
          // 토큰 없으면 로그인 등으로 보내기
          navigate("/login");
          return;
        }

        // 필요시 BASE URL을 .env로 분리: import.meta.env.VITE_API_BASE_URL
        const resp = await fetch(`/api/v1/free-boards?page=0&size=20`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (resp.status === 401) {
          navigate("/login");
          return;
        }

        if (!resp.ok) {
          throw new Error(`API 실패: ${resp.status}`);
        }

        const json = await resp.json();
        const items = json?.data?.items ?? [];

        // 컴포넌트에서 쓰는 필드명으로 매핑
        const mapped = items.map((it) => ({
          id: it.freeboardId,
          title: it.freeBoardTitle,
          content: it.freeBoardContent,
          createdAt: it.createdAt,
        }));

        setPosts(mapped);
      } catch (e) {
        console.error(e);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFreeBoards();
  }, [activeTab, location, navigate]);


  return (
    <div className="PhoneCanvas">
      <div className="PhoneFrame NetworkScene">
        <div className="network-content">


          {/* 헤더 */}
          <header className="network-header">
            <p>창업 네트워크</p>
            <div className = "search-icon">
              <Link to="/settings2"><img src={search} alt="검색" /></Link>
            </div>
          </header>


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
              {loading ? (
                <p className="no-posts">불러오는 중…</p>
              ) : posts.length === 0 ? (
                <p className="no-posts">아직 작성된 글이 없습니다.</p>
              ) : (
                posts.map((post) => (
                  <div key={post.id} className="post-item">
                    <div className="post-deco">
                      <img src={chat} alt="장식 이미지" />
                    </div>
                    <div className="post-text">
                      <p className="post-title">{post.title}</p>
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
        </div>

        <Nav/>
      </div>
    </div>
  );
};
export default Network;