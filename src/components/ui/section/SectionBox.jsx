import React from "react";
import "./SectionBox.css";
import comment from "../../../images/portfolio/comment.svg";

export default function SectionBox({ type="text", title, content, fileUrl, fileName = "사업계획서.pdf", className = "" }) {
  
  const uid = React.useId();
  const isDownload = type === "download";
  const isEmptyText = !content || (typeof content === "string" && content.trim() === "");

  return (
    <section className={`section-box ${isDownload ? "is-download" : ""} ${className}`}>
      <div className="section-box__panel">
        {title && <h3 className="section-box__title">{title}</h3>}

        {isDownload ? (
          <a href={fileUrl} className="section-box__file" target="_blank" rel="noopener noreferrer" download aria-label={`${fileName} 다운로드`}>
            {fileName}
          </a>
        ) : isEmptyText ? (
          <div className="section-box__empty" role="note" aria-live="polite">
            <img
              src={comment}
              alt=""
              className="section-box__empty-icon"
              aria-hidden="true"
            />
            <span className="section-box__empty-text">아직 작성되지 않았습니다</span>
          </div>
        ) : typeof content === "string" ? (
          <p className="section-box__content">{content}</p>
        ) : (
          content
        )}
      </div>
    </section>
  );
}