import React from 'react';
import './Recommendations.css';
import rzProfilePic from '../images/rz.png';
import abProfilePic from '../images/ab.png';
import osProfilePic from '../images/os.png';
import rsProfilePic from '../images/rs.png';

const recommendations = [
    {
    name: 'Roham Zendehdel Nobari',
    role: 'MSc in AI & Data Science | ETH Zurich & UZH | D-USYS ETH | ETH Analytics Club | ETH Robotics Club',
    date: 'December 10, 2025',
    avatar: rzProfilePic,
    paragraphs: [
      'I have had the pleasure of working closely with Mahbod on various endeavors, and I can confidently say he is one of the most diligent and honest individuals I have ever encountered professionally. Regardless of the task at hand, Mahbod consistently delivers high-quality work and demonstrates an astounding depth of knowledge.',
      'What sets Mahbod apart is his work ethic; in my professional career, I have rarely met anyone as dedicated. Beyond his technical skills, his social intelligence and ability to connect with others are admirable. Perhaps his most valuable trait is his ability to elevate those around him. He is the type of colleague who pushes you to achieve things you previously thought impossible, bringing out the absolute best in his team.',
      'I would recommend Mahbod to any company or research lab without hesitation. He possesses immense potential, and I am certain he will go on to achieve great things.'
    ]
  },
  {
    name: 'Oliver Stoll',
    role: 'Actuary (DAV, SAV), Financial Analyst (CIIA), Data Scientist (CFDS), MBA (Hons) ▸ Owner and Actuarial Consultant at ARCS GmbH Switzerland',
    date: 'December 5, 2025',
    avatar: osProfilePic,
    paragraphs: [
      'I had the pleasure of collaborating with Mahbod on my financial data science project at ETH Zurich. Mahbod’s technical skill was immediately evident in his ability to develop a robust and well-structured Python codebase for the project. His analyses were crucial and helped us make significant progress.',
      'Beyond his technical acumen, he was an exceptionally proactive, knowledgeable, and collaborative teammate who was a pleasure to work with. I can highly recommend Mahbod for any future data science or research role.'
    ]
  },
  {
    name: 'Aniel Bhulai',
    role: 'Senior Lecturer Computer Science (Artificial Intelligence domain)/Medical Natural Sciences & Programme Coordinator at Vrije Universiteit Amsterdam',
    date: 'June 27, 2025',
    avatar: abProfilePic,
    paragraphs: [
      'I had the pleasure of working with Mahbod over the course of two years for the Computational Thinking course for AI students, and for one year in the honours course Impact of Algorithms on Human Lives. In his role as a teaching assistant, Mahbod was responsible for grading students’ practical assignments, projects, and presentations. He actively guided students during practical sessions and was always available to answer their questions clearly and effectively.',
      'Beyond these responsibilities, Mahbod also contributed significantly to the development of course materials. He created exercises, projects, and quizzes for the Computational Thinking course, demonstrating both initiative and a deep understanding of the subject matter.',
      'What particularly stood out was Mahbod’s leadership. He took on the responsibility of managing and supervising the other teaching assistants, ensuring smooth collaboration and high-quality support for the students.',
      'I have come to know Mahbod as a friendly, intelligent, and reliable person with strong leadership qualities. He is someone you can always count on, and I’m confident he’ll bring the same level of dedication and excellence to any team he joins. It was a true pleasure to work with him!'
    ]
  },
  {
    name: 'Ryan Stepfner',
    role: 'Data Scientist',
    date: 'June 17, 2025',
    avatar: rsProfilePic,
    paragraphs: [
      'Mahbod interned as a Data Science intern at Forward Football, where I supervised his project: analysing ball win-back time and its relationship to in-game events.',
      'He demonstrated a strong ability to translate complex data into actionable insights and clearly communicate his findings to both technical and non-technical audiences. He’s analytical, driven, and passionate about football and data — I’m confident he’ll be a valuable asset to any data-focused team.'
    ]
  },

];

const Recommendations: React.FC = () => {
  return (
    <div className="recommendations-page">
      <div className="recommendations-list">
        {recommendations.map((rec) => (
          <div key={rec.name} className="recommendation-card">
            <div className="recommendation-header">
              <img src={rec.avatar} alt={rec.name} className="profile-pic" />
              <div className="recommendation-header-info">
                <h3>{rec.name}</h3>
                <p>{rec.role}</p>
                <p className="date">{rec.date}</p>
              </div>
            </div>
            <div className="recommendation-body">
              {rec.paragraphs.map((paragraph, index) => (
                <p key={`${rec.name}-p-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
