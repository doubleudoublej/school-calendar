import React from "react";
// ...existing code...

const clubs = [
  {
    name: "EEE CLUB",
    desc: "The main club for EEE students.",
    img: "⚡",
    tag: { text: "Student Life", color: "#6366f1" },
  },
  {
    name: "EEE LEAD",
    desc: "Leadership and development opportunities.",
    img: "🧑‍💼",
    tag: { text: "Leadership", color: "#f59e42" },
  },
  {
    name: "EEE OUTREACH",
    desc: "Community service and outreach programs.",
    img: "🤝",
    tag: { text: "Service", color: "#22d3ee" },
  },
  {
    name: "Garage@EEE",
    desc: "Innovation and entrepreneurship hub.",
    img: "🚗",
    tag: { text: "Innovation", color: "#f43f5e" },
  },
  {
    name: "dEEEvelopers",
    desc: "Software and hardware development club.",
    img: "💻",
    tag: { text: "Tech", color: "#10b981" },
  },
  {
    name: "MLDA@EEE",
    desc: "Machine Learning & Data Analytics.",
    img: "📊",
    tag: { text: "Data Science", color: "#eab308" },
  },
  {
    name: "Marvel Club@EEE",
    desc: "Pop culture and Marvel enthusiasts.",
    img: "🦸",
    tag: { text: "Pop Culture", color: "#a21caf" },
  },
  {
    name: "NTU Clean energy club",
    desc: "Promoting clean energy initiatives.",
    img: "🌱",
    tag: { text: "Sustainability", color: "#16a34a" },
  },
  {
    name: "VI Pod",
    desc: "Virtual Innovation Pod.",
    img: "🛰️",
    tag: { text: "Innovation", color: "#f43f5e" },
  },
];

const Clubs = () => {
  const handleClick = (clubName) => {
    window.alert(`You clicked on ${clubName}`);
  };
  return (
    <div
      className="clubs-page"
      style={{
        background: "#18181b", // unified dark shade
        minHeight: "100vh",
        padding: "2rem 0",
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "1200px",
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
        School Clubs
      </h2>
      <div
        className="club-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          justifyItems: "center",
          alignItems: "stretch",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {clubs.map((club, idx) => (
          <div
            key={idx}
            className="club-card"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              background: "#232326",
              boxShadow: "0 2px 16px #0006",
              padding: "2rem 1.2rem 1.2rem 1.2rem",
              transition: "transform 0.15s",
              border: "2px solid #232326",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "260px",
              maxWidth: "340px",
              width: "100%",
              boxSizing: "border-box",
            }}
            onClick={() => handleClick(club.name)}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.04)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              className="club-image"
              style={{
                fontSize: "2.8rem",
                marginBottom: "1rem",
                background: "#18181b",
                borderRadius: "50%",
                width: "64px",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px #0004",
              }}
            >
              {club.img}
            </div>
            <strong
              style={{
                fontSize: "1.2rem",
                marginBottom: "0.5rem",
                color: "#fff",
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              {club.name}
            </strong>
            <div
              style={{
                marginBottom: "0.7rem",
                color: "#b3b3b9",
                textAlign: "center",
                fontSize: "1rem",
              }}
            >
              {club.desc}
            </div>
            <span
              className="club-tag"
              style={{
                background: club.tag.color,
                color: "#fff",
                borderRadius: "999px",
                padding: "4px 16px",
                fontSize: "0.9rem",
                fontWeight: 600,
                marginTop: "0.5rem",
                boxShadow: "0 1px 6px #0002",
                letterSpacing: "0.02em",
              }}
            >
              {club.tag.text}
            </span>
          </div>
        ))}
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1440px) {
          .clubs-page {
            max-width: 100% !important;
            margin: 0 !important;
          }
          .club-grid {
            max-width: 100% !important;
            margin: 0 !important;
          }
        }
        @media (max-width: 900px) {
          .clubs-page {
            width: 100% !important;
            max-width: 100% !important;
            padding: 1.2rem 0.5rem !important;
          }
          .club-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.2rem !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .club-card {
            min-height: 200px !important;
            max-width: 98vw !important;
            width: 100% !important;
            padding: 1.2rem 0.7rem 0.7rem 0.7rem !important;
            box-sizing: border-box !important;
          }
          .club-image {
            font-size: 2rem !important;
            width: 44px !important;
            height: 44px !important;
          }
        }
        @media (max-width: 600px) {
          .clubs-page {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0.7rem 0.1rem !important;
          }
          .club-grid {
            grid-template-columns: 1fr !important;
            gap: 0.7rem !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .club-card {
            min-height: 140px !important;
            max-width: 99vw !important;
            width: 100% !important;
            padding: 0.7rem 0.2rem 0.2rem 0.2rem !important;
            box-sizing: border-box !important;
          }
          .club-image {
            font-size: 1.2rem !important;
            width: 32px !important;
            height: 32px !important;
          }
          h2 {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Clubs;
