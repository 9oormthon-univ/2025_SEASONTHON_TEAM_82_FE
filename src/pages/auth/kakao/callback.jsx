useEffect(() => {
  const code = new URLSearchParams(location.search).get('code');
  if (!code) return;
  // 프록시 통해 백엔드로
  window.location.replace(`/api/v1/auth/login?code=${code}&next=/onboarding`);
}, []);