function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(/hero-bg.jpg)` }}>
      <div className="hero-content">
        <h1 className="hero-name">JOHN PATRICK HINEK</h1>
        <p className="hero-tagline">
          Building marketing teams and operations<br />
          from zero at high-growth startups
        </p>
        <a href="#work" className="hero-cta">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
