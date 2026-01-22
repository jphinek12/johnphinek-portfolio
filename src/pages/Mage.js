import { Link } from 'react-router-dom';

function Mage() {
  return (
    <main className="work-page">
      <div className="work-page-header">
        <Link to="/" className="back-link">&larr; Back to Home</Link>
        <h1>Mage</h1>
        <p className="work-page-subtitle">
          Multi-modal data fusion backends built into end-to-end data pipelines through an extensible framework.
        </p>
      </div>

      {/* Lifecycle Marketing */}
      <section className="work-section">
        <span className="section-tag">Lifecycle</span>
        <h2>Lifecycle Marketing</h2>
        <p className="section-summary">
          Built Mage's Lifecycle marketing strategy from 0 - 1 to drive product adoption and Pro-tier signups.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Built a full-stack lifecycle program from scratch.</h3>
            <p>
              Designed and launched Mage's entire lifecycle system using behavioral data and product usage signals, integrating Segment, Resend, and internal product events.
            </p>
          </div>

          <div className="work-item">
            <h3>Increased activation and onboarding performance.</h3>
            <p>
              Improved onboarding completion and lifted trial-to-activation conversions through modular email sequences tailored by user behavior.
            </p>
          </div>

          <div className="work-item">
            <h3>Scaled with zero paid support.</h3>
            <p>
              Executed the entire lifecycle program in-house without agencies or budget, supporting over 7,000 users and driving Pro signups through targeted enablement and customer stories.
            </p>
          </div>
        </div>

        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-value">30% <span className="metric-arrow">&uarr;</span></span>
            <span className="metric-label">Trial signups</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">45% <span className="metric-arrow">&uarr;</span></span>
            <span className="metric-label">New feature adoption</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">60%</span>
            <span className="metric-label">Onboarding completion rate</span>
          </div>
        </div>
      </section>

      {/* Sales Development */}
      <section className="work-section">
        <span className="section-tag">Sales</span>
        <h2>Sales Development</h2>
        <p className="section-summary">
          Built and executed a sales development process targeting SMB executives with small data teams, managing the pipeline from prospecting to meeting handoff to generate qualified opportunities for the founding team.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Strategic Prospecting & Lead Generation.</h3>
            <p>
              Developed targeted prospecting strategies using HubSpot and Fiber.ai to identify and segment SMB companies with small data teams. Created detailed prospect lists and implemented systematic outreach sequences to reach C-level executives and data team leaders at target companies.
            </p>
          </div>

          <div className="work-item">
            <h3>Multi-Channel Outbound Campaign Management.</h3>
            <p>
              Executed personalized cold outreach campaigns across email and other channels, focusing on value-driven messaging that resonated with data team pain points. Managed campaign cadences, A/B tested messaging approaches, and optimized sequences based on engagement metrics and response rates.
            </p>
          </div>

          <div className="work-item">
            <h3>Meeting Qualification & Handoff Coordination.</h3>
            <p>
              Qualified inbound and outbound leads through discovery conversations, scheduled demos with the executive team, and participated in handoff calls to ensure smooth transitions. Managed follow-up deliverables and next steps to maintain momentum in the sales cycle.
            </p>
          </div>
        </div>

        <div className="metrics-grid metrics-grid-2">
          <div className="metric-card">
            <span className="metric-value">45+</span>
            <span className="metric-label">Qualified leads/month</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">5%</span>
            <span className="metric-label">Response rate</span>
          </div>
        </div>
      </section>

      {/* Account-Based Marketing */}
      <section className="work-section">
        <span className="section-tag">ABM</span>
        <h2>Account-Based Marketing</h2>
        <p className="section-summary">
          Developed and executed a comprehensive ABM program targeting 100+ high-value accounts, creating personalized campaigns and custom materials at scale while coordinating sales and marketing efforts to drive engagement and pipeline acceleration.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Strategic Account Intelligence & Prioritization.</h3>
            <p>
              Leveraged CommonRoom and ZoomInfo Marketing OS to conduct deep account research and scoring based on product usage patterns and revenue potential. Analyzed intent data to identify buying signals and prioritized accounts across industry verticals, team sizes, and functional roles (students, data analysts, data engineers).
            </p>
          </div>

          <div className="work-item">
            <h3>Personalized Content & Campaign Creation.</h3>
            <p>
              Collaborated with DevRel to create custom marketing materials, demo scripts, and documentation tailored to specific account use cases and industries. Developed scalable content frameworks that enabled 1:few personalization across target account segments while maintaining relevance and quality.
            </p>
          </div>

          <div className="work-item">
            <h3>Multi-Channel Account Engagement.</h3>
            <p>
              Executed coordinated outreach campaigns across Slack, email, and LinkedIn, delivering personalized messaging and content based on account intelligence and engagement history. Managed the full sales and marketing coordination process, ensuring seamless handoffs and consistent account experiences.
            </p>
          </div>
        </div>

        <div className="metrics-grid metrics-grid-2">
          <div className="metric-card">
            <span className="metric-value">100+</span>
            <span className="metric-label">High-value accounts</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">80%</span>
            <span className="metric-label">Account engagement-rate</span>
          </div>
        </div>
      </section>

      {/* SEO Strategy */}
      <section className="work-section">
        <span className="section-tag">SEO</span>
        <h2>SEO Strategy</h2>
        <p className="section-summary">
          Built and scaled Mage's organic search presence from zero to 1,400+ monthly visitors during beta phase, then achieved 6x traffic growth through strategic content development and agency management, driving consistent product signups and user acquisition.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>SEO Foundation & Initial Growth.</h3>
            <p>
              Developed Mage's initial SEO strategy from ground zero using Ahrefs and Google Analytics, defining core content themes and keyword priorities based on target personas in the data engineering and AI/ML space. Scaled organic traffic from 0 to 1,400+ monthly visitors during the product's beta phase through strategic content planning and execution.
            </p>
          </div>

          <div className="work-item">
            <h3>Content Strategy & Agency Management.</h3>
            <p>
              Managed external content agency partnership by guiding editorial direction, defining topic clusters around data, data engineering, and AI-related keywords, and editing hundreds of blog posts for quality and SEO optimization. Established content workflows that translated technical AI/ML concepts into accessible educational content that positioned Mage as a thought leader.
            </p>
          </div>

          <div className="work-item">
            <h3>Technical Optimization & Performance Tracking.</h3>
            <p>
              Implemented internal linking strategies to improve site authority and user experience while tracking keyword rankings and organic conversion performance. Monitored content-to-conversion pathways to ensure educational content effectively drove product signups and user adoption, contributing to sustained growth in acquisition.
            </p>
          </div>
        </div>

        <div className="metrics-grid metrics-grid-1">
          <div className="metric-card">
            <span className="metric-value">6x <span className="metric-arrow">&uarr;</span></span>
            <span className="metric-label">Organic traffic</span>
          </div>
        </div>
      </section>

      {/* Events Marketing */}
      <section className="work-section">
        <span className="section-tag">Events</span>
        <h2>Events Marketing</h2>
        <p className="section-summary">
          Planned and executed comprehensive events program including webinars, meetups, conferences, and hackathons, driving lead generation, user education, and community building across the data engineering ecosystem through strategic cross-functional coordination.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Multi-Format Event Strategy & Execution.</h3>
            <p>
              Developed and managed diverse event portfolio spanning virtual webinars, in-person meetups, industry conferences, and large-scale hackathons targeting prospects, existing users, and partners in the data engineering space. Created scalable event frameworks that supported both intimate educational sessions and high-volume community engagement initiatives.
            </p>
          </div>

          <div className="work-item">
            <h3>Cross-Functional Production & Content Development.</h3>
            <p>
              Collaborated with product and engineering teams to coordinate demo timing and technical content delivery, while creating comprehensive marketing materials including demo scripts, documentation, and company swag. Managed logistics using Airtable and Asana to ensure seamless execution across multiple concurrent events.
            </p>
          </div>

          <div className="work-item">
            <h3>Community-Driven Lead Generation & Education.</h3>
            <p>
              Designed events that served multiple objectives simultaneously - generating qualified leads, educating users on data engineering best practices, building brand community, and supporting product launch initiatives. Positioned Mage as a thought leader in the data engineering space through strategic content and speaker selection.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Mage;
