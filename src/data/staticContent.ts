import { Certification, ContactMe, ProfileBanner, Project, Skill, TimelineItem, WorkPermit } from '../types';
import financeImage from '../images/mlfin.png';
import trbImage from '../images/fball.png';

export const profileBanner: ProfileBanner = {
  backgroundImage: { url: '' },
  headline: 'Mahbod Tajdini - Data Science Student',
  resumeLink: { url: '/Mahbod_Tajdini_CV.pdf' },
  linkedinLink: 'https://www.linkedin.com/in/mahbodtajdini/',
  profileSummary:
    'Analytical and research-focused Data Scientist with a strong background in Artificial Intelligence and ongoing Master’s studies in Data Science at Universität Zürich, with academic affiliation to ETH Zürich.'
};

export const workPermit: WorkPermit = {
  visaStatus: 'Swiss Residence Permit (Type B)',
  expiryDate: new Date('2027-08-31'),
  summary: 'Open to roles in Switzerland while studying.',
  additionalInfo: 'For any additional queries please reach me out on +41 78 447 88 87!'
};

export const timeline: TimelineItem[] = [
  {
    timelineType: 'education',
    name: 'ETH Zürich and Universität Zürich (UZH)',
    title: 'Master’s degree in Data Science',
    summaryPoints: [
      'Currently pursuing a Master’s degree in Data Science with an expected graduation date of August 2027.'
    ],
    dateRange: 'Sep 2025 - Present'
  },
  {
    timelineType: 'research',
    name: 'Vrije Universiteit Amsterdam (VU Amsterdam)',
    title: 'Research Assistant',
    summaryPoints: [
      'Collaborating on research projects in sports analytics and education analytics.',
      'Analyzing spatiotemporal data to study ball recovery dynamics in football.'
    ],
    dateRange: 'Jun 2025 - Present'
  },
  {
    timelineType: 'work',
    name: 'Forward Football',
    title: 'AI Research Intern',
    summaryPoints: [
      'Modeled player interactions and derived tactical insights from spatiotemporal datasets.'
    ],
    dateRange: 'Sep 2024 - Jun 2025'
  },
  {
    timelineType: 'education',
    name: 'Vrije Universiteit Amsterdam (VU Amsterdam)',
    title: 'Bachelor’s degree in Artificial Intelligence',
    summaryPoints: [
      'Graduated cum laude with a GPA of 8.5/10.',
      'Bachelor’s thesis focused on ball recovery times in professional football.'
    ],
    dateRange: 'Sep 2022 - Jul 2025'
  }
];

export const projects: Project[] = [
  {
    title: 'ML in Finance & Insurance',
    description:
      'Estimated solvency ratios using ML and DL models, built a reproducible Python pipeline with SHAP explainability, and analyzed model robustness under extreme scenarios.',
    techUsed: 'Python, Machine Learning, SHAP, Data Analysis',
    image: { url: financeImage },
    link: 'https://github.com/Ace3Z/ETH-Innovation-Project-ML-in-Finance-Insurance'
  },
  {
    title: 'Football Ball Recovery Time Analysis (TRB)',
    description:
      'Built reproducible analytics in Python, created interactive dashboards, and analyzed event data to study ball recovery dynamics in professional football.',
    techUsed: 'Python, Statistics, Data Visualization, Analytics',
    image: { url: trbImage },
    link: 'https://github.com/Ace3Z/Football-TRB'
  }
];

export const skills: Skill[] = [
  {
    name: 'Python',
    category: 'Languages',
    description: 'Data analysis, ML pipelines, and reproducible research workflows.',
    icon: 'FaReact'
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    description: 'Typed UI development with React.',
    icon: 'SiTypescript'
  },
  {
    name: 'React',
    category: 'Frontend',
    description: 'Component-driven UI and state management.',
    icon: 'FaReact'
  },
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'APIs and tooling for web services.',
    icon: 'FaNodeJs'
  },
  {
    name: 'Docker',
    category: 'DevOps',
    description: 'Containerized development and deployment.',
    icon: 'FaDocker'
  }
];

export const certifications: Certification[] = [
  {
    title: 'Advanced Data Analytics',
    issuer: 'Google',
    issuedDate: 'Oct 2025',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/ECXM57PLCDLJ',
    iconName: 'google'
  },
  {
    title: 'Advanced Computer Vision with TensorFlow',
    issuer: 'DeepLearning.AI',
    issuedDate: 'Sep 2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/J4Y3V2ZEO4G5',
    iconName: 'deeplearning'
  },
  {
    title: 'Machine Learning',
    issuer: 'DeepLearning.AI',
    issuedDate: 'Aug 2025',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/M61ANNJYU1X9',
    iconName: 'deeplearning'
  },
  {
    title: 'Tools for Data Science',
    issuer: 'IBM',
    issuedDate: 'Aug 2025',
    link: 'https://coursera.org/verify/JZ3SUAAMSGLR',
    iconName: 'ibm'
  },
  {
    title: 'Consulting Skills Course',
    issuer: 'Master Challenge',
    issuedDate: 'Feb 2025',
    link: '',
    iconName: 'award'
  }
];

export const contactMe: ContactMe = {
  profilePicture: { url: '' },
  name: 'Mahbod Tajdini',
  title: 'Data Science Student',
  summary:
    'Analytical and research-focused Data Scientist with a strong background in Artificial Intelligence and ongoing Master’s studies in Data Science at Universität Zürich, with academic affiliation to ETH Zürich.',
  companyUniversity: 'Universität Zürich | ETH Zürich',
  linkedinLink: 'https://www.linkedin.com/in/mahbodtajdini/',
  email: 'mahbodtajdini@gmail.com',
  phoneNumber: '+41 78 447 88 87'
};
