const ProjectCard = () => {
    const [isHovered, setIsHovered] = React.useState(false);
  
    // Your projects data
    const projects = [
      {
        title: "Automation Practice Website With Selenium Python & BDD",
        description: "Automation framework for web testing using Selenium and Python with BDD approach",
        image: "/images/automation-website.png", // Update with your image path
        date: "2024-10-01",
        github: "https://github.com/automatealchemist/Automation-Practice-Website-with-Selenium-Python-BDD",
        tags: ["Selenium", "Python", "BDD", "Automation"],
        category: "Testing Framework"
      },
      // Add your second project here
    ];
  
    return (
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`project-card ${isHovered ? 'hover' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="project-category">{project.category}</div>
            
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
              />
            </div>
  
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
  
              <div className="project-date">
                {new Date(project.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
  
            <div className="project-footer">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Source
              </a>
              <a 
                href="#"
                className="project-link"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Render the component
  ReactDOM.render(
    <ProjectCard />,
    document.getElementById('projects-root')
  );