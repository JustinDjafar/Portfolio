import React, { useState, useEffect } from 'react';
import './Experience.css';

const ImageSlider = ({ images, interval = 8000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="slider-btn prev" onClick={prevSlide}>‹</button>
      <div className="slider-viewport">
        <div 
          className="slider-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`Experience screenshot ${idx + 1}`} 
              className="slider-image"
            />
          ))}
        </div>
      </div>
      <button className="slider-btn next" onClick={nextSlide}>›</button>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

function Experience() {
  const experiences = [
    {
      company: "PT Salam Pacific Indonesia Lines",
      role: "AI Engineer",
      period: "Aug 2025 - Feb 2026",
      location: "Tanjung Priok, North Jakarta",
      link: "https://www.spil.co.id/",
      logo: "logos/spil_logo.jpg",
      description: [
        "Architected and developed HRVIEW, an automated asynchronous video interview platform designed to streamline high-volume recruitment through secure, one-time candidate links.",
        "Engineered a full-stack system encompassing database design, video processing pipelines, and a React-based interface for both candidates and administrators.",
        "Integrated high-accuracy speech-to-text APIs to automate the transcription of interview recordings, enabling searchable and actionable candidate data.",
        "Developed an AI scoring engine leveraging sentence transformer models to quantitatively evaluate candidate responses against job descriptions and competency requirements."
      ],
      images: [
        'photos/SPIL/1.jpeg',
        'photos/SPIL/2.jpeg',
        'photos/SPIL/3.jpeg',
        'photos/SPIL/4.jpeg',
        'photos/SPIL/5.jpeg',
        'photos/SPIL/6.jpeg'
      ]
    },
    {
      company: "Caprae Capital Partners",
      role: "Internship",
      period: "Aug 2025 - Jan 2026",
      location: "Remote",
      link: "https://www.capraecapital.com/",
      logo: "logos/caprae_logo.jpg",
      description: [
        "Developed a custom natural language processing model focused on sentiment analysis to score email positivity and communication effectiveness.",
        "Built a responsive React interface for an AI-driven web scraping tool that extracts and analyzes business data based on targeted user parameters.",
        "Implemented robust data structures and interfaces using TypeScript, ensuring high maintainability and type safety across the application.",
        "Integrated frontend systems with complex backend API routes to facilitate real-time data fetching, processing, and display of AI-generated business metrics."
      ],
      images: [
        'photos/Caprae/1.jpeg',
        'photos/Caprae/2.jpeg',
        'photos/Caprae/3.jpg',
        'photos/Caprae/4.jpg'
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      {experiences.map((exp, idx) => (
        <div className="experience-card" key={idx} onClick={() => window.open(exp.link)}>
          <div className="experience-sidebar">
            <div className="experience-year">{exp.period}</div>
            <div className="experience-location">{exp.location}</div>
          </div>
          <div className="experience-content">
            <div className="experience-header">
              {exp.logo && <img src={exp.logo} alt={exp.company} className="experience-logo" />}
              <span className="experience-title">
                {exp.role} · {exp.company}
              </span>
              <span className="arrow">↗</span>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="experience-gallery-container">
              <ImageSlider images={exp.images} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;