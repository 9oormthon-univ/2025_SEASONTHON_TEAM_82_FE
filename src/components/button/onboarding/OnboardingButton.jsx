import React from "react";
import "./OnboardingButton.css";

export default function OnboardingButton({ label, onClick }) {
    return (
        <button className="onboarding-button" onClick={onClick}>
            {label}
        </button>
    );
}