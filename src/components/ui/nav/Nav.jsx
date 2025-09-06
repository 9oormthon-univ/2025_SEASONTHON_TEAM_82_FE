import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Nav.css";

import navHome from "../../../images/nav/nav_home.svg";
import navInfo from "../../../images/nav/nav_info.svg";
import navPortfolio from "../../../images/nav/nav_portfolio.svg";
import navNetwork from "../../../images/nav/nav_network.svg";
import navMy from "../../../images/nav/nav_my.svg";

import navHomeActive from "../../../images/nav/nav_home_active.svg";
import navInfoActive from "../../../images/nav/nav_info_active.svg";
import navPortfolioActive from "../../../images/nav/nav_portfolio_active.svg";
import navNetworkActive from "../../../images/nav/nav_network_active.svg";
import navMyActive from "../../../images/nav/nav_my_active.svg";

const items = [
    {key: "home", aria: "홈", to: "/home", off: navHome, on: navHomeActive},
    {key: "info", aria: "정보", to: "/info", off: navInfo, on: navInfoActive},
    {key: "portfolio", aria: "포트폴리오", to: "/portfolio", off: navPortfolio, on: navPortfolioActive},
    {key: "network", aria: "네트워크", to: "/network/free", off: navNetwork, on: navNetworkActive},
    {key: "my", aria: "마이", to: "/my/:userId", off: navMy, on: navMyActive},
];

export default function Nav() {
    const { pathname } = useLocation();

    return (
        <nav className="BottomNav" role="navigation" aria-label="하단 네비게이션">
            {items.map(({ key, aria, to, off, on }) => {
                return (
                    <NavLink key={key} to={to} className={({ isActive }) => "nav-item" + (isActive ? " is-active" : "")} aria-label={aria}>
                        {({ isActive }) => (
                            <img src={isActive ? on : off} className="icon" alt="" aria-hidden="true" />
                        )}
                    </NavLink>
                );
            })}
        </nav>
    );
}