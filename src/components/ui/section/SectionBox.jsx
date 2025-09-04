import React from "react";
import "./SectionBox.css";

export default function SectionBox({ title, content, className = "" }) {
  const uid = React.useId();

  return (
    <section className={`section-box ${className}`} aria-labelledby={`${uid}-title`}>
      {title && (
        <h3 id={`${uid}-title`} className="section-box__title">
          {title}
        </h3>
      )}

      <div className="section-box__panel">
        {typeof content === "string" ? (
          <p className="section-box__content">{content}</p>
        ) : (
          content
        )}
      </div>
    </section>
  );
}