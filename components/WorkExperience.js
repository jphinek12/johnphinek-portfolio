import Link from 'next/link';

const experiences = [
  {
    id: 'safetykit',
    company: 'SafetyKit',
    role: 'First Marketing Hire',
    description: 'Sole marketer who built the full go-to-market function—managed sales enablement, conference strategy, content, paid acquisition, and website—for an AI safety platform serving PayPal, Discord, Visa, and Eventbrite.',
    path: '/safetykit'
  },
  {
    id: 'mage',
    company: 'Mage',
    role: 'Growth Marketing Specialist',
    description: 'First marketing hire. Built and grew a 7,500-member Slack community of data professionals, launched the company blog, managed agency relationships, and ran product launches for Mage Pro.',
    path: '/mage'
  },
  {
    id: 'underline',
    company: 'Underline',
    role: 'Performance Marketing Associate',
    description: 'Ran paid acquisition across Google, Meta, and LinkedIn while coordinating field marketing events and out-of-home campaigns for a fiber infrastructure startup.',
    path: '/underline'
  },
  {
    id: 'lastof7',
    company: 'Lastof7 Inc.',
    role: 'Early Employee',
    description: 'Employee #2 at a luxury food startup. Handled product development, launch operations, vendor coordination, and fulfillment logistics before the company had dedicated teams.',
    path: '/lastof7'
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: 'Marketing Consultant',
    description: 'Marketing consulting for early-stage startups—building automation workflows, writing positioning and messaging, and setting up analytics infrastructure.',
    path: '/freelance'
  }
];

function WorkExperience() {
  return (
    <section className="work-experience" id="work">
      <h2>Work Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <Link href={exp.path} key={exp.id} className="experience-card">
            <h3>{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="description">{exp.description}</p>
            <span className="card-link">Learn more</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
