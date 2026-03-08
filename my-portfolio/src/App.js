import React, { useEffect } from 'react';
import './style.css';
import Experience from './Experience';

function App() {
  useEffect(() => {
    const glow = document.getElementById('glow');
    if (glow) {
      const handleMouseMove = (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div className="App">
      <div id="glow"></div>
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="header-info">
            <h1>Justin Djafar</h1>
            <h2>AI & Machine Learning Engineer</h2>
            <p className="tagline">Crafting intelligent solutions with a focus on machine learning and scalable architectures.</p>
          </div>
          <nav>
            <ul>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#education">EDUCATION</a></li>
              <li><a href="#experience">EXPERIENCE</a></li>
              <li><a href="#projects">PROJECTS</a></li>
            </ul>
          </nav>
          <div className="resume-link">
            <a href="https://www.linkedin.com/in/justin-djafar-226420247/overlay/1767861854118/single-media-viewer/?profileId=ACoAAD0bwz4BXpoYa8yhVa3xaeNBqId468ZnuFI"
              target="_blank"
              rel="noopener noreferrer">
              View Full Resume <span className="arrow">↗</span>
            </a>
          </div>


        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/justin-djafar-226420247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/JustinDjafar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://instagram.com/just.in_kriss" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </aside>

      <main className="content">
        <section id="about" className="section-container">
          <h2 className="section-title">About</h2>
          <div className="about-text">
            <p>
              I am a final-year Computer Science student with a strong interest in 
              <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer" className="clean-link"> AI </a> 
              and 
              <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener noreferrer" className="clean-link"> Machine Learning</a>. 
              My passion lies in architecting complex algorithms and developing data-driven solutions that solve real-world problems.
            </p>
            <p>
              Throughout my academic journey, I've specialized in  
              <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="clean-link"> Python</a>-based 
              applications, focusing particularly on Artificial Intelligence and Machine Learning, including natural language processing and image recognition. 
              My other areas of focus include full-stack engineering 
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="clean-link"> React </a>and
              <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" className="clean-link"> Node.js</a>.
            </p>
            <p>
              When I'm not deep in code, you'll likely find me in Steam playing 
              <a href="https://en.wikipedia.org/wiki/Dota_2" target="_blank" rel="noopener noreferrer" className="clean-link"> Dota 2 </a> 
              or watching
              <a href="https://www.twitch.tv/caseoh_" target="_blank" rel="noopener noreferrer" className="clean-link"> CaseOh </a> 
              on Twitch. I believe in a balanced approach to life, where recreation fuels creativity and community interaction keeps me grounded in the ever-evolving tech landscape.
            </p>
          </div>
        </section>

        <section id="education" className="section-container">
          <h2 className="section-title">Education</h2>
          <div className="edu-card" onClick={() => window.open('https://grow.google/intl/id_id/bangkit/?tab=machine-learning')}>
            <div className="edu-year">2024</div>
            <div className="edu-content">
              <div className="edu-title-wrapper">
                <span className="edu-title">Bangkit Academy · Machine Learning</span>
                <span className="arrow">↗</span>
              </div>
              <p>
                Selected for the Google-led career readiness program, specializing in Machine Learning. Focused on TensorFlow, data engineering, and deploying models to production.
              </p>
              <div className="edu-cert-container">
                <img src="cert_bangkit.jpg" alt="Bangkit Certificate" className="edu-cert-thumb" />
              </div>
              <div className="tags">
                <span>TensorFlow</span>
                <span>Python</span>
                <span>JavaScript</span>
                <span>Scikit-Learn</span>
              </div>
            </div>
          </div>
          <div className="edu-card" onClick={() => window.open('https://www.ipb.ac.id/')}>
            <div className="edu-year">2022 - Present</div>
            <div className="edu-content">
              <div className="edu-title-wrapper">
                <span className="edu-title">IPB University · Computer Science</span>
                <span className="arrow">↗</span>
              </div>
              <p>
                B.S. in Computer Science. Core coursework includes Algorithm Design, Database Systems, and Artificial Intelligence, with a focus on machine learning applications.
              </p>
              <div className="tags">
                <span>C++</span>
                <span>Python</span>
                <span>SQL</span>
                <span>Web Dev</span>
              </div>
            </div>
          </div>
        </section>

        <Experience />

        <section id="projects" className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="project-card" onClick={() => window.open('https://github.com/YudoTLE/NewsGram/tree/main')}>
            <div className="project-image-container">
              <img src="NewsGram.png" alt="NewsGram Project" className="project-thumb"/>
            </div>
            <div className="project-content">
              <div className="project-header">
                <span className="project-title">NewsGram: NLP-Based Recommendation System</span>
                <span className="arrow">↗</span>
              </div>
              <p>
                Engineered a personalized news recommendation engine using the MIND dataset. The system utilizes advanced NLP techniques to analyze user history and preferences, delivering highly relevant content suggestions in real-time.
              </p>
              <div className="tags">
                <span>NLP</span>
                <span>Python</span>
                <span>Pandas</span>
                <span>JavaScript</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;