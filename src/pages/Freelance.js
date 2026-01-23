import heroBg from '../assets/hero-bg.jpg';

function Freelance() {
  return (
    <main className="work-page" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="work-page-header">
        <h1>Freelance</h1>
        <p className="work-page-subtitle">
          I help early-stage startups get their marketing off the ground—the same work I've done as the first marketing hire at Mage, Underline, and SafetyKit. I work best with technical founders who have a strong product but need help translating it for their target market.
        </p>
        <div className="section-nav">
          <a href="#automation" className="section-nav-btn">Marketing Automation</a>
          <a href="#positioning" className="section-nav-btn">Positioning & Messaging</a>
          <a href="#analytics" className="section-nav-btn">Analytics Infrastructure</a>
          <a href="#gtm" className="section-nav-btn">Go-to-Market Planning</a>
        </div>
      </div>

      {/* Marketing Automation */}
      <section id="automation" className="work-section">
        <span className="section-tag">Automation</span>
        <h2>Marketing Automation</h2>
        <p className="section-summary">
          Building workflows using n8n, Relay.app, and Zapier to automate the repetitive work that eats up founder time—research, outreach, and reporting.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Workflow Development.</h3>
            <p>
              Connect your marketing tools, CRM, and data sources so information flows automatically. Examples: auto-enrich new leads, sync data between platforms, trigger follow-ups based on behavior.
            </p>
          </div>

          <div className="work-item">
            <h3>Research Automation.</h3>
            <p>
              Build systems that automatically gather prospect info, track competitors, or monitor industry news—so you're not doing it manually every week.
            </p>
          </div>

          <div className="work-item">
            <h3>Reporting Systems.</h3>
            <p>
              Create dashboards that pull from multiple sources and update automatically. I've built these at Underline (BigQuery + SQL dashboards) and SafetyKit (Google Analytics + Tag Manager).
            </p>
          </div>
        </div>
      </section>

      {/* Positioning & Messaging */}
      <section id="positioning" className="work-section">
        <span className="section-tag">Strategy</span>
        <h2>Positioning & Messaging</h2>
        <p className="section-summary">
          Helping founders articulate what their product does and why it matters—value propositions, website copy, and sales materials.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Value Proposition Development.</h3>
            <p>
              Work directly with you to figure out what makes your product different and how to explain it to your target customer. I've done this for AI/ML tools (Mage), infrastructure products (Underline), and B2B platforms (SafetyKit).
            </p>
          </div>

          <div className="work-item">
            <h3>Website Copy.</h3>
            <p>
              Write clear, conversion-focused copy that explains technical products in plain language. I've rewritten website copy for multiple startups and can turn feature lists into benefits that resonate.
            </p>
          </div>

          <div className="work-item">
            <h3>Sales Collateral.</h3>
            <p>
              Develop pitch decks, one-pagers, and leave-behinds that help you close deals. At SafetyKit, I created the sales collateral used for enterprise prospects like PayPal and Visa.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Infrastructure */}
      <section id="analytics" className="work-section">
        <span className="section-tag">Analytics</span>
        <h2>Analytics Infrastructure</h2>
        <p className="section-summary">
          Setting up the tracking and dashboards you need to understand what's working—before you start spending real money on growth.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Tracking Setup.</h3>
            <p>
              Implement Google Analytics 4, Google Tag Manager, and conversion tracking properly from the start. Set up event tracking, goals, and attribution so you can actually measure results.
            </p>
          </div>

          <div className="work-item">
            <h3>Dashboard Development.</h3>
            <p>
              Build dashboards that show the metrics that matter for early-stage growth: acquisition channels, conversion rates, and customer behavior. I use Looker Studio, SQL, or whatever fits your stack.
            </p>
          </div>

          <div className="work-item">
            <h3>Data Integration.</h3>
            <p>
              Connect your analytics with CRM and marketing tools so you can track the full customer journey—not just website visits, but leads, signups, and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Go-to-Market Planning */}
      <section id="gtm" className="work-section">
        <span className="section-tag">GTM</span>
        <h2>Go-to-Market Planning</h2>
        <p className="section-summary">
          Advising founders on how to launch and grow—channel selection, launch strategy, and early growth tactics based on what I've seen work at other startups.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Launch Strategy.</h3>
            <p>
              Plan product launches that generate awareness and initial traction. I've run launches at Mage (Mage Pro) and coordinated conference strategy at SafetyKit (Money20/20).
            </p>
          </div>

          <div className="work-item">
            <h3>Channel Selection.</h3>
            <p>
              Help you figure out where to focus based on your product, audience, and budget. I've run acquisition across paid social, SEO, direct mail, events, community, and outbound—so I can help you prioritize.
            </p>
          </div>

          <div className="work-item">
            <h3>Content Strategy.</h3>
            <p>
              Create editorial calendars and content plans that drive organic growth. At Mage, I built an SEO program that grew traffic 6x; I can help you do something similar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Freelance;
