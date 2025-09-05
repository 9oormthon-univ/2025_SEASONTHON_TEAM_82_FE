import React from "react";
import { STRINGS } from "../../content/strings";
import { Link, useParams,useNavigate } from "react-router-dom";

import "./businessPlanDetail.css";
import "../../components/ui/Page";
import "../../styles/phone.css";
import Nav from "../../components/ui/nav/Nav";
import SectionBox from "../../components/ui/section/SectionBox";


const DATA = {
    1: {
        id: 1,
        title: "청년 로컬 카페 브랜딩 프로젝트",
        introduction: "대구 지역 청년과 함께 운영하는 소규모 카페 창업 브랜딩 프로젝트로 합리적인 가격과 아늑한 공간을 제공하여 청년층과 직장인을 주요 타겟으로 합니다.",
        startDate: "2025-09-04",
        endDate: "2025-09-05",
        shareType: "PUBLIC",
        file: "https://naver.com/"
    },
};

// 날짜 형식 변경
const formatKoreanDate = (iso) => {
  if (!iso) return "";
  const [y, m, d] = String(iso).split("-");
  return `${y}.${m.padStart(2, "0")}.${d.padStart(2, "0")}`;
};

const PortfolioDetail = () => {
    
    const navigate = useNavigate();
    const { portfolioId } = useParams();
    const pf = DATA[portfolioId];
    const startDate = formatKoreanDate(pf?.startDate);
    const endDate = formatKoreanDate(pf?.endDate);
    const shareType = (pf?.shareType == "PUBLIC") ? "공개" : "비공개";

    if (!pf) return <div className="PhoneCanvas"><div className="PhoneFrame BusinessPlanScene"><div className="bp-content">데이터가 없습니다.</div></div></div>;

    return (
        <div className="PhoneCanvas">
            <div className="PhoneFrame BusinessPlanScene">
                <div className="bp-content">   
                    
                    {/* 헤더 */}
                    <header className="bp-header">
                        <button
                            className="bp-back"
                            onClick={() => navigate(-1)}
                            aria-label="뒤로가기"
                            >
                            {/* 단순한 좌측 화살표 (SVG) */}
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M15 18l-6-6 6-6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <div className="bp-title-row">
                            <span className="bp-title">{pf.title}</span>
                        </div>
                    </header>

                    <section>
                        <SectionBox title={STRINGS.PortfolioDetail.section1} type="text" content={`${startDate}~${endDate}`}/>
                        <SectionBox title={STRINGS.PortfolioDetail.section2} type="text" content={pf.introduction}/>
                        <SectionBox title={STRINGS.PortfolioDetail.section3} type="download" content={pf.title} fileUrl={pf.file} fileName={`${pf.title}.PDF`}/>
                        <SectionBox title={STRINGS.PortfolioDetail.section4} type="text" content={shareType}/>                    
                    </section>

                </div>
                <Nav/>
            </div>
        </div>
    );
}

export default PortfolioDetail;