 import "../styles/heroSection.css"

export default function Hero() {
  return (
    <div className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">KAWACH | PREPARE FOR NEW FEATURES</p>

        <h1 className="hero-title">
          Beautifully Designed And Intelligently Developed School Management
          System For Best User Experience.
        </h1>

        <div className="hero-buttons">
          <button className="btn primary">Buy Now</button>
          <button className="btn outline">Start Demo</button>
          <button className="btn outline">Help</button>
        </div>
      </div>
    </div>
  );
}