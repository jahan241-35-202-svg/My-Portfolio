function About({ name, department }) {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <h3>{name}</h3>

      <p><strong>Department:</strong> {department}</p>

      <p>
        Hello! I am a Software Engineering student.
        I enjoy learning React.js, JavaScript, HTML, and CSS.
        I love creating simple and attractive web applications.
      </p>
    </section>
  );
}

export default About;
