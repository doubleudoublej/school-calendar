import React, { useState } from "react";

const clubs = [
  "EEE CLUB",
  "EEE LEAD",
  "EEE OUTREACH",
  "Garage@EEE",
  "dEEEvelopers",
  "MLDA@EEE",
  "Marvel Club@EEE",
  "NTU Clean energy club",
  "VI Pod",
].sort((a, b) => a.localeCompare(b));

const daysShort = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const matrix = [];
  let day = 1 - firstDay;
  for (let week = 0; week < 6; week++) {
    const row = [];
    for (let d = 0; d < 7; d++) {
      if (day > 0 && day <= daysInMonth) {
        row.push(day);
      } else {
        row.push("");
      }
      day++;
    }
    matrix.push(row);
  }
  return matrix;
}

const Sidebar = () => {
  const [selectedClubs, setSelectedClubs] = useState(clubs);
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const handleClubToggle = (club) => {
    setSelectedClubs((prev) =>
      prev.includes(club) ? prev.filter((c) => c !== club) : [...prev, club]
    );
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };
  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const monthMatrix = getMonthMatrix(year, month);
  const isToday = (d) =>
    d === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  return (
    <aside className="sidebar">
      <div className="mini-calendar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <button
            onClick={handlePrevMonth}
            style={{
              background: "#232326",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "2px 8px",
              cursor: "pointer",
            }}
          >
            {"<"}
          </button>
          <strong>
            {new Date(year, month).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </strong>
          <button
            onClick={handleNextMonth}
            style={{
              background: "#232326",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "2px 8px",
              cursor: "pointer",
            }}
          >
            {">"}
          </button>
        </div>
        <table
          style={{ width: "100%", textAlign: "center", fontSize: "0.95rem" }}
        >
          <thead>
            <tr style={{ color: "#a5b4fc" }}>
              {daysShort.map((d) => (
                <th key={d}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {monthMatrix.map((week, wIdx) => (
              <tr key={wIdx}>
                {week.map((d, dIdx) => (
                  <td
                    key={dIdx}
                    style={{
                      background: isToday(d)
                        ? "#f43f5e" // red highlight for today
                        : "inherit",
                      color: isToday(d) ? "#fff" : d ? "#fafafa" : "#444",
                      borderRadius: isToday(d) ? "50%" : undefined,
                      fontWeight: isToday(d) ? 700 : 500,
                      padding: "4px 0",
                      transition: "background 0.2s",
                    }}
                  >
                    {d || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="filters">
        <strong>Club Filters</strong>
        {clubs.map((club, idx) => (
          <div key={club}>
            <input
              type="checkbox"
              id={`club-${idx}`}
              checked={selectedClubs.includes(club)}
              onChange={() => handleClubToggle(club)}
            />{" "}
            <label htmlFor={`club-${idx}`}>{club}</label>
          </div>
        ))}
      </div>
      <div>
        <div className="shortcut">+ Add Event</div>
        <div className="shortcut">Settings</div>
      </div>
    </aside>
  );
};

export default Sidebar;
