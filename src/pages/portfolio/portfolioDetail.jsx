// src/pages/portfolio/portfolioDetail.jsx
import React, { useEffect, useState } from "react";
import { STRINGS } from "../../content/strings";
import { useParams, useNavigate } from "react-router-dom";
import { http } from "../../api/http";

import "./businessPlanDetail.css";
import "../../components/ui/Page";
import "../../styles/phone.css";
import Nav from "../../components/ui/nav/Nav";
import SectionBox from "../../components/ui/section/SectionBox";

// YYYY.MM.DD 로 포맷
const formatKoreanDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) {
    // 혹시 YYYY-MM-DD 문자열이라면
    const [y, m = "01", day = "01"] = String(iso).split("-");
    return `${y}.${String(m).padStart(2, "0")}.${String(day).padStart(2, "0")}`;
  }
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
};

const toKorVisibility = (v) => (String(v).toUpperCase() === "PUBLIC" ? "공개" : "비공개");

const PortfolioDetail = () => {
  const navigate = useNavigate();
  const { portfolioId } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      setErr("");
      try {
        const res = await http.get(`/v1/portfolios/${encodeURIComponent(portfolioId)}`, {
          withCredentials: true,
        });

        const d = res?.data?.data ?? {};
        // 응답 매핑
        const mapped = {
          id: d.id ?? Number(portfolioId),
          title: d.title ?? "(제목 없음)",
          introduction: d.introduction ?? "",
          startDate: d.startDate ?? null,
          endDate: d.endDate ?? null,
          visibility: d.visibility ?? "PUBLIC",
          // 서버 구현에 따라 파일 키가 다를 수 있어 몇 가지를 허용
          fileUrl: d.fileUrl ?? d.file ?? d.attachmentUrl ?? null,
          fileName: d.fileName ?? `${d.title ?? "portfolio"}.pdf`,
        };
        setItem(mapped);
      } catch (e) {
        console.error("포트폴리오 상세 불러오기 실패:", e);
        setErr("불러오기에 실패했습니다.");
        setItem(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [portfolioId]);

  if (loading) {
    return (
      <div className="PhoneCanvas">
        <div className="PhoneFrame BusinessPlanScene">
          <div className="bp-content">불러오는 중…</div>
        </div>
      </div>
    );
  }

  if (err || !item) {
    return (
      <div className="PhoneCanvas">
        <div className="PhoneFrame BusinessPlanScene">
          <div className="bp-content">{err || "데이터가 없습니다."}</div>
        </div>
      </div>
    );
  }

  const start = formatKoreanDate(item.startDate);
  const end = formatKoreanDate(item.endDate);
  const period =
    start || end ? `${start}${end ? `~${end}` : ""}` : STRINGS?.PortfolioDetail?.noPeriod ?? "기간 미설정";
  const shareType = toKorVisibility(item.visibility);

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
              <span className="bp-title">{item.title}</span>
            </div>
          </header>

          <section>
            <SectionBox title={STRINGS.PortfolioDetail.section1} type="text" content={period} />
            <SectionBox title={STRINGS.PortfolioDetail.section2} type="text" content={item.introduction || "-"} />
            {item.fileUrl && (
              <SectionBox
                title={STRINGS.PortfolioDetail.section3}
                type="download"
                content={item.title}
                fileUrl={item.fileUrl}
                fileName={item.fileName}
              />
            )}
            <SectionBox title={STRINGS.PortfolioDetail.section4} type="text" content={shareType} />
          </section>
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default PortfolioDetail;