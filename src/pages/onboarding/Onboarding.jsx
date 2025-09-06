import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { STRINGS } from "../../content/strings";
import { COLORS } from "../../content/colors";
import { http } from "../../api/http";

import "../../styles/phone.css";
import "../../components/ui/Page";
import "./Onboarding.css";

import onboardingImg1 from "../../images/onboarding/onboarding1.svg";
import onboardingImg2 from "../../images/onboarding/onboarding2.svg";
import onboardingImg3 from "../../images/onboarding/onboarding3.svg";
import OnboardingButton from "../../components/button/onboarding/OnboardingButton";


export default function Onboarding() {

    useEffect(() => {
        const qs = new URLSearchParams(window.location.search);
        const at = qs.get('at');
        const rt = qs.get('rt');
        if (at) localStorage.setItem('accessToken', at);
        if (rt) localStorage.setItem('refreshToken', rt);
        if (at || rt) window.history.replaceState({}, '', '/onboarding');
    }, []);

    const navigate = useNavigate();
    const [idx, setIdx] = useState(0);

    const slides = [
        {
            caption: STRINGS.Onboarding.caption1,
            image: onboardingImg1
        },
        {
            caption: STRINGS.Onboarding.caption2,
            image: onboardingImg2
        },
        {
            caption: STRINGS.Onboarding.caption3,
            image: onboardingImg3
        },
    ];

    const isLast = idx === slides.length - 1;

    const handleNext = () => {
        if (isLast) {
            navigate("/Home");
        } else {
            setIdx((p) => Math.min(p + 1, slides.length - 1));
        }
    };

    return (
        <div className="PhoneCanvas">
            <div className="PhoneFrame OnboardingScene">
                <div className="content">
                    {/* 상단 헤더 */}
                    <header className="onboarding-header">{STRINGS.Onboarding.header}</header>

                    {/* 슬라이드 콘텐츠 */}
                    <div className="onboarding-viewport" aria-live="polite">
                        <div className="onboarding-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
                            
                            {slides.map((s, i) => (
                                <section className="onboarding-slide" key={i}>
                                    <div className="onboarding-illustration">
                                        <img src={s.image} alt="" />
                                    </div>
                                    <p className="onboarding-caption">"{s.caption}"</p>
                                </section>
                            ))}

                        </div>
                    </div>

                    {/* 하단 버튼 */}
                    <OnboardingButton 
                        label={isLast ? STRINGS.Onboarding.LastButtonType : STRINGS.Onboarding.NormalButtonType}
                        onClick={handleNext}
                    />
                </div>
            </div>
        </div>

    );
}
