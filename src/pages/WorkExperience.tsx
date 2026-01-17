import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar as StarIcon, FaBriefcase as WorkIcon, FaGraduationCap as SchoolIcon, FaHandsHelping as VolunteerIcon, FaFlask as ResearchIcon, FaChalkboardTeacher as TeachingIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';

type DisplayTimelineItem = TimelineItem & { theme?: 'primary' };

const WorkExperience: React.FC = () => {

  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);
  const fallbackTimeline: DisplayTimelineItem[] = [
    {
      timelineType: 'work',
      name: 'Forward·Inc',
      title: 'Student Consultant 🤵🏽‍♂️',
      summaryPoints: [
      '📁 Providing research, analysis, and practical recommendations for a mission-driven organization. Review programs, analyze data, and support strategic planning efforts. Collaborate with team members to improve operations, strengthen services, and support organizational goals.'
    ],
      dateRange: 'Jan 2026 - Present'
    },
      {
      timelineType: 'teaching',
      name: 'ETH Zürich D-USYS',
      title: 'Teaching Assistant 🧑🏽‍🏫',
      summaryPoints: [
      '📚 Serving as a Teaching Assistant for Environmental Systems Data Science: Machine Learning (701-3003-00L) under the supervision of Prof. Dr. Loïc Pellissier and Dr. Camille Pierre Albouy.'
    ],
      dateRange: 'Jan 2026 - Present'
    },
      {
        timelineType: 'work',
        name: 'Analytics Club at ETH Zürich',
        title: 'Hack4Good Organizing Staff 🖥️',
        summaryPoints: [
          'Supporting the operations of Hack4Good, an 8-week pro-bono program connecting ETH Zürich students with non-profit organizations to develop data-driven solutions for social causes.',
          'Assisting in facilitating partnerships with non-profit organizations to source impactful, real-world data challenges.',
          'Providing direct guidance and resources to student teams throughout the project lifecycle.',
          'Executing logistics for workshops and events focused on data science skills and project management.',
          'Contributing to the evaluation of project outcomes to assess alignment with social impact objectives of partner organizations.'
        ],
        dateRange: 'Nov 2025 - Present'
      },
      {
      timelineType: 'teaching',
      name: 'UZH Department of Informatics',
      title: 'Head Teaching Assistant 🧑🏽‍🏫',
      summaryPoints: [
      '📚 Served as Head Teaching Assistant for Informatics I (22AINF02) under the supervision of Prof. Dr. Harald Gall and Dr. Carol Alexandru, leading the teaching assistant team and managing teaching operations, exercise design, and assessment processes to ensure high-quality student learning support and effective course delivery.'
    ],
      dateRange: 'Sep 2025 - Dec 2025'
    },
    {
      timelineType: 'education',
      name: 'ETH Zürich and Universität Zürich (UZH)',
      title: 'Master’s degree in Data Science 🎓',
      summaryPoints: [
      '🎊 Currently pursuing a Master’s degree in Data Science at ETH Zürich and Universität Zürich (UZH), with an expected graduation date of August 2027.',
      ],
      dateRange: 'Sep 2025 - Present'
    },
      {
        timelineType: 'research',
        name: 'Vrije Universiteit Amsterdam (VU Amsterdam)',
        title: 'Research Assistant 👨🏽‍🔬',
        summaryPoints: [
          '🧪 Collaborating with Dr. Mauricio Verano Merino at the Sports Intelligence Lab (SIL) on multiple research projects, applying data-driven approaches in computer science and sports analytics.',
          'Conducted data-driven research on ball recovery in professional football, including exploration of machine learning applications in professional football.',
          'Analyzed large-scale educational data to evaluate the effects of Generative AI tools on student outcomes in programming courses.'
        ],
        dateRange: 'Jun 2025 - Present'
      },
      {
        timelineType: 'research',
        name: 'Forward Football',
        title: 'AI Research Intern 👨🏽‍🔬',
        summaryPoints: [
          '🧪 Analyzed large-scale spatiotemporal datasets to model player interactions, quantify team performance, and derive data-driven tactical insights.'
        ],
        dateRange: 'Sep 2024 - Jun 2025'
      },
      {
      timelineType: 'teaching',
      name: 'Vrije Universiteit Amsterdam (VU Amsterdam)',
      title: 'Teaching Assistant Mentor 🧑🏽‍🏫',
      summaryPoints: [
      '📚 Served as a mentor for new teaching assistants at VU Amsterdam, guiding them through the transition into instructional roles. Designed and delivered interactive workshops, developed training materials, and provided personalized feedback to support their growth in both confidence and teaching effectiveness.'
    ],
      dateRange: 'Aug 2024 - Jun 2025'
    },
    {
      timelineType: 'volunteer',
      name: 'World Robot Olympiad (WRO) Netherlands',
      title: 'Judge at the National WRO competitions of Netherlands 🤖',
      summaryPoints: [
        '🧑🏽‍⚖️ Served as a judge at the National World Robot Olympiad (WRO) competitions held in the Netherlands, where I evaluated student robotics projects and supported fair competition standards at the national level.'
      ],
      dateRange: 'Jun 2023 - Jul 2023'
    },
      {
      timelineType: 'teaching',
      name: 'Vrije Universiteit Amsterdam (VU Amsterdam)',
      title: 'Head Teaching Assistant 🧑🏽‍🏫',
      summaryPoints: [
        '📚 Served as the Head TA for the Computational Thinking course (X_400475) for BSc. Artificial Intelligence students, in collaboration with Dr. Aniel Bhulai. Oversaw and supported the course delivery for two academic years, each spanning approximately two months.'
      ],
      dateRange: 'Oct 2023 - Dec 2024'
    },
      {
      timelineType: 'teaching',
      name: 'Vrije Universiteit Amsterdam (VU Amsterdam)',
      title: 'Teaching Assistant 🧑🏽‍🏫',
    summaryPoints: [
      '📚 Served as a Teaching Assistant for multiple courses across the Faculty of Science and the Honors Program, primarily within the Computer Science and Artificial Intelligence departments.',
      'Assisted in Introduction to Python Programming (XB_0082) (2023, 2024).',
      'Assisted in The Impact of Algorithms on Human Lives - Honors course (X_HP015) (2024).',
      'Assisted in Project Intelligent Systems (X_401076) (2024).',
      'Assisted in Dynamic Modelling (XB_0036) (2024).',
      'Assisted in Human-Computer Interaction (XB_0013) (2024, 2025).',
      'Assisted in Applied Programming (XB_0102) (2024, 2025).',
      'Assisted in Machine Learning (X_400154) (2024).',
      'Assisted in Project Conversational Agents (XB_0101) (2025).'
    ],
      dateRange: 'Apr 2023 - Jun 2025'
    },
    {
      timelineType: 'work',
      name: 'Vrije Universiteit Amsterdam (VU Amsterdam)',
      title: 'Voting Member of the Program Committee 🤝🏽',
      summaryPoints: [
        '⭐ Elected student representative and official voting member of the Program Committee for the BSc Artificial Intelligence program. Acted as the primary point of contact for AI students, collecting feedback and concerns regarding course content, teaching quality, and overall program structure.',
      ],
      dateRange: 'Oct 2022 - Jun 2025'
    },
    {
      timelineType: 'work',
      name: 'Vrije Universiteit Amsterdam (VU Amsterdam)',
      title: 'International Student Ambassador 🌍',
            summaryPoints: [
        '⭐ Selected by VU Amsterdam to represent the BSc. Artificial Intelligence program at key events and outreach initiatives. Acted as the face of the university during information sessions, student panels, and open days, as well as engaging with prospective students and their families, both locally and internationally.'
      ],
      dateRange: 'Oct 2022 - Jun 2025'
    },
    {
      timelineType: 'education',
      name: 'Vrije Universiteit Amsterdam (VU Amsterdam)',
      title: "Bachelor’s degree in Artificial Intelligence 🎓",
      summaryPoints: [
        '🎊 Graduated cum laude with a GPA of 8.5/10 (=4.0 GPA)',
        'Ranked Top 8% of the cohort.',
        '📜 My Bachelor’s thesis, titled "Exploring Ball Recovery Times in Professional Football: Insights and Patterns", was completed under the supervision of Dr. Mauricio Verano Merino.'
      ],
      dateRange: 'Sep 2022 - Jul 2025'
    },
    {
      timelineType: 'work',
      name: 'Baridsoft | برید سامانه نوین',
      title: 'Information Technology Intern 💻',
      summaryPoints: [
        '👷🏽‍♂️ Completed a hands-on internship focused on computer systems, network infrastructure, and IT support. Gained practical experience in troubleshooting hardware and software issues, configuring network devices, and assisting in maintaining internal systems.'
      ],
      dateRange: 'Jun 2021 - Aug 2021'
    },
    {
      timelineType: 'education',
      name: 'Tehran International School',
      title: "International Baccalaureate (IBDP) 🎓",
      summaryPoints: [
        '🎊 Graduated with a total grade of 41/45.',
        'Ranked Top 3% worldwide.'
      ],
      dateRange: 'Sep 2020 - Jul 2022'
    },
    {
      timelineType: 'work',
      name: 'University of Tehran',
      title: 'Captain of the Students Robotic Team 🤖',
      summaryPoints: [
        '🚀 Led the Student Robotics Team at the University of Tehran as a Team Captain, representing the university in the World Robot Olympiad (WRO) at both national and international levels. Oversaw project planning, robot design, programming, and team coordination.',
        'Ranked among the Top 16 teams worldwide at the 2017 WRO International Finals in Costa Rica.'
      ],
      dateRange: 'Jan 2017 - Nov 2019'
    }
  ];

  useEffect(() => {
    async function fetchTimelineItem() {
      try {
        const data = await getTimeline();
        setTimeLineData(data);
      } catch (error) {
        console.error('Failed to load timeline:', error);
      }
    }
    fetchTimelineItem();
  }, []);


  const displayTimeline = timeLineData || fallbackTimeline;
  const filteredTimeline = displayTimeline;

  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline className="timeline">
        {filteredTimeline.map((item, index) => {
          const isPrimary = item.timelineType === 'work' && item.theme === 'primary';
          const isWork = item.timelineType === 'work';
          const isResearch = item.timelineType === 'research';
          const isVolunteer = item.timelineType === 'volunteer';
          const isTeaching = item.timelineType === 'teaching';
          const normalizedDateRange = `${item.dateRange || ''}`
            .toLowerCase()
            .replace(/[\u2013\u2014]/g, '-');
          const isCurrent = normalizedDateRange.includes('present')
            || normalizedDateRange.includes('current')
            || normalizedDateRange.includes('ongoing')
            || normalizedDateRange.includes('now');
          const workColors = {
            card: isCurrent ? 'rgb(12, 42, 92)' : 'rgb(245, 245, 245)',
            icon: isCurrent ? 'rgb(12, 42, 92)' : 'rgb(33, 150, 243)',
            arrow: isCurrent ? '7px solid rgb(12, 42, 92)' : '7px solid rgb(245, 245, 245)',
            border: isCurrent ? '1px solid rgba(12, 42, 92, 0.75)' : '1px solid transparent',
            text: isCurrent ? '#f8fbff' : '#111'
          };
          const researchColors = {
            card: isCurrent ? 'rgb(58, 24, 86)' : 'rgb(236, 230, 255)',
            icon: isCurrent ? 'rgb(58, 24, 86)' : 'rgb(128, 88, 255)',
            arrow: isCurrent ? '7px solid rgb(58, 24, 86)' : '7px solid rgb(236, 230, 255)',
            border: isCurrent ? '1px solid rgba(58, 24, 86, 0.7)' : '1px solid transparent',
            text: isCurrent ? '#f7f0ff' : '#111'
          };
          const volunteerColors = {
            card: 'rgb(255, 238, 217)',
            icon: 'rgb(230, 126, 34)',
            arrow: '7px solid rgb(255, 238, 217)',
            border: '1px solid transparent',
            text: '#111'
          };
          const teachingColors = {
            card: isCurrent ? 'rgb(114, 26, 38)' : 'rgb(255, 228, 232)',
            icon: isCurrent ? 'rgb(114, 26, 38)' : 'rgb(214, 74, 88)',
            arrow: isCurrent ? '7px solid rgb(114, 26, 38)' : '7px solid rgb(255, 228, 232)',
            border: isCurrent ? '1px solid rgba(114, 26, 38, 0.7)' : '1px solid transparent',
            text: isCurrent ? '#fff4f6' : '#111'
          };
          const educationColors = {
            card: isCurrent ? 'rgb(255, 105, 180)' : 'rgb(255, 226, 236)',
            icon: isCurrent ? 'rgb(255, 105, 180)' : 'rgb(255, 160, 200)',
            arrow: isCurrent ? '7px solid rgb(255, 105, 180)' : '7px solid rgb(255, 226, 236)',
            border: isCurrent ? '1px solid rgba(255, 105, 180, 0.8)' : '1px solid transparent',
            text: isCurrent ? '#ffffff' : '#111'
          };
          const selectedColors = isWork
            ? workColors
            : isResearch
              ? researchColors
              : isVolunteer
                ? volunteerColors
                : isTeaching
                  ? teachingColors
                  : educationColors;
          const contentBackground = isPrimary ? 'rgb(33, 150, 243)' : selectedColors.card;
          const contentBorder = isPrimary ? '1px solid transparent' : selectedColors.border;
          const contentColor = isPrimary ? '#0f0f0f' : selectedColors.text;
          const arrowColor = isPrimary ? '7px solid rgb(33, 150, 243)' : selectedColors.arrow;
          const iconBackground = isPrimary ? 'rgb(33, 150, 243)' : selectedColors.icon;
          const summaryPoints = Array.isArray(item.summaryPoints)
            ? item.summaryPoints
            : [item.summaryPoints];

          return (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              { background: contentBackground, color: contentColor, border: contentBorder }
            }
            contentArrowStyle={
              { borderRight: arrowColor }
            }
            date={item.dateRange}
            iconStyle={
              { background: iconBackground, color: '#fff' }
            }
            icon={
              item.timelineType === 'work'
                ? <WorkIcon />
                : isResearch
                  ? <ResearchIcon />
                  : isVolunteer
                    ? <VolunteerIcon />
                    : isTeaching
                      ? <TeachingIcon />
                      : <SchoolIcon />
            }
          >
            <div className="timeline-card">
              {item.timelineType === "work" || isVolunteer || isResearch || isTeaching ? (
                <>
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                </>
              ) : (
                <>
                  <h3 className="vertical-timeline-element-title">{item.name}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                </>
              )}
              <ul className="timeline-points">
                {summaryPoints.map((point, pointIndex) => (
                  <li key={pointIndex} className="timeline-point">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        )})}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
