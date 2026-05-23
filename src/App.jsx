import { useState } from 'react'
import './App.css'

function App() {
  const [activeImage, setActiveImage] = useState(null)

  const competencies = [
    {
      title: 'Scientific Computing & Simulation',
      items: ['Python', 'Jupyter Notebook', 'NumPy', 'matplotlib', 'ipywidgets'],
    },
    {
      title: 'Frontend Development',
      items: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      title: 'Backend Development',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
    },
    {
      title: 'Database & Analytics',
      items: ['MongoDB', 'Mongoose', 'Data Modeling', 'Analytics Dashboards'],
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Cursor AI', 'Claude AI', 'GitHub Copilot', 'ChatGPT'],
    },
    {
      title: 'Analytical Skills',
      items: ['Mathematical Physics', 'Statistical Analysis', 'Logical Modeling', 'Algorithmic Thinking'],
    },
  ]

  const experiences = [
    {
      company: 'DataHex',
      role: 'Software Developer',
      duration: '1 Year',
      projects: [
        {
          name: 'EventHex — AI-Powered Event Management SaaS Platform',
          points: [
            'Developed scalable frontend modules using React, Next.js, and TypeScript',
            'Implemented role-based permissions, dashboards, and attendee workflows',
            'Integrated multilingual support and payment gateway functionalities',
            'Collaborated on backend API development and database architecture',
            'Performed debugging, testing, and production issue resolution',
            'Utilized AI-assisted development tools to improve productivity',
          ],
        },
        {
          name: 'Diet Management App — Healthcare System',
          points: [
            'Developed modules for booking, branch, organization, and user management',
            'Implemented workflow automation and role-based access systems',
            'Integrated Email, WhatsApp, and Push notification systems',
            'Resolved API bottlenecks, schema validation, and database issues',
            'Built responsive frontend interfaces using React and TypeScript',
          ],
        },
      ],
    },
    {
      company: 'Techmindz, Infopark Kochi',
      role: 'MERN Stack Intern',
      duration: '6 Months',
      projects: [
        {
          name: 'Internship Contributions',
          points: [
            'Built responsive web applications using React.js and Node.js',
            'Designed REST APIs and handled MongoDB database operations',
            'Worked with Git workflows, Agile methodologies, and debugging practices',
            'Developed frontend UI components and backend functionalities',
          ],
        },
      ],
    },
  ]

  const technicalProjects = [
    {
      title: 'Projectile Motion Simulator',
      description:
        'Interactive simulator for projectile trajectories under gravity with and without air resistance.',
      stack: ['Python', 'NumPy', 'matplotlib', 'ipywidgets'],
      github: 'https://github.com/Dilna00/Projectile_Motion_Simulator',
      demo: 'https://hub.2i2c.mybinder.org/user/dilna00-project-motion-simulato-hqtk9iip/doc/tree/Projectile_Motion_Simulator.ipynb',
      image: '/gallery/projectile.svg',
    },
    {
      title: 'Simple Harmonic Motion Simulation',
      description:
        'Damped and undamped mass-spring simulation with Euler-Cromer integration and interactive controls.',
      stack: ['Python', 'Numerical Methods', 'Data Visualization'],
      github: 'https://github.com/Dilna00/SimpleHarmonicMotion',
      demo: 'https://hub.gesis.mybinder.org/user/dilna00-simpleharmonicmotion-os3te0gf/lab',
      image: '/gallery/shm.svg',
    },
    {
      title: 'N-Body Gravitational Simulation',
      description:
        'Orbital mechanics and gravitational interaction model using velocity-Verlet integration.',
      stack: ['Python', 'Physics', 'Scientific Computing'],
      github: 'https://github.com/Dilna00/NbodyGravitationalSimulation',
      demo: 'https://hub.gesis.mybinder.org/user/dilna00-nbodygr-ionalsimulation-b57kz4kd/lab/workspaces/auto-b',
      image: '/gallery/nbody.svg',
    },
  ]

  const gallery = [
    { src: '/gallery/workspace.svg', title: 'Development Setup' },
    { src: '/gallery/projectile.svg', title: 'Projectile Simulation' },
    { src: '/gallery/shm.svg', title: 'SHM Visualization' },
    { src: '/gallery/nbody.svg', title: 'N-Body Orbit Model' },
    { src: '/gallery/physics.svg', title: 'Physics + Programming' },
    { src: '/gallery/profile-card.svg', title: 'Profile Showcase' },
  ]

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">Full-Stack Developer (MERN)</p>
          <h1>Dilna Kuttasseri</h1>
          <p className="summary">
            M.Sc. Physics graduate with experience in scalable web applications, scientific computing,
            and AI-assisted development workflows.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:dilnakuttasseri00@gmail.com">
              Contact Me
            </a>
            <a
              className="btn btn-secondary"
              href="https://github.com/Dilna00/Personal-website"
              target="_blank"
              rel="noreferrer"
            >
              View Source
            </a>
          </div>
          <ul className="contact-grid">
            <li>Manjeri, Malappuram, Kerala</li>
            <li>
              <a href="mailto:dilnakuttasseri00@gmail.com">dilnakuttasseri00@gmail.com</a>
            </li>
            <li>
              <a href="tel:+917034317863">+91 7034317863</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/dilnakuttasseri" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Dilna00" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://dilna00.github.io/Personal-website/" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
        <div className="hero-photo-wrap">
          <img className="hero-photo" src="/profile.svg" alt="Dilna profile placeholder" />
        </div>
      </header>

      <main>
        <section className="block">
          <h2>Core Competencies</h2>
          <div className="grid competencies">
            {competencies.map((group) => (
              <article key={group.title} className="card">
                <h3>{group.title}</h3>
                <p>{group.items.join(' • ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="block">
          <h2>Professional Experience</h2>
          <div className="timeline">
            {experiences.map((experience) => (
              <article key={experience.company} className="timeline-item">
                <header>
                  <h3>{experience.company}</h3>
                  <p>
                    {experience.role} • {experience.duration}
                  </p>
                </header>
                {experience.projects.map((project) => (
                  <div key={project.name} className="sub-item">
                    <h4>{project.name}</h4>
                    <ul>
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="block">
          <h2>Technical Physics Projects</h2>
          <div className="grid projects">
            {technicalProjects.map((project) => (
              <article key={project.title} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="tags">{project.stack.join(' • ')}</p>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="block two-col">
          <article className="card">
            <h2>Education</h2>
            <h3>M.Sc. Physics</h3>
            <p>Mahatma Gandhi University, Kottayam</p>
            <p>
              Mathematical Physics, Computational Techniques, Quantum Mechanics, Classical Mechanics,
              Data Analysis
            </p>
            <h3>B.Sc. Physics</h3>
            <p>Farook College, Kozhikode</p>
          </article>

          <article className="card">
            <h2>Key Strengths</h2>
            <ul className="strengths">
              <li>Strong analytical and mathematical problem-solving skills</li>
              <li>Fast learner with adaptability to new technologies and workflows</li>
              <li>Skilled in debugging, optimization, and scalable application development</li>
              <li>Experience working in Agile and collaborative environments</li>
              <li>Efficient in AI-assisted development workflows</li>
            </ul>
          </article>
        </section>

        <section className="block">
          <div className="gallery-head">
            <h2>Photo Gallery</h2>
            <p>Click any image to view it in full screen.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((image) => (
              <button
                type="button"
                key={image.title}
                className="gallery-item"
                onClick={() => setActiveImage(image)}
              >
                <img src={image.src} alt={image.title} />
                <span>{image.title}</span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built with React • Designed for a clean black-theme personal portfolio</p>
      </footer>

      {activeImage && (
        <div className="modal" onClick={() => setActiveImage(null)}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close" onClick={() => setActiveImage(null)}>
              ×
            </button>
            <img src={activeImage.src} alt={activeImage.title} />
            <p>{activeImage.title}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
