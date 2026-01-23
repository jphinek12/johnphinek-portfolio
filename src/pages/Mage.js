import heroBg from '../assets/hero-bg.jpg';

function Mage() {
  return (
    <main className="work-page" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="work-page-header">
        <h1>Mage</h1>
        <p className="work-page-subtitle">
          I joined Mage as employee #6 and the first marketing hire. Over two years, I built every part of the marketing function: community, content, SEO, events, lifecycle, outbound, and account-based programs—mostly without agencies or budget.
        </p>
      </div>

      {/* Events Marketing */}
      <section className="work-section">
        <span className="section-tag">Events</span>
        <h2>Events Marketing</h2>
        <p className="section-summary">
          Ran 20+ events over two years—webinars, meetups, a hackathon, and conference sponsorships—handling everything from speaker coordination to logistics to follow-up campaigns.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Planning & Logistics.</h3>
            <p>
              Owned end-to-end event execution: built speaker lineups, coordinated schedules across time zones, managed registration and attendee communications, and handled day-of logistics for both virtual and in-person events.
            </p>
          </div>

          <div className="work-item">
            <h3>Cross-Team Coordination.</h3>
            <p>
              Worked with engineering and product to prepare demos, coordinated with DevRel on technical content, and managed external vendors for swag and materials. Tracked all deliverables in Airtable and Asana to keep multiple concurrent events on schedule.
            </p>
          </div>

          <div className="work-item">
            <h3>Results.</h3>
            <p>
              Events became a primary driver of community growth and qualified leads. Webinars consistently drew 100+ live attendees, and the hackathon generated our highest-quality leads of the quarter.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Strategy */}
      <section className="work-section">
        <span className="section-tag">SEO</span>
        <h2>SEO & Content</h2>
        <p className="section-summary">
          Built Mage's organic search presence from zero to 1,400 monthly visitors during beta, then grew it 6x through a content program I ran with an external agency.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Building the Foundation.</h3>
            <p>
              Defined the initial SEO strategy using Ahrefs and Google Analytics—identified target keywords around data engineering and ML pipelines, mapped content to user personas, and created the editorial calendar.
            </p>
          </div>

          <div className="work-item">
            <h3>Agency Management.</h3>
            <p>
              Managed an external content agency: set editorial direction, defined topic clusters, reviewed and edited 100+ blog posts for technical accuracy and SEO optimization. Held weekly syncs to keep production on track.
            </p>
          </div>

          <div className="work-item">
            <h3>Technical SEO.</h3>
            <p>
              Implemented internal linking strategy, monitored keyword rankings, and tracked content-to-signup conversion paths to prioritize high-performing topics.
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

      {/* Account-Based Marketing */}
      <section className="work-section">
        <span className="section-tag">ABM</span>
        <h2>Account-Based Marketing</h2>
        <p className="section-summary">
          Built and ran an ABM program targeting 100+ high-value accounts, coordinating personalized outreach across marketing and sales to drive engagement with data teams at target companies.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Research & Prioritization.</h3>
            <p>
              Used CommonRoom and ZoomInfo to identify and score accounts based on product usage, company size, and buying signals. Built target lists segmented by industry and role (data engineers, analysts, team leads).
            </p>
          </div>

          <div className="work-item">
            <h3>Personalized Campaigns.</h3>
            <p>
              Partnered with DevRel to create custom demo scripts and materials for specific use cases. Developed templates that allowed personalization at scale without starting from scratch for each account.
            </p>
          </div>

          <div className="work-item">
            <h3>Multi-Channel Execution.</h3>
            <p>
              Ran coordinated outreach across Slack, email, and LinkedIn. Managed handoffs to sales, tracked engagement in CRM, and maintained consistent messaging across touchpoints.
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
            <span className="metric-label">Account engagement rate</span>
          </div>
        </div>
        <p className="metric-context">80% of target accounts engaged with at least one touchpoint (webinar, content, or direct outreach)</p>
      </section>

      {/* Sales Development */}
      <section className="work-section">
        <span className="section-tag">Sales</span>
        <h2>Sales Development</h2>
        <p className="section-summary">
          Built the outbound sales motion from scratch—prospecting, outreach sequences, qualification, and handoff to founders—generating 45+ qualified meetings per month.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Prospecting.</h3>
            <p>
              Built prospect lists in HubSpot and Fiber.ai, targeting SMBs with small data teams. Researched accounts to identify the right contacts (data leads, engineering managers, CTOs) and personalize outreach.
            </p>
          </div>

          <div className="work-item">
            <h3>Outreach Campaigns.</h3>
            <p>
              Wrote and tested cold email sequences, iterated on messaging based on response data, and managed cadence timing. Achieved 5% response rate—strong for cold outbound to technical buyers.
            </p>
          </div>

          <div className="work-item">
            <h3>Qualification & Scheduling.</h3>
            <p>
              Ran discovery calls to qualify inbound and outbound leads, then scheduled demos with co-founders. Managed follow-up tasks and kept deals moving through the pipeline.
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
        <p className="metric-context">5% response rate (2-3x industry average for cold outbound)</p>
      </section>

      {/* Lifecycle Marketing */}
      <section className="work-section">
        <span className="section-tag">Lifecycle</span>
        <h2>Lifecycle Marketing</h2>
        <p className="section-summary">
          Built Mage's entire lifecycle program from scratch—onboarding emails, activation sequences, feature announcements, and upgrade campaigns—supporting 7,000+ users with zero agency support.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>System Setup.</h3>
            <p>
              Integrated Segment with Resend and internal product events to trigger emails based on user behavior. Designed the data model and built the initial automation workflows.
            </p>
          </div>

          <div className="work-item">
            <h3>Onboarding & Activation.</h3>
            <p>
              Created modular email sequences tailored to user actions—different paths for users who completed setup vs. those who stalled. Improved onboarding completion from ~40% to 60%.
            </p>
          </div>

          <div className="work-item">
            <h3>Driving Upgrades.</h3>
            <p>
              Built campaigns to convert free users to Pro: targeted emails based on usage patterns, customer stories highlighting Pro features, and re-engagement sequences for inactive users.
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
    </main>
  );
}

export default Mage;
