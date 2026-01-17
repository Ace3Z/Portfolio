import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { getProfileBanner } from '../queries/getProfileBanner';
import { ProfileBanner as ProfileBannerType } from '../types';

type ProfileType = 'recruiter' | 'adventurer';

interface ProfileBannerProps {
  profile: ProfileType;
}

const fallbackContent: Record<
  ProfileType,
  { headline: string; summary: string; resumeUrl: string; linkedinUrl: string }
> = {
  recruiter: {
    headline: 'Mahbod Tajdini - Data Science Student',
    summary: 'Analytical and research-focused Data Scientist with a strong background in Artificial Intelligence and ongoing Master’s studies in Data Science at Universität Zürich, with academic affiliation to ETH Zürich. I intend to pursue a PhD focusing on robot perception, computer vision, and machine learning, alongside data-driven approaches in bioinformatics',
    resumeUrl: '/Mahbod_Tajdini_CV.pdf',
    linkedinUrl: 'https://www.linkedin.com/in/mahbodtajdini/'
  },
  adventurer: {
    headline: 'Mahbod Tajdini - Data Science Student',
    summary: 'Analytical and research-focused Data Scientist with a strong background in Artificial Intelligence and ongoing Master’s studies in Data Science at Universität Zürich, with academic affiliation to ETH Zürich. I intend to pursue a PhD focusing on robot perception, computer vision, and machine learning, alongside data-driven approaches in bioinformatics',
    resumeUrl: '/Mahbod_Tajdini_CV.pdf',
    linkedinUrl: 'https://www.linkedin.com/in/mahbodtajdini/'
  }
};

const ProfileBanner: React.FC<ProfileBannerProps> = ({ profile }) => {


  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProfileBanner();
        setBannerData(data);
      } catch (error) {
        console.error('Failed to load profile banner data:', error);
      }
    }
    fetchData();
  }, []);

  const headline = bannerData?.headline || fallbackContent[profile].headline;
  const profileSummary = bannerData?.profileSummary || fallbackContent[profile].summary;
  const resumeUrl = bannerData?.resumeLink?.url || fallbackContent[profile].resumeUrl;
  const linkedinUrl = bannerData?.linkedinLink || fallbackContent[profile].linkedinUrl;

  const handleResumeClick = () => {
    if (!resumeUrl) return;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Mahbod_Tajdini_CV.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkedinClick = () => { 
    if (!linkedinUrl) return;
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{headline}</h1>
        <p className="banner-description">
          {profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handleResumeClick} label="Download CV" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
