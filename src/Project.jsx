function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
