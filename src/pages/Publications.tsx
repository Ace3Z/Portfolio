import React from 'react';
import './Publications.css';
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  summary: string;
  link?: string;
  tags: string[];
};

const researchInterests = `
I focus on data-driven systems at the intersection of machine learning, computer vision, and robotics.
I am especially interested in robust perception, spatiotemporal modeling, and deploying reliable AI in real-world environments.
`;

const publications: Publication[] = [
  {
    title: 'Paper Title Placeholder',
    authors: 'Mahbod Tajdini, Co-author Name',
    venue: 'Conference / Journal Name',
    year: '2025',
    summary: 'One-sentence summary of the contribution and results.',
    link: '',
    tags: ['Computer Vision', 'Robotics', 'Perception']
  },
  {
    title: 'Another Publication Placeholder',
    authors: 'Mahbod Tajdini, Co-author Name',
    venue: 'Workshop / Journal Name',
    year: '2024',
    summary: 'Brief description of the method, dataset, or impact.',
    link: '',
    tags: ['Machine Learning', 'Spatiotemporal Modeling']
  }
];

const Publications: React.FC = () => {
  return (
    <div className="publications-page">
      <header className="publications-hero">
        <div className="publications-hero-content">
          <p className="publications-kicker">Publications &amp; Research Interest</p>
          <h1>Publications &amp; Research Interest</h1>
          <p className="publications-intro">{researchInterests.trim()}</p>
        </div>
      </header>

      <section className="publications-section">
        <div className="publications-grid">
          {publications.map((publication, index) => {
            const CardTag = publication.link ? 'a' : 'div';
            return (
              <CardTag
                key={`${publication.title}-${index}`}
                className="publication-card"
                href={publication.link || undefined}
                target={publication.link ? '_blank' : undefined}
                rel={publication.link ? 'noopener noreferrer' : undefined}
              >
                <div className="publication-header">
                  <div className="publication-icon">
                    <FaBookOpen />
                  </div>
                  <div className="publication-meta">
                    <span className="publication-venue">{publication.venue}</span>
                    <span className="publication-year">{publication.year}</span>
                  </div>
                </div>
                <h2 className="publication-title">{publication.title}</h2>
                <p className="publication-authors">{publication.authors}</p>
                <p className="publication-summary">{publication.summary}</p>
                <div className="publication-tags">
                  {publication.tags.map((tag) => (
                    <span key={tag} className="publication-tag">{tag}</span>
                  ))}
                </div>
                {publication.link && (
                  <span className="publication-link">
                    View Publication <FaExternalLinkAlt />
                  </span>
                )}
              </CardTag>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Publications;
