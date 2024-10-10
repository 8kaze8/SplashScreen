// src/components/SplashScreen.js
import React, { useEffect } from "react";
import { Lottie } from "lottie-react";
import animationData from "../lotties/photoVerifyAnimation.json"; // Lottie animasyon dosyasının yolu
import "./SplashScreen.css"; // CSS dosyası

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    // Animasyon 3 saniye sonra sona erdiğinde bir şeyler yapılacak
    const timer = setTimeout(() => {
      onFinish(); // Geçiş fonksiyonunu çalıştır
    }, 3000);

    // Temizleme fonksiyonu
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <Lottie
        animationData={animationData}
        loop={false}
        className="animation"
      />
      <p className="text">
        Welcome to PhotoVerify - AI-powered image analysis at your fingertips.
      </p>
    </div>
  );
};

export default SplashScreen;
