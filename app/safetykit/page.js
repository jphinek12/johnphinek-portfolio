export const metadata = {
  title: 'SafetyKit | John Patrick Hinek',
  description: 'Sole marketer at SafetyKit, a Series A AI company. Owned the full go-to-market function for an AI safety platform serving PayPal, Discord, Visa, and Eventbrite.'
};

export default function SafetyKit() {
  return (
    <main className="work-page" style={{ backgroundImage: `url(/hero-bg.jpg)` }}>
      <div className="work-page-header">
        <h1>SafetyKit</h1>
        <p className="work-page-subtitle">
          SafetyKit is a Series A AI company that builds AI agents for risk, compliance, and safety reviews for large marketplaces and fintech companies. Customers included PayPal, Visa, Discord, Patreon, Eventbrite, Upwork, Substack, and Etsy. As the sole marketer, I owned the full go-to-market function and worked directly with co-founders and GTM leadership.
        </p>
        <div className="section-nav">
          <a href="#events" className="section-nav-btn">Conference & Events</a>
          <a href="#product" className="section-nav-btn">Product Marketing</a>
          <a href="#content" className="section-nav-btn">Thought Leadership</a>
          <a href="#demand-gen" className="section-nav-btn">Demand Generation</a>
        </div>
      </div>

      {/* Conference & Event Leadership */}
      <section id="events" className="work-section">
        <span className="section-tag">Events</span>
        <h2>Conference Strategy & Executive Events</h2>
        <p className="section-summary">
          Planned and executed SafetyKit's conference presence and executive events—managing logistics, outreach, and follow-up to build relationships with enterprise prospects.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Conference Attendance.</h3>
            <p>
              Coordinated SafetyKit's presence at industry conferences including Money20/20. Managed pre-conference outreach, scheduled meetings with target accounts, and handled on-site logistics and follow-up.
            </p>
          </div>

          <div className="work-item">
            <h3>Executive Dinners.</h3>
            <p>
              Planned and executed executive dinners for prospects and customers—handling venue selection, guest list coordination, invitations, and day-of logistics. These intimate events helped build relationships with decision-makers at enterprise accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Product Marketing & Positioning */}
      <section id="product" className="work-section">
        <span className="section-tag">Product</span>
        <h2>Product Marketing & Positioning</h2>
        <p className="section-summary">
          Developed positioning and messaging to differentiate SafetyKit from traditional fraud detection tools, and led the marketing website rebuild.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Website Rebuild.</h3>
            <p>
              Led the complete rebuild of SafetyKit's marketing website using React and Claude Code. Created dedicated pages for each use case—fraud prevention, content moderation, and compliance—improving the user experience and conversion paths.
            </p>
          </div>

          <div className="work-item">
            <h3>Positioning Framework.</h3>
            <p>
              Developed product positioning to differentiate SafetyKit from traditional fraud tools that only provide confidence scores. Articulated how SafetyKit's AI agents make enforcement decisions, not just recommendations.
            </p>
          </div>

          <div className="work-item">
            <h3>Website Content.</h3>
            <p>
              Wrote and implemented all website copy—homepage, product pages, use case pages, and landing pages. Managed the full process from messaging strategy through deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Thought Leadership & Compliance Content */}
      <section id="content" className="work-section">
        <span className="section-tag">Content</span>
        <h2>Thought Leadership & Compliance Content</h2>
        <p className="section-summary">
          Created thought leadership content addressing major regulatory frameworks and emerging threats, positioning SafetyKit as an expert resource in trust & safety.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Regulatory Compliance Content.</h3>
            <p>
              Wrote blog posts and resources covering the Digital Services Act (DSA), EU AI Act, and Take It Down Act—helping prospects understand compliance requirements and how SafetyKit addresses them.
            </p>
          </div>

          <div className="work-item">
            <h3>Case Studies & Educational Content.</h3>
            <p>
              Produced case studies with customers including Character AI. Developed blog content covering AI-generated fraud, merchant investigations, and emerging threats in trust & safety.
            </p>
          </div>
        </div>
      </section>

      {/* Demand Generation & Marketing Ops */}
      <section id="demand-gen" className="work-section">
        <span className="section-tag">Demand Gen</span>
        <h2>Demand Generation & Marketing Ops</h2>
        <p className="section-summary">
          Built SafetyKit's demand generation infrastructure from scratch—setting up outbound systems, paid campaigns, and CRM workflows to generate qualified leads for the sales team.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Outbound & Account Strategy.</h3>
            <p>
              Helped roll out SafetyKit's initial account strategy and outbound function using Amplemarket. Built target account lists, developed outreach sequences, and coordinated with the GTM team on prospect prioritization.
            </p>
          </div>

          <div className="work-item">
            <h3>Paid Media & Lead Capture.</h3>
            <p>
              Managed Google Ads campaigns with conversion tracking and retargeting. Built lead capture systems for executive briefs and gated content to grow the prospect database.
            </p>
          </div>

          <div className="work-item">
            <h3>Website & CRM Integration.</h3>
            <p>
              Implemented HubSpot CRM integration for lead management and marketing automation. Set up Google Tag Manager and Google Analytics for tracking and attribution.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
