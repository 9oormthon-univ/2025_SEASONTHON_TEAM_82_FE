import React from "react";
import "./Loader.css";

export default function Loader({ label = "불러오는 중" }) {
  return (
    <div className="loader" role="status" aria-live="polite" aria-busy="true">
      <div className="loader-spinner" />
      <div className="loader-text">{label}…</div>
    </div>
  );
}