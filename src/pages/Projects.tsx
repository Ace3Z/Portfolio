import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { Project } from '../types';
import { getProjects } from '../queries/getProjects';
import financeImage from '../images/mlfin.png';
import trbImage from '../images/fball.png';


const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const fallbackProjects: Project[] = [
    {
      title: 'ML in Finance & Insurance',
      description: 'Estimated solvency ratios using ML and DL models, built a reproducible Python pipeline with SHAP explainability, and analyzed model robustness under extreme scenarios.',
      techUsed: 'Python, Machine Learning, SHAP, Data Analysis',
      image: { url: financeImage },
      link: 'https://github.com/Ace3Z/ETH-Innovation-Project-ML-in-Finance-Insurance'
    },
    {
      title: 'Football Ball Recovery Time Analysis (TRB)',
      description: 'Built reproducible analytics in Python, created interactive dashboards, and analyzed event data to study ball recovery dynamics in professional football.',
      techUsed: 'Python, Statistics, Data Visualization, Analytics',
      image: { url: trbImage },
      link: 'https://github.com/Ace3Z/Football-TRB'
    }
  ];
  
  useEffect(() => { 
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to load projects:', error);
      }
    }
    
    fetchProjects()
  }, [])
  
  const displayProjects = projects.length > 0 ? projects.slice(0, 2) : fallbackProjects;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {displayProjects.map((project, index) => {
          const CardTag = project.link ? 'a' : 'div';
          return (
          <CardTag
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            href={project.link}
            target={project.link ? '_blank' : undefined}
            rel={project.link ? 'noopener noreferrer' : undefined}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="project-link-icon" />
                  GitHub Repository
                </a>
              )}
            </div>
          </CardTag>
        )})}
      </div>
    </div>
  );
};

export default Projects;
