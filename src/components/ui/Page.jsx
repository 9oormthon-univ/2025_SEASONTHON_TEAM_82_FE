import React from "react";

export default function Page({
  children,
  hasBottomNav = false,
  safeArea = true,
  useContainer = true,
  title,
}) {
  return (
    <main
      className={[
        'fullscreen',
        safeArea ? 'safe-top safe-bottom' : '',
        hasBottomNav ? 'with-bottom-nav' : '',
      ].join(' ')}
      aria-label={title}
    >
      <div className={useContainer ? 'container' : ''}>{children}</div>
    </main>
  );
}