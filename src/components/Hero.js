import heroBg from '../assets/hero-bg.jpg';

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <h1 className="hero-name">JOHN PATRICK HINEK</h1>
        <p className="hero-tagline">
          Scaling early-stage startups with<br />
          AI-enhanced marketing systems
        </p>
        <a href="#work" className="hero-cta">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
