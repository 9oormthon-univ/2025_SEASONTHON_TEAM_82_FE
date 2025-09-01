// Onboarding.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Onboarding.css";

const Onboarding = () => {
  const [step, setStep] = useState(0); // 현재 온보딩 화면 (0,1,2)
  const navigate = useNavigate();

  const images = [
    { src: "/Onboarding1.png" }, // public 폴더에 이미지 넣기
    { src: "/Onboarding2.png" },
    { src: "/Onboarding3.png" },
  ];

  const handleNext = () => {
    if (step < images.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("OnboardingCompleted", "true");
      navigate("/Home"); // 마지막은 홈으로 이동
    }
  };

  const handleLogin = () => {
  const onboardingCompleted = localStorage.getItem("onboardingCompleted");

  if (onboardingCompleted) {
    navigate("/home");
  } else {
    navigate("/onboarding");
  }
};


  return (
    <div className="Onboarding">
      <img src={images[step].src} alt={`온보딩${step + 1}`} className="bg" />
      <button onClick={handleNext} className="next-btn">
        {step < images.length - 1 ? "다음" : "시작하기"}
      </button>
    </div>
  );
};

export default Onboarding;
