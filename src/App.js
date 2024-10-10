import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen"; // SplashScreen'i doğru import edelim

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />; // Yükleniyorsa SplashScreen göster
  }

  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
    </div>
  );
}

export default App;
