import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { Project } from '../types';
import financeImage from '../images/mlfin.png';
import trbImage from '../images/fball.png';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';


const Projects: React.FC = () => {
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
    },
    {
      title: 'Meme CV Project',
      description: 'Lightweight experimental computer vision workspace focused on real-time detection and gesture data collection using YOLOv8 and DeepFace, with utilities for capturing training images and integrating Roboflow workflows for inference and annotation.',
      techUsed: 'Python, YOLOv8, DeepFace, Roboflow, Computer Vision',
      image: { url: blueImage },
      link: 'https://github.com/Ace3Z/Meme-CV-project'
    },
    {
      title: 'BERT Twitter Sentiment Analysis',
      description: 'Sentiment analysis pipeline that applies lexicon-based methods, Naive Bayes with vectorization, and fine-tuned BERT models to Twitter text data, training and comparing approaches for classifying tweet sentiment.',
      techUsed: 'Python, BERT, NLP, Naive Bayes, Vectorization',
      image: { url: redImage },
      link: 'https://github.com/Ace3Z/bert-twitter-sentiment-analysis'
    },
    {
      title: 'Euro Meat Mortality Analysis',
      description: 'Data-wrangling and exploratory analysis exploring per-capita consumption of multiple meat categories across European countries (2009–2019) and their relationships with overall and cardiovascular mortality rates.',
      techUsed: 'Python, Data Wrangling, EDA, Public Health',
      image: { url: greyImage },
      link: 'https://github.com/Ace3Z/euro-meat-mortality-analysis'
    },
    {
      title: 'Football Player Stats Ontology',
      description: 'Dataset construction and SPARQL-driven analytics project building a consolidated ontology of football players’ biographical and performance statistics to support structured queries and in-depth sport analytics via notebook and RDF representations.',
      techUsed: 'RDF, SPARQL, Knowledge Graphs, Data Modeling',
      image: { url: yellowImage },
      link: 'https://github.com/Ace3Z/football-player-stats-ontology'
    }
  ];
  
  const displayProjects = fallbackProjects;

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
