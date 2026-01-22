import { Link } from 'react-router-dom';

function Freelance() {
  return (
    <main className="work-page">
      <div className="work-page-header">
        <Link to="/" className="back-link">&larr; Back to Home</Link>
        <h1>Freelance</h1>
        <p className="work-page-subtitle">
          Marketing consultant providing AI automation and growth solutions for small teams and startups.
        </p>
      </div>

      {/* AI Automation */}
      <section className="work-section">
        <span className="section-tag">Automation</span>
        <h2>AI Automation</h2>
        <p className="section-summary">
          Built custom AI automation solutions for small teams using no-code platforms, delivering measurable efficiency gains and engagement improvements while eliminating the need for engineering resources.
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
            <span className="metric-value">17% <span className="metric-arrow">&uarr;</span></span>
            <span className="metric-label">Lift in engagement across</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">10+ hours</span>
            <span className="metric-label">Hours per week saved</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Freelance;
