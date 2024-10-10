import React from "react";
import Lottie from "lottie-react";
import animationData from "../lotties/photoVerifyAnimation.json";
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-container">
      {/* Logo */}
      <img
        src={require("../assets/logo/PhotoVerifyLogo.jpg")}
        alt="Logo"
        className="logo"
      />

      {/* Animasyon */}
      <Lottie
        animationData={animationData}
        loop={false}
        className="animation"
        speed={0.5}
      />

      {/* Slogan */}
      <p className="slogan">
        Welcome to PhotoVerify - AI-powered image analysis at your fingertips.
      </p>
    </div>
  );
};

export default SplashScreen;
