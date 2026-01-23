function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(/hero-bg.jpg)` }}>
      <div className="hero-stars">
        <span className="star" style={{ top: '10%', left: '5%', animationDelay: '0s' }}></span>
        <span className="star" style={{ top: '20%', left: '15%', animationDelay: '1.5s' }}></span>
        <span className="star" style={{ top: '15%', left: '80%', animationDelay: '0.5s' }}></span>
        <span className="star" style={{ top: '30%', left: '90%', animationDelay: '2s' }}></span>
        <span className="star" style={{ top: '60%', left: '8%', animationDelay: '1s' }}></span>
        <span className="star" style={{ top: '70%', left: '20%', animationDelay: '2.5s' }}></span>
        <span className="star" style={{ top: '50%', left: '85%', animationDelay: '0.8s' }}></span>
        <span className="star" style={{ top: '80%', left: '75%', animationDelay: '1.8s' }}></span>
        <span className="star" style={{ top: '25%', left: '50%', animationDelay: '3s' }}></span>
        <span className="star" style={{ top: '45%', left: '3%', animationDelay: '0.3s' }}></span>
        <span className="star" style={{ top: '85%', left: '45%', animationDelay: '2.2s' }}></span>
        <span className="star" style={{ top: '5%', left: '35%', animationDelay: '1.2s' }}></span>
        <span className="star" style={{ top: '40%', left: '95%', animationDelay: '0.7s' }}></span>
        <span className="star" style={{ top: '75%', left: '60%', animationDelay: '1.6s' }}></span>
        <span className="star" style={{ top: '35%', left: '25%', animationDelay: '2.8s' }}></span>
      </div>
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
