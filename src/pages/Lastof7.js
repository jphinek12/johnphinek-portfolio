import { Link } from 'react-router-dom';

function Lastof7() {
  return (
    <main className="work-page">
      <div className="work-page-header">
        <Link to="/" className="back-link">&larr; Back to Home</Link>
        <h1>Lastof7 Inc.</h1>
        <p className="work-page-subtitle">
          Early employee at a luxury pickle brand, handling product development, marketing, and growth from the ground up.
        </p>
      </div>

      {/* Product Development */}
      <section className="work-section">
        <span className="section-tag">Product</span>
        <h2>Product Development</h2>
        <p className="section-summary">
          Led product development for luxury pickle brand, launching 6 products from concept to market in 1-year cycles and driving 20% monthly growth through market research and positioning.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Market Research & Competitive Analysis.</h3>
            <p>
              Conducted comprehensive market research to identify opportunities in the premium specialty food segment, analyzing consumer preferences, pricing strategies, and competitive landscape to inform product positioning. Developed strategic insights that guided product concepts and differentiation strategies in the luxury pickle market.
            </p>
          </div>

          <div className="work-item">
            <h3>Product Strategy & Positioning.</h3>
            <p>
              Defined product positioning and go-to-market strategies for each of 6 luxury pickle varieties, creating compelling value propositions that justified premium pricing and target market appeal. Collaborated closely with CEO to align product vision with business objectives and brand strategy.
            </p>
          </div>

          <div className="work-item">
            <h3>Cross-Functional Product Management.</h3>
            <p>
              Managed product development timelines and coordinated with external product designers to bring concepts from ideation through launch within 1-year cycles. Oversaw product specifications, packaging design, and launch readiness to ensure market-ready products that met brand standards and consumer expectations.
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
      <section className="work-section">
        <span className="section-tag">Social</span>
        <h2>Social Media & Influencer Marketing</h2>
        <p className="section-summary">
          Built influencer partnership program securing 20+ collaborations with high-income women, driving 30% monthly sales growth through data-driven selection and diverse campaigns.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Strategic Influencer Identification & Vetting.</h3>
            <p>
              Developed systematic approach to identify niche market influencers aligned with luxury food positioning, requesting detailed follower metrics, geographic breakdowns, and demographic data to ensure quality audience alignment. Focused on influencers whose audiences matched target demographic of women aged 30-70 in high-income regions.
            </p>
          </div>

          <div className="work-item">
            <h3>Multi-Format Partnership Campaign Management.</h3>
            <p>
              Executed diverse campaign structures including one-off promotional posts and ongoing brand partnerships, creating flexible collaboration models that maximized reach while maintaining authentic brand representation. Managed relationship development and campaign coordination across 20+ active partnerships simultaneously.
            </p>
          </div>

          <div className="work-item">
            <h3>Audience-Driven Social Media Strategy.</h3>
            <p>
              Designed social media campaigns specifically targeting affluent women in key geographic markets, leveraging influencer partnerships to build brand credibility and drive conversion. Integrated influencer content with broader social media strategy to amplify reach and engagement across target demographics.
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
      <section className="work-section">
        <span className="section-tag">Performance</span>
        <h2>Performance Marketing</h2>
        <p className="section-summary">
          Managed $15K paid media budget across Google and Meta, optimizing with A/B testing to identify Meta as top conversion channel while producing all ad creative in-house through photoshoot direction and Photoshop.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Multi-Platform Budget Management & Optimization.</h3>
            <p>
              Initiated balanced budget allocation across Google PPC and Meta advertising platforms, conducting systematic A/B testing to evaluate channel performance and conversion rates. Strategically reallocated budget toward Meta campaigns based on superior sales generation performance, maximizing ROI across paid media spend.
            </p>
          </div>

          <div className="work-item">
            <h3>Creative Production & Campaign Development.</h3>
            <p>
              Led in-house creative production by directing photoshoots for product imagery and designing advertising campaigns using Adobe Photoshop. Developed brand-consistent creative assets that supported both brand awareness and conversion objectives, maintaining creative control while managing production costs.
            </p>
          </div>

          <div className="work-item">
            <h3>Performance Analysis & Campaign Optimization.</h3>
            <p>
              Tracked and analyzed campaign performance across both platforms, using conversion data and sales attribution to guide budget optimization decisions. Focused on dual objectives of brand awareness and direct conversions, continuously testing creative variations and audience targeting to improve campaign effectiveness.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Lastof7;
