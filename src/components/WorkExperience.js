import { Link } from 'react-router-dom';

const experiences = [
  {
    id: 'mage',
    company: 'Mage',
    role: 'Growth Marketing Specialist',
    description: 'Leading growth initiatives and marketing strategies to drive user acquisition and retention.',
    path: '/mage'
  },
  {
    id: 'underline',
    company: 'Underline',
    role: 'Performance Marketing Associate',
    description: 'Managing performance marketing campaigns and optimizing ad spend for maximum ROI.',
    path: '/underline'
  },
  {
    id: 'lastof7',
    company: 'Lastof7 Inc.',
    role: 'Early Employee',
    description: 'Joined as an early team member, wearing multiple hats and contributing to company growth from the ground up.',
    path: '/lastof7'
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: 'Marketing Consultant',
    description: 'Providing strategic marketing guidance and execution for various clients across industries.',
    path: '/freelance'
  }
];

function WorkExperience() {
  return (
    <section className="work-experience" id="work">
      <h2>Work Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <Link to={exp.path} key={exp.id} className="experience-card">
            <h3>{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="description">{exp.description}</p>
            <span className="card-link">Learn more &rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
