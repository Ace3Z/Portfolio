import React from 'react';
import TimelinePage from '../components/TimelinePage';
import { TimelineItem } from '../types';

const educationTimeline: TimelineItem[] = [
  {
    timelineType: 'education',
    name: 'ETH Zürich and Universität Zürich (UZH)',
    title: 'Master’s degree in Data Science 🎓',
    summaryPoints: [
      '🎊 Currently pursuing a Master’s degree in Data Science at ETH Zürich and Universität Zürich (UZH), with an expected graduation date of August 2027.'
    ],
    dateRange: 'Sep 2025 - Present'
  },
  {
    timelineType: 'education',
    name: 'Vrije Universiteit Amsterdam (VU Amsterdam)',
    title: "Bachelor’s degree in Artificial Intelligence 🎓",
    summaryPoints: [
      '🎊 Graduated cum laude with a GPA of 8.5/10 (=4.0 GPA).',
      'Ranked Top 8% of the cohort.',
      '📜 My Bachelor’s thesis, titled "Exploring Ball Recovery Times in Professional Football: Insights and Patterns", was completed under the supervision of Dr. Mauricio Verano Merino.'
    ],
    dateRange: 'Sep 2022 - Jul 2025'
  },
  {
    timelineType: 'education',
    name: 'Tehran International School',
    title: 'International Baccalaureate (IBDP) 🎓',
    summaryPoints: [
      '🎊 Graduated with a total grade of 41/45.',
      'Ranked Top 3% worldwide.'
    ],
    dateRange: 'Sep 2020 - Jul 2022'
  }
];

const Education: React.FC = () => {
  return <TimelinePage title="🎓 Education Timeline" items={educationTimeline} />;
};

export default Education;
