
import React from "react";
import "./monthlystartup.css"; // CSS 따로 분리

const monthlystartup = ({ image, title, subtitle, dDay }) => {
  // dDay가 7 이하이면 파랑색, 아니면 회색
  const dDayColor = dDay <= 7 ? "#007BFF" : "#A0A0A0";

  return (
    <div className="foundation-card">
      <div className="card-content">
        <img src={image} alt={title} className="card-image" />
        <div className="text-content">
          <div className="title-wrapper">
            <span className="dday" style={{ backgroundColor: dDayColor }}>
              D-{dDay}
            </span>
            <h2 className="card-title">{title}</h2>
          </div>
          <p className="card-subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default monthlystartup;
