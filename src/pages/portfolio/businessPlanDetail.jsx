import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { http } from "../../api/http";
import { STRINGS } from "../../content/strings";

import "./businessPlanDetail.css";
import "../../components/ui/Page";
import "../../styles/phone.css";
import Nav from "../../components/ui/nav/Nav";
import SectionBox from "../../components/ui/section/SectionBox";
import Keyword from "../../components/ui/keyword/keyword";
import Loader from "../../components/ui/loader/Loader";

const FIELD_LABELS = {
    FOOD: "요식업",
    EDUCATION: "교육업",
    STARTUP_IT: "스타트업/IT",
    ECO: "친환경",
    LOGISTICS: "유통업",
    SERVICE: "서비스업"
};

const formatKoreanDate = (iso) => {
  if (!iso) return "";
  const d = String(iso).slice(0, 10); // YYYY-MM-DD
  const [y, m, day] = d.split("-");
  return `${y}.${m?.padStart(2, "0")}.${day?.padStart(2, "0")}`;
};

export default function BusinessPlanDetail() {
  const navigate = useNavigate();
  const { businessPlanId } = useParams();

  const [bp, setBp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setErr(null);

        // baseURL 이 "/api" 이므로 여기서는 "/v1/..." 로 호출
        const res = await http.get(`/v1/business-plans/${businessPlanId}`, {
          withCredentials: true,
        });

        const d = res?.data?.data ?? {};
        const mapped = {
          id: d.businessPlanId ?? d.id ?? Number(businessPlanId),
          title: d.title ?? "",
          category: FIELD_LABELS[d.businessType] ?? d.businessType ?? "",
          overview: d.content?.overview ?? "",
          marketingAnalysis: d.content?.marketAnalysis ?? "",
          businessModel: d.content?.businessModel ?? "",
          actionPlan: d.content?.actionPlan ?? "",
          file: d.attachmentUrl ?? null, // 있으면 SectionBox(download)로 노출
          createdAt: d.createdAt,
          updatedAt: d.updatedAt,
        };

        if (alive) setBp(mapped);
      } catch (e) {
        console.error("[BP] 상세 조회 실패", e);
        if (alive) setErr(e);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [businessPlanId]);

  const date = useMemo(() => formatKoreanDate(bp?.createdAt), [bp?.createdAt]);

    if (loading) {
    return (
        <div className="PhoneCanvas">
        <div className="PhoneFrame BusinessPlanScene">
            <Loader label="불러오는 중" />
        </div>
        </div>
    );
    }

  if (err || !bp) {
    return (
      <div className="PhoneCanvas">
        <div className="PhoneFrame BusinessPlanScene">
          <div className="bp-content">데이터가 없습니다.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="PhoneCanvas">
      <div className="PhoneFrame BusinessPlanScene">
        <div className="bp-content">
          {/* 헤더 */}
          <header className="bp-header">
            <button className="bp-back" onClick={() => navigate(-1)} aria-label="뒤로가기">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="bp-title-row">
              <span className="bp-title">{bp.title}</span>
              {bp.category && <Keyword label={bp.category} />}
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
            <SectionBox title={STRINGS.BusinessPlanDetail.section4} type="download" content={bp.file}/>
            {bp.file && (
              <SectionBox
                title={STRINGS.BusinessPlanDetail.section5}
                type="download"
                content={bp.title}
                fileUrl={bp.file}
                fileName={`${bp.title}.PDF`}
              />
            )}
          </section>
        </div>
        <Nav />
      </div>
    </div>
  );
}