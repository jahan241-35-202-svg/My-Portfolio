function About({ name, department, studentId }) {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <h3>{name}</h3>

      <p><strong>Department:</strong> {department}</p>

      <p><strong>Student ID:</strong> {studentId}</p>

      <p>
        Hello! I am Ishrat Jahan Lubna. I am currently studying in the
        Department of Software Engineering (SWE). I am interested in Web
        Development and React.js. I enjoy learning new technologies and
        building simple web applications.
      </p>
    </section>
  );
}

export default About;
