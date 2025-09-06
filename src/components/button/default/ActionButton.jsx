import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ActionButton({
  text,
  color = "#4353FF",
  to,
  apiRequest,
  onSuccess,
  onError,
  fullWidth = false,
  className = "",
  style = {},
}) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate?.();

  const handleClick = async () => {
    if (loading) return;
    try {
      setLoading(true);

      // 1) API가 있으면 먼저 실행
      if (typeof apiRequest === "function") {
        await apiRequest();
      }

      onSuccess?.();

      // 2) 이동할 URL이 있으면 이동
      if (to) {
        if (/^https?:\/\//i.test(to)) {
          window.location.href = to; // 외부 링크
        } else if (navigate) {
          navigate(to);              // 내부 라우팅
        } else {
          window.location.href = to;
        }
      }
    } catch (err) {
      console.error("ActionButton error:", err);
      onError?.(err);
      // 필요 시 토스트/알럿 등 추가
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`bo-btn ${className}`}
      style={{
        backgroundColor: color,
        width: fullWidth ? "100%" : undefined,
        ...style,
      }}
      aria-busy={loading || undefined}
    >
      {loading ? "처리 중…" : text}
    </button>
  );
}