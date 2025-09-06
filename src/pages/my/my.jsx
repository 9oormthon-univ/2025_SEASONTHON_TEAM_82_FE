import React, { useEffect, useState } from "react";
import { STRINGS } from "../../content/strings";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./my.css";
import "../../components/ui/Page";
import Nav from "../../components/ui/nav/Nav";
import "../../styles/phone.css";
import Keyword from "../../components/ui/keyword/keyword";

const REGION_LABELS = {
  SEO: "서울특별시", INC: "인천광역시", GYE: "경기도", DAE: "대전광역시",
  SEJ: "세종특별자치시", CHB: "충청북도", CHN: "충청남도", BUS: "부산광역시",
  DGU: "대구광역시", ULS: "울산광역시", GBN: "경상북도", GNN: "경상남도",
  GWJ: "광주광역시", JNB: "전라북도", JNN: "전라남도", GWN: "강원특별자치도",
  JJU: "제주특별자치도",
};

const INTEREST_FIELD = {
  FOOD: "요식업", EDUCATION: "교육업", STARTUP_IT: "스타트업/IT",
  ECO: "친환경", LOGISTICS: "유통업", SERVICE: "서비스업",
};

function toKoreanRegion(code) {
  return REGION_LABELS[(code || "").toUpperCase()] ?? "지역 미설정";
}
function toKoreanInterestField(field) {
  return INTEREST_FIELD[(field || "").toUpperCase()] ?? "관심분야 미설정";
}

const My = () => {
  const navigate = useNavigate();
  const { userId } = useParams(); // 필요 없으면 제거해도 됨담

  const [me, setMe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchMe = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        setLoading(true);
        const base = import.meta.env.VITE_API_BASE_URL || "";
        const resp = await fetch(`${base}/api/v1/user/me`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          signal: controller.signal,
        });

        if (resp.status === 401) {
          navigate("/login");
          return;
        }
        if (!resp.ok) throw new Error(`ME API 실패: ${resp.status}`);

        const json = await resp.json();
        setMe(json?.data ?? null);
      } catch (e) {
        if (e.name !== "AbortError") {
          console.error(e);
          setMe(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
    return () => controller.abort();
  }, [navigate]);

  const regionName = toKoreanRegion(me?.region);
  const interestFieldName = toKoreanInterestField(me?.interestField);
  const introText = (me?.introduction || "").trim();

  return (
    <div className="PhoneCanvas">
      <div className="PhoneFrame MyScene">
        <div className="my-content">
          <div className="my-head">
            <h3 className="my-title">{STRINGS.My?.title ?? "마이페이지"}</h3>
            <button className="edit-btn" type="button">
              {STRINGS.My?.updateButton ?? "내 정보 수정"}
            </button>
          </div>

          {loading ? (
            <div className="intro-box">불러오는 중…</div>
          ) : (
            <>
              <section className="profile">
                <div className="avatar" aria-label="프로필 사진">
                  <span className="avatar-plus" aria-hidden="true">+</span>
                </div>

                <div className="profile-meta">
                  <div className="name">{me?.name || "-"}</div>
                  <div className="nickname">
                    {`${STRINGS.My.nicknameLabel} : ${me?.nickname || "-"}`}
                  </div>
                  <div className="region">{regionName}</div>
                  {interestFieldName && <Keyword label={interestFieldName} />}
                </div>
              </section>

              <hr className="divider" />

              <section className="intro">
                <h3 className="section-title">
                  {STRINGS?.My?.introductionLabel ?? "자기소개"}
                </h3>
                <div className={`intro-box ${introText ? "" : "is-empty"}`}>
                  {introText ||
                    (STRINGS?.My?.introPlaceholder ??
                      "간단한 자기소개로 나를 표현해보세요")}
                </div>
              </section>

              <hr className="divider" />

              <section className="my-actions">
                <button
                  className="row-link"
                  type="button"
                  onClick={() => navigate("/portfolio")}
                >
                  <span>{STRINGS?.My?.myActiveButton ?? "내 활동 보러가기"}</span>
                  <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </section>
            </>
          )}
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default My;