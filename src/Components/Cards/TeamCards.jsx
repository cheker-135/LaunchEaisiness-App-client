import React from "react";
import "./cards.css";
import ScrollAnimation from "react-animate-on-scroll";

const TeamCards = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Team Lead",
      image: require("../../Assest/images/team-2-1.png.png"),
    },
    {
      name: "Jane Smith",
      role: "Developer",
      image: require("../../Assest/images/team-2-2.png.png"),
    },
    {
      name: "Alice Johnson",
      role: "Designer",
      image: require("../../Assest/images/team-2-3.png.png"),
    },
  ];

  return (
    <ScrollAnimation className="team-cards-container" animateIn="fadeIn">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-card">
          <img src={member.image} alt={member.name} />
          <div className="gradient-overlay">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        </div>
      ))}
    </ScrollAnimation>
  );
};

export default TeamCards;
