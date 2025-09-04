import React from "react";
import "./keyword.css";

export default function Keyword({ label = "기타", className = "" }) {

  const COLOR_MAP = {
    "요식업": "#FFEBF7",
    "교육업": "#FFE322",
    "스타트업/IT": "#DEE678",
    "친환경": "#F7FFDB",
    "유통업": "#DDDD99",
    "서비스업": "#CCC333",
    "기타": "#34DEE4",
  };

  const bg = COLOR_MAP[label] ?? COLOR_MAP["기타"];

  return (
    <span
      className={`keyword ${className}`}
      style={{ backgroundColor: bg }}
      aria-label={`분야: ${label}`}
    >
      {label}
    </span>
  );
}