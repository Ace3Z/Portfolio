import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {

  return (
    <div className="skills-container">
      <h2 className="skills-title">SKILLS</h2>
      <div className="skill-category">
        <h3 className="category-title">Programming Languages</h3>
        <div className="skills-grid">
          {['Python', 'R', 'Prolog', 'C++', 'SQL'].map((item) => (
            <div key={item} className="skill-card">
              <span className="skill-label">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="skill-category">
        <h3 className="category-title">Tools and Frameworks</h3>
        <div className="skills-grid">
          {[
            'Jupyter',
            'PyTorch',
            'TensorFlow',
            'Scikit-Learn',
            'NumPy',
            'Pandas',
            'SciPy',
            'Statsmodels',
            'OpenCV',
            'HuggingFace',
            'MySQL',
            'Git'
          ].map((item) => (
            <div key={item} className="skill-card">
              <span className="skill-label">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="skill-category">
        <h3 className="category-title">Languages</h3>
        <div className="skills-grid">
          {[
            'English (fluent)',
            'Persian (fluent)',
            'French (conversational)',
            'German (basic)',
            'Dutch (basic)'
          ].map((item) => (
            <div key={item} className="skill-card">
              <span className="skill-label">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
