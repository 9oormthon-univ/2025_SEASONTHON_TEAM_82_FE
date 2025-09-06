import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./request.css";
import Nav from "../../components/ui/nav/Nav";
import search from "../../images/search.png";

const Request = () => {
  const navigate = useNavigate();
  const [sentRequests, setSentRequests] = useState([]);
  const [receivedRequests, setReceivedRequests] = useState([]);
   const [activeTab, setActiveTab] = useState("요청함");

   const handleTabClick = (tabName, path) => {
  setActiveTab(tabName);
   navigate(path); 
  };


  useEffect(() => {
    const sent = JSON.parse(localStorage.getItem("sentRequests")) || [];
    const received = JSON.parse(localStorage.getItem("receivedRequests")) || [];
    setSentRequests(sent);
    setReceivedRequests(received);
  }, []);

  const handleApprove = (id) => {
    const updated = receivedRequests.map((req) =>
      req.id === id ? { ...req, status: "승인" } : req
    );
    setReceivedRequests(updated);
    localStorage.setItem("receivedRequests", JSON.stringify(updated));
  };

  const handleReject = (id) => {
    const updated = receivedRequests.map((req) =>
      req.id === id ? { ...req, status: "거절" } : req
    );
    setReceivedRequests(updated);
    localStorage.setItem("receivedRequests", JSON.stringify(updated));
  };

  const renderRequestItem = (req, type) => (
    <div key={req.id} className="request-item">
      <img src={req.image} alt="프로필" className="request-image" />
      <div className="request-info">
        <p className="request-name">{req.name}</p>
        <p className="request-detail">{req.region} | {req.field}</p>
        {req.status && <p className={`request-status ${req.status.toLowerCase()}`}>{req.status}</p>}
      </div>

      {type === "received" && !req.status && (
        <div className="request-actions">
          <button className="approve" onClick={() => handleApprove(req.id)}>승인</button>
          <button className="reject" onClick={() => handleReject(req.id)}>거절</button>
        </div>
      )}

      <button
        className="go-profile"
        onClick={() => navigate(`/profile/${req.id}`)}
      >
        &gt;
      </button>
    </div>
  );

  return (
    <div className="PhoneCanvas">
      <div className="PhoneFrame requestScene">
        <div className="request-content">
          <div className="request-page">

            {/* 헤더 */}
            <div className="network-container">
              <header className="network-header">
                <h2>창업 네트워크</h2>
                <div className="search-icon">
                  <Link to="/settings2">
                    <img src={search} alt="검색" />
                  </Link>
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
            {/* 보낸 요청 */}
            <h3 className="request-section-title">보낸 요청</h3>
            {sentRequests.length === 0 ? (
              <p className="no-requests">보낸 요청이 없습니다</p>
            ) : (
              sentRequests.map(req => renderRequestItem(req, "sent"))
            )}

            {/* 받은 요청 */}
            <h3 className="request-section-title">받은 요청</h3>
            {receivedRequests.length === 0 ? (
              <p className="no-requests">받은 요청이 없습니다</p>
            ) : (
              receivedRequests.map(req => renderRequestItem(req, "received"))
            )}

          </div>
        </div>

        {/* 하단 네비게이션 */}
        <Nav />
      </div>
    </div>
  );
};

export default Request;
