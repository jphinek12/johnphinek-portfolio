import heroBg from '../assets/hero-bg.jpg';

function Underline() {
  return (
    <main className="work-page" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="work-page-header">
        <h1>Underline</h1>
        <p className="work-page-subtitle">
          At Underline, a fiber network infrastructure startup, I ran performance marketing, direct mail, field events, and marketing analytics—scaling ad spend from $10K to $50K/month while building the data infrastructure to track it all.
        </p>
        <div className="section-nav">
          <a href="#performance" className="section-nav-btn">Performance Marketing</a>
          <a href="#direct-mail" className="section-nav-btn">Direct Mail</a>
          <a href="#analytics" className="section-nav-btn">Marketing Analytics</a>
          <a href="#events" className="section-nav-btn">Field Marketing & Events</a>
        </div>
      </div>

      {/* Performance Marketing */}
      <section id="performance" className="work-section">
        <span className="section-tag">Performance</span>
        <h2>Performance Marketing</h2>
        <p className="section-summary">
          Built and managed paid acquisition across Google and Meta, scaling monthly spend from $10K to $50K while maintaining 4:1 return on ad spend.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Campaign Setup & Management.</h3>
            <p>
              Launched Underline's first paid media campaigns from scratch. Built account structures, created geo-targeted ad sets for specific neighborhoods, and managed ongoing optimization across platforms.
            </p>
          </div>

          <div className="work-item">
            <h3>Creative & Testing.</h3>
            <p>
              Developed ad creative with the design team, ran A/B tests on messaging and visuals, and identified which angles worked for different neighborhoods. Testimonial ads targeting specific ZIP codes became our best performers.
            </p>
          </div>

          <div className="work-item">
            <h3>Attribution.</h3>
            <p>
              Built a custom attribution model to track leads across digital ads, direct mail, and grassroots channels—critical for understanding true ROI when customers saw multiple touchpoints before signing up.
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
      <section id="direct-mail" className="work-section">
        <span className="section-tag">Mail</span>
        <h2>Direct Mail</h2>
        <p className="section-summary">
          Ran a direct mail program sending 20,000+ postcards per month, using digital campaign data to target the right neighborhoods. Direct mail drove 35% of monthly signups.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Targeting Strategy.</h3>
            <p>
              Used insights from digital campaigns to identify high-converting ZIP codes and neighborhoods. Cross-referenced with demographic data to prioritize areas with the best fit for Underline's service.
            </p>
          </div>

          <div className="work-item">
            <h3>Creative & Personalization.</h3>
            <p>
              Created neighborhood-specific postcard designs and messaging. Tested different offers and creative approaches, then doubled down on what worked in each area.
            </p>
          </div>

          <div className="work-item">
            <h3>Tracking & Attribution.</h3>
            <p>
              Built SQL queries to connect postcard campaigns with signups, tracking which mailer versions and neighborhoods drove the best results. This data directly informed where we expanded next.
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
      <section id="analytics" className="work-section">
        <span className="section-tag">Data</span>
        <h2>Marketing Analytics</h2>
        <p className="section-summary">
          Built the marketing data infrastructure from scratch—consolidating data from ads, email, CRM, and direct mail into BigQuery and creating dashboards that informed weekly decisions and quarterly planning.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Data Infrastructure.</h3>
            <p>
              Set up data pipelines from Google Analytics, Facebook Ads, Google Ads, CRM, email platforms, and direct mail vendors into BigQuery. Created a unified view of marketing performance across all channels.
            </p>
          </div>

          <div className="work-item">
            <h3>Dashboards & Reporting.</h3>
            <p>
              Built SQL dashboards tracking CAC, conversion rates, ROAS, and LTV by channel. Delivered weekly performance reports to the marketing team and leadership as spend scaled 5x.
            </p>
          </div>

          <div className="work-item">
            <h3>Budget Planning.</h3>
            <p>
              Used channel performance data to recommend budget allocation across paid media and direct mail. Analysis directly informed quarterly marketing plans and helped justify spend increases.
            </p>
          </div>
        </div>
      </section>

      {/* Event Marketing */}
      <section id="events" className="work-section">
        <span className="section-tag">Events</span>
        <h2>Field Marketing & Events</h2>
        <p className="section-summary">
          Planned and executed 30+ in-person events per year—networking meetups, customer appreciation events, and local activations—to build community presence in target markets.
        </p>

        <div className="work-details">
          <div className="work-item">
            <h3>Event Strategy.</h3>
            <p>
              Developed an event calendar targeting neighborhoods where Underline was launching service. Mix included customer appreciation events to drive referrals, networking meetups for local businesses, and educational sessions for prospects.
            </p>
          </div>

          <div className="work-item">
            <h3>Logistics & Coordination.</h3>
            <p>
              Managed end-to-end event production: venue booking, vendor coordination, attendee communications, presentation materials, and day-of execution. Used Asana to coordinate across product, design, and sales teams.
            </p>
          </div>

          <div className="work-item">
            <h3>Follow-Up.</h3>
            <p>
              Ran post-event email campaigns and retargeting ads to convert attendees. Tracked event-to-signup conversion to prioritize high-performing event types.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Underline;
