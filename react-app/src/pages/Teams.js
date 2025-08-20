import React, { useState } from "react";

const teams = [
  {
    name: "Robotics Team",
    img: "🤖",
    desc: "Build and program robots for competitions and research.",
    details:
      "We work on mechanical, electrical, and software engineering for robotics. Members get hands-on experience and mentorship.",
    lookingFor:
      "Mechanical, electrical, and software engineers. Enthusiastic learners welcome!",
  },
  {
    name: "Basketball Team",
    img: "🏀",
    desc: "Competitive basketball team for school tournaments.",
    details:
      "Regular training sessions and matches. Teamwork and sportsmanship are our core values.",
    lookingFor:
      "Players with experience, team spirit, and commitment to practice.",
  },
  {
    name: "EEE Events Team",
    img: "🎉",
    desc: "Organize and run school events and activities.",
    details:
      "From planning to execution, we handle logistics, marketing, and on-the-day operations for all major EEE events.",
    lookingFor:
      "Organizers, designers, and people who love working behind the scenes.",
  },
  {
    name: "Clean Energy Team",
    img: "🌱",
    desc: "Promote sustainability and clean energy projects.",
    details:
      "We run campaigns, workshops, and projects to raise awareness and implement green solutions.",
    lookingFor:
      "Passionate advocates, project managers, and technical leads for green initiatives.",
  },
  {
    name: "Software Development Team",
    img: "💻",
    desc: "Develop apps and tools for the school community.",
    details:
      "We build web and mobile apps, automate tasks, and support digital transformation in EEE.",
    lookingFor:
      "Frontend, backend, and mobile developers. All skill levels welcome!",
  },
];

const Teams = () => {
  const [expanded, setExpanded] = useState(null);
  const handleExpand = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };
  return (
    <div
      className="teams-page"
      style={{
        background: "#18181b",
        padding: "2rem 1rem", // add horizontal padding
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        overflowX: "hidden",
      }}
    >
      <h2
        style={{
          color: "#fff",
          marginBottom: "2rem",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: 700,
        }}
      >
        School Teams
      </h2>
      <div
        className="team-list"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {teams.map((team, idx) => (
          <div
            key={idx}
            className="team-card"
            style={{
              borderRadius: "10px",
              background: "#232326",
              boxShadow: "0 2px 16px #0006",
              padding: "1.5rem 1.2rem 1.2rem 1.2rem",
              transition: "box-shadow 0.15s",
              border: "2px solid #232326",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              boxSizing: "border-box",
              cursor: "pointer",
              margin: "0 auto 0.5rem auto", // add bottom margin and center
            }}
            onClick={() => handleExpand(idx)}
          >
            <div
              className="team-header"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <span
                className="team-image"
                style={{
                  fontSize: "2rem",
                  background: "#18181b",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px #0004",
                }}
              >
                {team.img}
              </span>
              <strong
                style={{
                  fontSize: "1.2rem",
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                {team.name}
              </strong>
            </div>
            <div
              style={{
                marginTop: "0.5rem",
                color: "#b3b3b9",
                fontSize: "1rem",
              }}
            >
              {team.desc}
            </div>
            {expanded === idx && (
              <div
                className="team-details"
                style={{
                  marginTop: "1rem",
                  color: "#e5e5e5",
                  fontSize: "1rem",
                  borderTop: "1px solid #333",
                  paddingTop: "1rem",
                  width: "100%",
                }}
              >
                <div style={{ marginBottom: "0.7rem" }}>{team.details}</div>
                <div
                  style={{
                    marginBottom: "0.7rem",
                    color: "#f59e42",
                    fontWeight: 600,
                  }}
                >
                  What we're looking for: {team.lookingFor}
                </div>
                <button
                  style={{
                    marginTop: "1rem",
                    background: "#6366f1",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "0.7rem 1.5rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 1px 6px #0002",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.alert(`Applied to ${team.name}`);
                  }}
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .teams-page {
            max-width: 100% !important;
            padding: 1.2rem 0.5rem !important;
          }
          .team-list {
            max-width: 100% !important;
            gap: 1rem !important;
          }
          .team-card {
            padding: 1rem 0.7rem 0.7rem 0.7rem !important;
          }
          .team-image {
            font-size: 1.5rem !important;
            width: 32px !important;
            height: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .teams-page {
            max-width: 100% !important;
            padding: 0.7rem 0.1rem !important;
          }
          .team-list {
            max-width: 100% !important;
            gap: 0.7rem !important;
          }
          .team-card {
            padding: 0.7rem 0.2rem 0.2rem 0.2rem !important;
          }
          .team-image {
            font-size: 1.1rem !important;
            width: 24px !important;
            height: 24px !important;
          }
          h2 {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Teams;
