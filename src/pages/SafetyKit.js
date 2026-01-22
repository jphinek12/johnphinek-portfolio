import { Link } from 'react-router-dom';

function SafetyKit() {
  return (
    <main className="work-page">
      <div className="work-page-header">
        <Link to="/" className="back-link">&larr; Back to Home</Link>
        <h1>SafetyKit</h1>
        <p className="work-page-subtitle">
          First marketing hire at a Series A fraud prevention and trust & safety company processing 15M+ decisions per hour for PayPal, Discord, Eventbrite, and Upwork.
        </p>
      </div>

      {/* Events & Thought Leadership */}
      <section className="work-section">
        <span className="section-tag">Events</span>
        <h2>Conference & Event Leadership</h2>
        <p className="section-summary">
          Conceptualized and executed SafetyKit's flagship trust and safety conference, establishing the company as a thought leader in the fraud prevention space.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Risk and Safety AI Summit.</h3>
            <p>
              Planned and executed a flagship trust and safety conference featuring speakers from Visa, PayPal, OpenAI, and Anthropic. Managed all aspects from speaker recruitment to event logistics and panel content development.
            </p>
          </div>

          <div className="work-item">
            <h3>Advisory Board & Industry Networking.</h3>
            <p>
              Organized advisory board dinners and industry networking events to strengthen relationships with key stakeholders. Collaborated with CEO on speaking engagements to establish thought leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Product Marketing */}
      <section className="work-section">
        <span className="section-tag">Product</span>
        <h2>Product Marketing & Positioning</h2>
        <p className="section-summary">
          Led product marketing initiatives including a public API launch and developed differentiated positioning frameworks for SafetyKit's AI-powered platform.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Public API Launch.</h3>
            <p>
              Led development of marketing materials for SafetyKit's public API launch, including comprehensive documentation, launch communications, and sales enablement content.
            </p>
          </div>

          <div className="work-item">
            <h3>ML Ops / AI Ops / Human Ops Positioning.</h3>
            <p>
              Developed product positioning framework to differentiate SafetyKit from traditional fraud detection tools that only provide confidence scores without making enforcement decisions.
            </p>
          </div>

          <div className="work-item">
            <h3>Website Restructuring.</h3>
            <p>
              Led website restructuring to create dedicated pages for fraud prevention, content moderation, and compliance use cases, improving user experience and conversion paths.
            </p>
          </div>
        </div>
      </section>

      {/* Content & Compliance */}
      <section className="work-section">
        <span className="section-tag">Content</span>
        <h2>Thought Leadership & Compliance Content</h2>
        <p className="section-summary">
          Created thought leadership content addressing major regulatory frameworks and emerging threats, positioning SafetyKit as an expert resource in trust & safety.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Regulatory Compliance Content.</h3>
            <p>
              Created thought leadership materials addressing Digital Services Act (DSA), EU AI Act, and Take It Down Act, positioning SafetyKit as an expert resource for compliance guidance.
            </p>
          </div>

          <div className="work-item">
            <h3>Case Studies & Educational Content.</h3>
            <p>
              Produced case studies with strategic partners including Character AI, demonstrating real-world applications. Developed blog content covering AI-generated fraud, merchant investigations, and emerging threats.
            </p>
          </div>
        </div>
      </section>

      {/* Demand Generation */}
      <section className="work-section">
        <span className="section-tag">Demand Gen</span>
        <h2>Demand Generation & Marketing Ops</h2>
        <p className="section-summary">
          Built demand generation infrastructure from the ground up, implementing ABM strategies, paid media campaigns, and CRM systems to drive qualified leads.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Account-Based Marketing Strategy.</h3>
            <p>
              Developed and executed ABM strategy including target account identification, prospect list development, and multi-touch cold outreach campaigns for Q1/Q2 initiatives.
            </p>
          </div>

          <div className="work-item">
            <h3>Paid Media & Lead Capture.</h3>
            <p>
              Managed Google Ads campaigns with pixel tracking, conversion tracking, and retargeting. Built lead capture systems for executive briefs and gated content.
            </p>
          </div>

          <div className="work-item">
            <h3>Website Migration & CRM Integration.</h3>
            <p>
              Led migration from Webflow to Next.js, ensuring all critical features were maintained. Implemented HubSpot CRM integration for lead management and marketing automation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SafetyKit;
