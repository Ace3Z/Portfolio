import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';
const WorkPermit: React.FC = () => {

  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);
  const fallbackData = {
    visaStatus: 'Swiss Residence Permit (Type B)',
    additionalInfo: 'For any additional queries please reach me out on +41 78 447 88 87!'
  };
  useEffect(() => {
    async function fetchWorkPermitData() {
      try {
        const data = await getWorkPermit();
        setWorkPermitData(data);
      } catch (error) {
        console.error('Failed to load work permit data:', error);
      }
    }
    fetchWorkPermitData();
  }, []);

  const visaStatus = workPermitData?.visaStatus || fallbackData.visaStatus;
  const additionalInfo = workPermitData?.additionalInfo || fallbackData.additionalInfo;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          I'm currently on a <strong>{visaStatus}</strong> 🛂, which allows me to work in Switzerland🇨🇭 if my employer applys for a work permit!  My permit is valid until <strong> August 2027 (the end of my study period)</strong> 📅, giving me the opportunity to build valuable experience and grow my career here. 🌟
        </p>
        <p className="additional-info">{additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
