import React from 'react';
import '../Style/Services.css'; // Importing global CSS
import { FaLightbulb, FaPaintBrush, FaMobileAlt, FaCode } from 'react-icons/fa'; // React Icons

const ExpertiseSection = () => {
  const expertiseData = [
    {
      icon: <FaLightbulb />,
      title: 'Strategy & Direction',
      description: 'Crafting effective strategies to achieve your business goals with clear direction and actionable insights.',
    },
    {
      icon: <FaPaintBrush />,
      title: 'Branding & Logo',
      description: 'Building memorable brand identities and designing logos that resonate with your target audience.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'UI & UX Design',
      description: 'Creating intuitive and engaging user interfaces that enhance the overall user experience.',
    },
    {
      icon: <FaCode />,
      title: 'Webflow Development',
      description: 'Developing responsive and visually stunning websites using Webflow’s powerful tools.',
    },
  ];

  return (
    <section className="expertiseSection">
      <h3 className="sectionSubtitle">My Skills</h3>
      <h2 className="sectionTitle">My Expertise</h2>
      <div className="cardsContainer">
        {expertiseData.map((item, index) => (
          <div key={index} className="expertiseCard">
            <div className="cardIcon">{item.icon}</div>
            <h4 className="cardTitle">{item.title}</h4>
            <p className="cardDescription">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
