import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A simple portfolio website built with React."
    },
    {
      title: "Shopping List App",
      description: "A shopping list application using React."
    },
    {
      title: "Calculator",
      description: "A basic calculator built with React."
    }
  ];

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />

      <div className="container">
        <button
          className="btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>

        <About
          name="Ishrat Jahan Lubna"
          department="Software Engineering"
        />

        <Projects projects={projects} />
      </div>
    </div>
  );
}

export default App;
