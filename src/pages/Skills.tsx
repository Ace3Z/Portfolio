import React from 'react';
import './Skills.css';
import { FaDatabase, FaGlobe, FaLanguage } from 'react-icons/fa';
import {
  SiCplusplus,
  SiDocker,
  SiGit,
  SiHuggingface,
  SiJupyter,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiProlog,
  SiPython,
  SiPytorch,
  SiR,
  SiScikitlearn,
  SiScipy,
  SiTensorflow
} from 'react-icons/si';

type SkillItem = {
  name: string;
  description: string;
  icon: JSX.Element;
};

type SkillCategory = {
  title: string;
  items: SkillItem[];
};

const categories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Python', description: 'Programming Language', icon: <SiPython /> },
      { name: 'R', description: 'Statistical Programming', icon: <SiR /> },
      { name: 'Prolog', description: 'Logic Programming', icon: <SiProlog /> },
      { name: 'C++', description: 'Systems Programming', icon: <SiCplusplus /> },
      { name: 'SQL', description: 'Query Language', icon: <FaDatabase /> }
    ]
  },
  {
    title: 'Tools and Frameworks',
    items: [
      { name: 'Jupyter', description: 'Interactive Notebooks', icon: <SiJupyter /> },
      { name: 'PyTorch', description: 'Deep Learning', icon: <SiPytorch /> },
      { name: 'TensorFlow', description: 'Deep Learning', icon: <SiTensorflow /> },
      { name: 'Scikit-Learn', description: 'Machine Learning', icon: <SiScikitlearn /> },
      { name: 'NumPy', description: 'Numerical Computing', icon: <SiNumpy /> },
      { name: 'Pandas', description: 'Data Analysis', icon: <SiPandas /> },
      { name: 'SciPy', description: 'Scientific Computing', icon: <SiScipy /> },
      { name: 'Statsmodels', description: 'Statistical Modeling', icon: <FaDatabase /> },
      { name: 'OpenCV', description: 'Computer Vision', icon: <SiOpencv /> },
      { name: 'HuggingFace', description: 'NLP Tooling', icon: <SiHuggingface /> },
      { name: 'MySQL', description: 'Relational Database', icon: <SiMysql /> },
      { name: 'Git', description: 'Version Control', icon: <SiGit /> },
      { name: 'Docker', description: 'Containerization', icon: <SiDocker /> }
    ]
  },
  {
    title: 'Languages',
    items: [
      { name: 'English', description: 'Fluent', icon: <FaGlobe /> },
      { name: 'Persian', description: 'Fluent', icon: <FaLanguage /> },
      { name: 'French', description: 'Conversational', icon: <FaLanguage /> },
      { name: 'German', description: 'Basic', icon: <FaLanguage /> },
      { name: 'Dutch', description: 'Basic', icon: <FaLanguage /> }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">SKILLS</h2>
      {categories.map((category) => (
        <div key={category.title} className="skill-category">
          <h3 className="category-title">{category.title}</h3>
          <div className="skills-grid">
            {category.items.map((item) => (
              <div key={item.name} className="skill-card">
                <div className="skill-icon">{item.icon}</div>
                <h4 className="skill-name">{item.name}</h4>
                <p className="skill-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
