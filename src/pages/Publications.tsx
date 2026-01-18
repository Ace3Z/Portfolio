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
    title: 'Capitalising on Football Data with Machine Learning: A Literature Review',
    authors: 'Dionysios Kyriazopoulos, Mauricio Verano Merino, Mahbod Tajdini',
    venue: 'ACM Computing Surveys (ACM CSUR)',
    year: '2026',
    summary: 'Review and resubmit.',
    tags: ['Machine Learning', 'Sports Analytics', 'Survey']
  },
  {
    title: 'The Clash of Codes: From Peer-to-Peer Duplication to AI-Generation in Introductory Programming Assignments',
    authors: 'Mahbod Tajdini, Jose Maria Zuarte Reis Claver, Mauricio Verano Merino',
    venue: 'ICSE 2026 SEET Track',
    year: '2026',
    summary: 'Accepted.',
    tags: ['Software Engineering', 'Education', 'AI']
  },
  {
    title: 'Programming Lego MINDSTORMS Robots using NI LabVIEW®',
    authors: 'Pooyan Nayyeri, Mahbod Tajdini',
    venue: 'eBook',
    year: '2022',
    summary: 'Open-access eBook.',
    link: 'https://pnnayyeri.github.io/contents/labview_book_en.pdf',
    tags: ['Robotics', 'Education', 'LabVIEW']
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
