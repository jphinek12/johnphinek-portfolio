import { Link } from 'react-router-dom';

function Underline() {
  return (
    <main className="work-page">
      <div className="work-page-header">
        <Link to="/" className="back-link">&larr; Back to Home</Link>
        <h1>Underline</h1>
        <p className="work-page-subtitle">
          Performance Marketing Associate driving user acquisition through multi-channel campaigns.
        </p>
      </div>

      {/* Performance Marketing */}
      <section className="work-section">
        <span className="section-tag">Performance</span>
        <h2>Performance Marketing</h2>
        <p className="section-summary">
          Launched a performance marketing system from scratch to scale user acquisition.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Performance marketing strategy.</h3>
            <p>
              Developed the paid media program from 0 to 1, secured test budget, aligned creative with brand.
            </p>
          </div>

          <div className="work-item">
            <h3>Full-funnel campaign execution.</h3>
            <p>
              Launched and optimized ad sets across Meta and Google, including geo-targeted creative.
            </p>
          </div>

          <div className="work-item">
            <h3>Attribution + segmentation.</h3>
            <p>
              Introduced a custom lead attribution model across digital, print, and grassroots, and deployed segmented testimonial ads based on ZIP and income data.
            </p>
          </div>
        </div>

        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-value">40% <span className="metric-arrow">&uarr;</span></span>
            <span className="metric-label">New customer signups</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">4X</span>
            <span className="metric-label">Site traffic</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">4:1</span>
            <span className="metric-label">ROAS</span>
          </div>
        </div>
      </section>

      {/* Direct Mail */}
      <section className="work-section">
        <span className="section-tag">Mail</span>
        <h2>Direct Mail</h2>
        <p className="section-summary">
          Scaled a data-driven direct mail program that leveraged paid media insights for hyper-local targeting contributing to an increase in monthly signups through strategic neighborhood-level personalization.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Data-Driven Audience Strategy & Targeting.</h3>
            <p>
              Integrated Meta and Google Ads audience insights with demographic data to create hyper-targeted campaigns by zip code and neighborhood. Analyzed digital campaign performance to identify messaging and creative elements that resonated with specific geographic segments, enabling precision targeting at the local level.
            </p>
          </div>

          <div className="work-item">
            <h3>Creative Testing & Message Optimization.</h3>
            <p>
              Developed and executed A/B testing framework across different zip codes and neighborhoods, testing messaging variations to optimize for local market preferences. Created neighborhood-specific creative that spoke directly to each segment's unique needs and pain points based on digital advertising learnings.
            </p>
          </div>

          <div className="work-item">
            <h3>Attribution & Performance Analytics.</h3>
            <p>
              Built comprehensive SQL tracking system using joins to connect signups with specific mailer types, geographic targeting, and multi-touchpoint customer journeys. Established clear attribution methodology to measure direct mail's contribution to the overall acquisition funnel and optimize campaign performance.
            </p>
          </div>
        </div>

        <div className="metrics-grid metrics-grid-2">
          <div className="metric-card">
            <span className="metric-value">35%</span>
            <span className="metric-label">Monthly signups attributed to direct mail</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">20k+</span>
            <span className="metric-label">Postcards delivered/month</span>
          </div>
        </div>
      </section>

      {/* Data Strategy */}
      <section className="work-section">
        <span className="section-tag">Data</span>
        <h2>Data Strategy</h2>
        <p className="section-summary">
          Built comprehensive data infrastructure and analytics framework to support 5x spending scale-up, integrating multi-channel performance data to drive strategic budget allocation and quarterly marketing planning.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Cross-Channel Data Integration & Infrastructure.</h3>
            <p>
              Consolidated data streams from Google Analytics, Facebook/Google Ads, CRM, email platforms, and direct mail performance into BigQuery, creating a unified data warehouse that enabled holistic performance tracking across all marketing channels during rapid scaling phase.
            </p>
          </div>

          <div className="work-item">
            <h3>Performance Dashboard Development.</h3>
            <p>
              Built comprehensive SQL dashboards tracking CAC, CVR, ROAS, funnel analysis, LTV, and channel performance metrics. Developed automated reporting systems that provided real-time visibility into campaign performance as monthly spend scaled from $10K to $50K.
            </p>
          </div>

          <div className="work-item">
            <h3>Strategic Analytics & Budget Planning.</h3>
            <p>
              Delivered weekly performance reports to marketing team and provided data-driven recommendations that directly informed quarterly marketing budget decisions. Analyzed channel performance trends and ROI metrics to guide strategic spending distribution across paid media and direct mail campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Event Marketing */}
      <section className="work-section">
        <span className="section-tag">Events</span>
        <h2>Event Marketing</h2>
        <p className="section-summary">
          Planned and executed 30+ annual in-person events across target markets, building community presence and driving brand awareness through diverse event programming that engaged customers, prospects, and business partners.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Community-Driven Event Strategy & Programming.</h3>
            <p>
              Developed comprehensive event portfolio including community-driven networking events, customer success celebrations, educational townhalls, and local market activations. Focused on establishing Underline's presence within local business communities while creating meaningful touchpoints for relationship building.
            </p>
          </div>

          <div className="work-item">
            <h3>Cross-Functional Event Production & Management.</h3>
            <p>
              Coordinated complex event logistics using Asana for project management, collaborating with product, design, and sales teams to ensure consistent messaging and impactful content delivery. Created presentation materials and managed all event touchpoints from planning through post-event follow-up campaigns.
            </p>
          </div>

          <div className="work-item">
            <h3>Integrated Marketing & Lead Nurturing.</h3>
            <p>
              Executed post-event engagement strategies that funneled participants into email campaigns and ad retargeting sequences, maximizing event ROI through systematic lead nurturing. Managed both customer appreciation initiatives and prospect education programs to support different funnel stages.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Underline;
