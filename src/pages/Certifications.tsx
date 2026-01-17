import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity, FaAward, FaRobot, FaBrain } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee, SiGoogle, SiIbm, SiTensorflow, SiAmazon } from 'react-icons/si';
import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';
const iconData: { [key: string]: { icon: JSX.Element; color: string } } = {
  udemy: { icon: <SiUdemy />, color: '#a435f0' },
  coursera: { icon: <SiCoursera />, color: '#2a73cc' },
  ieee: { icon: <SiIeee />, color: '#00629b' },
  google: { icon: <SiGoogle />, color: '#5f9cff' },
  ibm: { icon: <SiIbm />, color: '#3b7ddd' },
  aws: { icon: <SiAmazon />, color: '#ff9900' },
  tensorflow: { icon: <SiTensorflow />, color: '#ff6f00' },
  university: { icon: <FaUniversity />, color: '#6aa9ff' },
  award: { icon: <FaAward />, color: '#f5b700' },
  anthropic: { icon: <FaRobot />, color: '#b388ff' },
  deeplearning: { icon: <FaBrain />, color: '#7f8cff' }
};

const fallbackCertifications: Certification[] = [
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
    title: 'Generative Deep Learning with TensorFlow',
    issuer: 'DeepLearning.AI',
    issuedDate: 'Sep 2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/6W4YHZVQU9SH',
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
    title: 'The Power of Statistics',
    issuer: 'Google',
    issuedDate: 'Sep 2025',
    link: 'https://www.coursera.org/account/accomplishments/records/QY011V7I7S2D',
    iconName: 'google'
  },
  {
    title: 'Regression Analysis: Simplify Complex Data Relationships',
    issuer: 'Google',
    issuedDate: 'Sep 2025',
    link: 'https://www.coursera.org/account/accomplishments/records/TTVF3ZIA18AH',
    iconName: 'google'
  },
  {
    title: 'Advanced Algorithms',
    issuer: 'Stanford Online',
    issuedDate: 'Aug 2025',
    link: 'https://www.coursera.org/account/accomplishments/records/T92JJ80XBF73',
    iconName: 'university'
  },
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Stanford Online',
    issuedDate: 'Aug 2025',
    link: 'https://www.coursera.org/account/accomplishments/records/7P82MM0ABR5E',
    iconName: 'university'
  },
  {
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'Stanford Online',
    issuedDate: 'Aug 2025',
    link: 'https://www.coursera.org/account/accomplishments/records/ETHMPAF4MK1J',
    iconName: 'university'
  },
  {
    title: 'Model Context Protocol: Advanced Topics',
    issuer: 'Anthropic',
    issuedDate: 'Aug 2025',
    link: 'https://verify.skilljar.com/c/nq3ohr44fuh8',
    iconName: 'anthropic'
  },
  {
    title: 'AI Fluency Framework & Foundations',
    issuer: 'Anthropic',
    issuedDate: 'Aug 2025',
    link: 'https://verify.skilljar.com/c/xg8iujxp9vgq',
    iconName: 'anthropic'
  },
  {
    title: 'Claude in Amazon Bedrock',
    issuer: 'Anthropic',
    issuedDate: 'Aug 2025',
    link: 'https://verify.skilljar.com/c/4jey2mgozdaz',
    iconName: 'anthropic'
  },
  {
    title: "Claude with Google Cloud's Vertex AI",
    issuer: 'Anthropic',
    issuedDate: 'Aug 2025',
    link: 'https://verify.skilljar.com/c/rkd97o7ntwdp',
    iconName: 'anthropic'
  },
  {
    title: 'Claude with the Anthropic API',
    issuer: 'Anthropic',
    issuedDate: 'Aug 2025',
    link: 'https://verify.skilljar.com/c/rg7pmy2ypety',
    iconName: 'anthropic'
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

const getIssuerIconData = (cert: Certification) => {
  const issuer = (cert.issuer || '').toLowerCase();
  const title = (cert.title || '').toLowerCase();

  if (iconData[cert.iconName]) return iconData[cert.iconName];
  if (issuer.includes('google')) return iconData.google;
  if (issuer.includes('ibm')) return iconData.ibm;
  if (issuer.includes('deeplearning') || issuer.includes('deep learning')) return iconData.deeplearning;
  if (issuer.includes('anthropic')) return iconData.anthropic;
  if (issuer.includes('stanford') || issuer.includes('university') || issuer.includes('institute')) return iconData.university;
  if (issuer.includes('amazon') || issuer.includes('aws')) return iconData.aws;
  if (issuer.includes('master challenge')) return iconData.award;
  if (title.includes('tensorflow')) return iconData.deeplearning;
  return iconData.university;
};

const getCertificationSection = (cert: Certification) => {
  const issuer = (cert.issuer || '').toLowerCase();
  if (issuer.includes('google')) return 'Google';
  if (issuer.includes('deeplearning')) return 'DeepLearning.AI';
  if (issuer.includes('stanford')) return 'Stanford Online';
  if (issuer.includes('anthropic')) return 'Anthropic';
  if (issuer.includes('ibm')) return 'IBM';
  return 'Other';
};

const Certifications: React.FC = () => {

  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => { 
    async function fetchCertifications() {
      try {
        const data = await getCertifications();
        setCertifications(data);
      } catch (error) {
        console.error('Failed to load certifications:', error);
      }
    }

    fetchCertifications();
  }, []);

  const displayCertifications = certifications.length > 0 ? certifications : fallbackCertifications;
  const sections = displayCertifications.reduce<Record<string, Certification[]>>((acc, cert) => {
    const section = getCertificationSection(cert);
    if (!acc[section]) acc[section] = [];
    acc[section].push(cert);
    return acc;
  }, {});
  const sectionOrder = ['Google', 'DeepLearning.AI', 'Stanford Online', 'Anthropic', 'IBM', 'Other']
    .filter((section) => sections[section]?.length);

  return (
    <div className="certifications-container">
      {sectionOrder.map((section) => (
        <div key={section} className="certification-section">
          <h3 className="certification-section-title">{section}</h3>
          <div className="certifications-grid">
            {sections[section].map((cert, index) => {
              const iconDataForCard = getIssuerIconData(cert);
              const CardTag = cert.link ? 'a' : 'div';
              return (
                <CardTag
                  href={cert.link || undefined}
                  key={`${section}-${index}`}
                  target={cert.link ? '_blank' : undefined}
                  rel={cert.link ? 'noopener noreferrer' : undefined}
                  className="certification-card"
                  style={{ '--delay': `${index * 0.08}s` } as React.CSSProperties}
                  aria-label={cert.link ? `Open ${cert.title}` : undefined}
                >
                  <div className="certification-content">
                    <div className="certification-icon" style={{ color: iconDataForCard.color }}>
                      {iconDataForCard.icon}
                    </div>
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                    {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
                  </div>
                  {cert.link && (
                    <div className="certification-link animated-icon">
                      <FaExternalLinkAlt />
                    </div>
                  )}
                </CardTag>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
