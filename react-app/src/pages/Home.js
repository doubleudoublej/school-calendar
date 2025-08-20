import React from "react";
import CalendarView from "../components/CalendarView";
import Sidebar from "../components/Sidebar";
import UpcomingEvents from "../components/UpcomingEvents";
// ...existing code...

const Home = () => (
  <div className="home-page" style={{ display: "flex", width: "100%" }}>
    <Sidebar />
    <div
      className="main-calendar"
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        position: "relative",
      }}
    >
      <CalendarView />
    </div>
    <div
      style={{
        width: "320px",
        minWidth: "260px",
        background: "#18181b",
        borderLeft: "1px solid #222",
        padding: "1.5rem 1rem",
        boxShadow: "-2px 0 8px #0002",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <UpcomingEvents />
    </div>
  </div>
);

export default Home;
