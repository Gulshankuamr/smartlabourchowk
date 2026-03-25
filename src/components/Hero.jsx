"use client";  // ✅ ye add karna zaroori hai

import "../styles/heroSection.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">
          connetSkool | PREPARE FOR NEW FEATURES
        </p>

        <h1 className="hero-title">
          Beautifully Designed And Intelligently Developed School Management
          System For Best User Experience.
        </h1>

        <div className="hero-buttons">
          <button
            className="btn outline"
            onClick={() =>
              window.open("https://youtube.com/@foundercode?si=EKQYyxDwRrmWe3x5", "_blank")
            }
          >
            Start Demo
          </button>

          <button
            className="btn outline"
            onClick={() => (window.location.href = "/support")}
          >
            Help
          </button>
        </div>
      </div>
    </div>
  );
}