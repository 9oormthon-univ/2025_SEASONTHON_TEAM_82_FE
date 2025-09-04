import React from "react";
import { Link } from "react-router-dom";
import "./FoundationInfo.css";

export default function FoundationInfo({
    to = "/",
    image,
    title,
    subtitle,
    className = "",
    imgAlt = "",
}) {
    return (
        <Link to={to} className={`foundation-info ${className}`} aria-label={title}>
            <div className="foundation-info__left">
                {image && <img src={image} alt={imgAlt} loading="lazy"/>}
            </div>

            <div className="foundation-info__right">
                <h3 className="foundation-info__title">{title}</h3>
                {subtitle && <p className="foundation-info__subtitle">{subtitle}</p>}
            </div>
        </Link>
    );
}