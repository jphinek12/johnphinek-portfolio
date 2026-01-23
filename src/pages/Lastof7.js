import heroBg from '../assets/hero-bg.jpg';

function Lastof7() {
  return (
    <main className="work-page" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="work-page-header">
        <h1>Lastof7 Inc.</h1>
        <p className="work-page-subtitle">
          I joined Lastof7—a luxury pickle brand—as the second employee, working directly with the founder to launch the company from scratch. I handled product development, influencer marketing, paid ads, and creative production before any specialized roles existed.
        </p>
        <div className="section-nav">
          <a href="#product" className="section-nav-btn">Product Development</a>
          <a href="#influencer" className="section-nav-btn">Influencer Marketing</a>
          <a href="#paid" className="section-nav-btn">Paid Advertising</a>
        </div>
      </div>

      {/* Product Development */}
      <section id="product" className="work-section">
        <span className="section-tag">Product</span>
        <h2>Product Development</h2>
        <p className="section-summary">
          Led product development for 6 pickle varieties from concept to launch, managing the full process: market research, positioning, vendor coordination, packaging, and go-to-market—all within 1-year cycles.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Research & Strategy.</h3>
            <p>
              Researched the premium specialty food market to identify positioning opportunities. Analyzed competitors, pricing, and consumer preferences to shape product concepts that could justify premium pricing.
            </p>
          </div>

          <div className="work-item">
            <h3>Working with the Founder.</h3>
            <p>
              Partnered directly with the CEO to define product strategy and brand positioning for each new variety. Translated business goals into product requirements and launch plans.
            </p>
          </div>

          <div className="work-item">
            <h3>Vendor Coordination & Launch.</h3>
            <p>
              Managed external product designers and coordinated production timelines. Oversaw packaging design, product specs, and launch readiness to hit deadlines and maintain brand standards.
            </p>
          </div>
        </div>

        <div className="metrics-grid metrics-grid-2">
          <div className="metric-card">
            <span className="metric-value">6</span>
            <span className="metric-label">New products launched</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">20%</span>
            <span className="metric-label">Month-over-month growth</span>
          </div>
        </div>
      </section>

      {/* Social Media & Influencer Marketing */}
      <section id="influencer" className="work-section">
        <span className="section-tag">Social</span>
        <h2>Influencer Marketing</h2>
        <p className="section-summary">
          Built and managed an influencer program with 20+ active partnerships, driving 30% of monthly sales at 3.5x return on investment.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Finding & Vetting Influencers.</h3>
            <p>
              Identified food and lifestyle influencers whose audiences matched our target customer: women aged 30-70 in high-income areas. Requested audience data and vetted each partner before committing budget.
            </p>
          </div>

          <div className="work-item">
            <h3>Managing Partnerships.</h3>
            <p>
              Coordinated 20+ influencer relationships simultaneously—negotiating terms, shipping product, reviewing content, and tracking results. Mixed one-off posts with ongoing partnerships based on performance.
            </p>
          </div>

          <div className="work-item">
            <h3>Integration with Social.</h3>
            <p>
              Repurposed influencer content across our own social channels. Used top-performing influencer posts to inform our organic and paid creative strategy.
            </p>
          </div>
        </div>

        <div className="metrics-grid metrics-grid-2">
          <div className="metric-card">
            <span className="metric-value">30% <span className="metric-arrow">&uarr;</span></span>
            <span className="metric-label">Monthly sales attributed to influencer program</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">3.5x</span>
            <span className="metric-label">ROAS on influencer investments</span>
          </div>
        </div>
      </section>

      {/* Performance Marketing */}
      <section id="paid" className="work-section">
        <span className="section-tag">Performance</span>
        <h2>Paid Advertising</h2>
        <p className="section-summary">
          Managed a $15K paid media budget across Google and Meta, handling everything from budget allocation to creative production—including directing photoshoots and designing ads in Photoshop.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Budget & Channel Strategy.</h3>
            <p>
              Split budget between Google and Meta, ran A/B tests to compare performance, and shifted spend toward Meta after it proved to be the stronger conversion channel.
            </p>
          </div>

          <div className="work-item">
            <h3>Creative Production.</h3>
            <p>
              Produced all ad creative in-house: directed product photoshoots, edited images in Photoshop, and designed ad variations. Kept production costs low while maintaining brand quality.
            </p>
          </div>

          <div className="work-item">
            <h3>Optimization.</h3>
            <p>
              Tracked performance across both platforms, tested creative variations and audience targeting, and optimized campaigns based on conversion data.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Lastof7;
