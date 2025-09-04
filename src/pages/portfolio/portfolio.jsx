import React from "react";
import { STRINGS } from "../../content/strings";
import { Link } from "react-router-dom";

import "./portfolio.css";
import "../../components/ui/Page";
import "../../styles/phone.css";
import Nav from "../../components/ui/nav/Nav";
import Keyword from "../../components/ui/keyword/keyword";

import p_logo from "../../images/portfolio/portfolio_logo.svg";
import b_logo from "../../images/portfolio/businessplan_logo.svg";

import p_cover from "../../images/portfolio/portfolio_cover.svg";
import b_cover from "../../images/portfolio/businessplan_cover.svg";


const Portfolio = () => {

    const myPortfolios = [
        { id: 1, title: "청년 로컬 카페 브랜딩 프로젝트", period: "2025.05.27 ~ 2025.06.29" },
        { id: 2, title: "카페 상품 디자인 UI/UX 제작", period: "2025.07.30 ~ 2025.08.14" },
    ];
    const myBusinessPlan = [
        { id: 1, title: "친환경 리유저블 용기 배달 서비스", tag: "친환경" },
        { id: 2, title: "대구 소규모 카페 창업", tag: "요식업" },
    ];

    return (
        <div className="PhoneCanvas">
            <div className="PhoneFrame PortfolioScene">
                <div className="portfolio-content">                
                    {/* 상단 제목 */}
                    <header className="pageTitle">
                        <h3 className="titleText">{STRINGS.Portfolio.title}</h3>
                    </header>

                    {/* subtitle & description */}
                    <section className="lead">
                        <p className="lead-subtitle">{STRINGS.Portfolio.subtitle}</p>
                        <p className="lead-description">{STRINGS.Portfolio.description}</p>
                    </section>

                    {/* 업로드 버튼 */}
                    <section className="upload-actions" aria-label="빠른 등록">
                        <button className="upload-card" type="button">
                            <div className="qc-icon"><img src={p_logo} alt="" /></div>
                            <div className="qc-label">{STRINGS.Portfolio.upload.portfolio}</div>
                        </button>

                        <button className="upload-card" type="button">
                            <div className="qc-icon"><img src={b_logo} alt="" /></div>
                            <div className="qc-label">{STRINGS.Portfolio.upload.businesspaln}</div>
                        </button>
                    </section>

                    {/* 나의 사업계획서 */}
                    <section className="section">
                        <div className="section-head">
                        <h3 className="section-title">{STRINGS.Portfolio.myPortfolio.title}</h3>
                        <button className="link-more" type="button">더보기</button>
                        </div>

                        {myPortfolios.length === 0 ? (
                            <p className="empty-card">"{STRINGS.Portfolio.myPortfolio.defaultDescription}"</p>
                        ) : (
                            <ul className="item-list">
                                {myPortfolios.map(p => (
                                    <li key={p.id}>
                                        <Link to={`/portfolio/p/${p.id}`} className="item-card" aria-label={`${p.title} 상세보기`}>
                                            <div className="item-icon"><img src={p_cover} alt="" /></div>
                                            <div className="item-body">
                                                <div className="item-title">{p.title}</div>
                                                {p.period && <div className="item-meta">{p.period}</div>}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>

                    {/* 나의 사업계획서 */}
                    <section className="section">
                        <div className="section-head">
                            <h3 className="section-title">{STRINGS.Portfolio.myBusinessPlan.title}</h3>
                            <button className="link-more" type="button">더보기</button>
                        </div>

                        {myBusinessPlan.length === 0 ? (
                            <p className="empty-card">"{STRINGS.Portfolio.myBusinessPlan.defaultDescription}"</p>
                        ) : (
                            <ul className="item-list">
                                {myBusinessPlan.map(p => (
                                    <li key={p.id}>
                                        <Link to={`/portfolio/b/${p.id}`}  className="item-card is-outline" aria-label={`${p.title} 상세 보기`}>
                                            <div className="item-icon"><img src={b_cover} alt="" /></div>
                                            <div className="item-body">
                                                <div className="item-title">{p.title}</div>
                                            </div>
                                            {p.tag && <Keyword label={p.tag} />}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>

                </div>
                <Nav/>
            </div>
        </div>
    )
}

export default Portfolio;