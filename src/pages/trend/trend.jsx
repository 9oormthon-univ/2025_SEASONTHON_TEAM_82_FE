import React from "react";
import { STRINGS } from "../../content/strings";

import "./trend.css";
import "../../components/ui/Page";
import Nav from "../../components/ui/nav/Nav";
import "../../styles/phone.css";

const Trend = () => {
   const totalArticles = 354; // ✅ 더미 값 선언
   const startupRate = "+3%";
  const keywords = ["배달 플랫폼", "프리미엄 디저트", "비건 식품"];
  const articles = [
    { title: "기사제목", summary: "간단 요약", date: "2025.09.01" },
    { title: "기사제목", summary: "요약 없음", date: "" },
    { title: "기사제목", summary: "요약 없음", date: "" },
  ];          

    return (
        <div className="PhoneCanvas">
            <div className="PhoneFrame TrendScene">
                <div className="trend-content">      
                    {/* 상단 리포트 제목 */}
      <h1 className="trend-text">
        요식업 트렌드 리포트
      </h1>
      {/* 총 기사 건수 & 창업기업 수 */}
      <div className="totaltrend">
        <div className="totalArticles">
          <p className="totalArticles-text">총 기사 건수</p>
          <p className="totalArticles-count">{totalArticles}</p>
        </div>
        <div className="startupRate">
          <p className="startupRate-text">전체 업종대비 요식업 창업기업 수</p>
          <p className="startupRate-count">{startupRate}</p>
        </div>
      </div>

      {/* 키워드 TOP3 */}
      <div>
        <p className="keyword-text">가장 많이 언급된 키워드 TOP3</p>
        <ul className="keyword-count">
          {keywords.map((word, i) => (
            <li key={i} className="text-gray-700">
              {i + 1}. {word}
            </li>
          ))}
        </ul>
      </div>

      {/* 최근 기사 하이라이트 */}
<div className="article-section">
  <p className="article-title">최근 관련 기사 하이라이트</p>
  <div className="article-list">
    {articles.map((article, i) => (
      <div key={i} className="article-item">
        {/* 이미지 자리 */}
        <div className="article-thumb"></div>
        <div className="article-content">
          <p className="article-head">{article.title}</p>
          <p className="article-summary">{article.summary}</p>
          {article.date && <p className="article-date">{article.date}</p>}
        </div>
      </div>
    ))}
  </div>
</div>

      
                
                    
                </div>
                <Nav/>
            </div>
        </div>
    )
}

export default Trend;