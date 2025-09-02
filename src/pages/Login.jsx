import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { STRINGS } from "../content/strings";
import { COLORS } from "../content/colors";


import "./Login.css"; 
import "../styles/phone.css"
import "../components/ui/Page";

import splashBg from "../images/onboarding/splash.svg";
import kakaoLoginBtn from "../images/onboarding/kakaoLoginBtn.svg";


const Login = () => { 
  const navigate = useNavigate();
  const [phase, setPhase] = useState("splash");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("transition"), 2000);
    const t2 = setTimeout(() => setPhase("login"), 2800);
    return () => { 
      clearTimeout(t1); 
      clearTimeout(t2); 
    };
  }, []);

  const handleKakaoLogin = () => { 
    // 실제 카카오 로그인 API 연동 가능 
     navigate("/Home"); 
  };

  return ( 
    <div className="PhoneCanvas">
      <div 
        className={`LoginScene ${phase}`} 
        style={{
          "--bridge-on-blue": COLORS.bridgeOnBlue,
          "--bridge-on-white": COLORS.bridgeOnWhite,
          "--subtitle-grey": COLORS.subtitleGrey,
        }}
      > 
        <div className="splash-layer" style={{ backgroundImage: `url(${splashBg})` }} />

        <div className="content"> 
          <div className="hero">
            <h1 className="title">{STRINGS.Login?.title ?? "브릿지ON"}</h1>
            <p className="subtitle">{STRINGS.Login?.subtitle ?? "지역 창업, 세상과 연결되는 공간"}</p>
          </div>

          <button className="cta-imgbtn" onClick={handleKakaoLogin} aria-label={STRINGS?.Login?.cta ?? "카카오로 시작하기"}>
            <img src={kakaoLoginBtn} alt="" />
          </button>
        </div> 
      </div> 
    </div>
  ); 
} 
export default Login;