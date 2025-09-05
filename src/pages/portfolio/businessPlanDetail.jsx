import React from "react";
import { STRINGS } from "../../content/strings";
import { Link, useParams,useNavigate } from "react-router-dom";

import "./businessPlanDetail.css";
import "../../components/ui/Page";
import "../../styles/phone.css";
import Nav from "../../components/ui/nav/Nav";
import SectionBox from "../../components/ui/section/SectionBox";
import Keyword from "../../components/ui/keyword/keyword";


const DATA = {
    1: {
        id: 1,
        title: "친환경 리유저블 용기 배달 서비스",
        category: "요식업",
        overview: "대구 지역 청년과 함께 운영하는 소규모 카페 창업 합리적인 가격과 아늑한 공간을 제공하여 청년층과 직장인 고객을 주요 타겟으로 합니다.",
        marketingAnalysis: "지역 내 카페 수요는 꾸준히 증가하고 있으며, 대형 프랜차이즈 외에 개성 있는 소규모 카페에 대한 관심도 높습니다.",
        businessModel: "",
        actionPlan: "",
        file: "https://naver.com",
        createdAt: "2025-09-04"
    },
};

// 날짜 형식 변경
const formatKoreanDate = (iso) => {
  if (!iso) return "";
  const [y, m, d] = String(iso).split("-");
  return `${y}.${m.padStart(2, "0")}.${d.padStart(2, "0")}`;
};

const BusinessPlanDetail = () => {
    
    const navigate = useNavigate();
    const { businessPlanId } = useParams();
    const bp = DATA[businessPlanId];
    const date = formatKoreanDate(bp?.createdAt);

    if (!bp) return <div className="PhoneCanvas"><div className="PhoneFrame BusinessPlanScene"><div className="bp-content">데이터가 없습니다.</div></div></div>;

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
                            <span className="bp-title">{bp.title}</span>
                            {bp.category && <Keyword label={bp.category} />}
                            {/* <span className="bp-category">{bp.category}</span> */}
                        </div>
                        <div className="bp-meta">
                            <span className="bp-date-label">작성일 : </span>
                            <span className="bp-date">{date}</span>
                        </div>
                    </header>

                    <section>
                        <SectionBox title={STRINGS.BusinessPlanDetail.section1} type="text" content={bp.overview}/>
                        <SectionBox title={STRINGS.BusinessPlanDetail.section2} type="text" content={bp.marketingAnalysis}/>
                        <SectionBox title={STRINGS.BusinessPlanDetail.section3} type="text" content={bp.businessModel}/>
                        <SectionBox title={STRINGS.BusinessPlanDetail.section4} type="text" content={bp.actionPlan}/>
                        <SectionBox title={STRINGS.BusinessPlanDetail.section5} type="download" content={bp.title} fileUrl={bp.file} fileName={`${bp.title}.PDF`}/>
                    </section>

                </div>
                <Nav/>
            </div>
        </div>
    );
}

export default BusinessPlanDetail;