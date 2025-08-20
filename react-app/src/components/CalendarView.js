import React from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const hours = Array.from({ length: 24 }, (_, i) => {
  const period = i < 12 ? "AM" : "PM";
  const hour = i % 12 === 0 ? 12 : i % 12;
  return `${hour} ${period}`;
});

function getWeekDates(date = new Date()) {
  const sunday = new Date(date);
  sunday.setDate(date.getDate() - date.getDay());
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(sunday);
    d.setDate(sunday.getDate() + i);
    return d;
  });
}

function formatMonthYear(date) {
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

const CalendarView = () => {
  const [view, setView] = React.useState("week");
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const handlePrev = () => {
    if (view === "day") {
      setCurrentDate(
        (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1)
      );
    } else if (view === "week") {
      setCurrentDate(
        (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate() - 7)
      );
    } else if (view === "month") {
      setCurrentDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
    }
  };
  const handleNext = () => {
    if (view === "day") {
      setCurrentDate(
        (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)
      );
    } else if (view === "week") {
      setCurrentDate(
        (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7)
      );
    } else if (view === "month") {
      setCurrentDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
    }
  };
  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const weekDates = getWeekDates(currentDate);

  let headerLabel = "";
  if (view === "week") {
    const start = weekDates[0];
    const end = weekDates[6];
    headerLabel = `Week of ${start.toLocaleString("default", {
      month: "short",
    })} ${start.getDate()}–${end.getDate()}, ${start.getFullYear()}`;
  } else if (view === "day") {
    headerLabel = `${
      days[currentDate.getDay()]
    } ${currentDate.getDate()} ${currentDate.toLocaleString("default", {
      month: "short",
    })} ${currentDate.getFullYear()}`;
  } else if (view === "month") {
    headerLabel = formatMonthYear(currentDate);
  }

  return (
    <div className="calendar-view">
      <div
        className="calendar-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 0 12px 0",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "1.1rem" }}>
          {headerLabel}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => setView("day")}
            style={{
              background: view === "day" ? "#35353f" : "#18181b",
              color: "#fafafa",
              border: "1px solid #35353f",
              borderRadius: "6px",
              padding: "6px 16px",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Day
          </button>
          <button
            onClick={() => setView("week")}
            style={{
              background: view === "week" ? "#35353f" : "#18181b",
              color: "#fafafa",
              border: "1px solid #35353f",
              borderRadius: "6px",
              padding: "6px 16px",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Week
          </button>
          <button
            onClick={() => setView("month")}
            style={{
              background: view === "month" ? "#35353f" : "#18181b",
              color: "#fafafa",
              border: "1px solid #35353f",
              borderRadius: "6px",
              padding: "6px 16px",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Month
          </button>
          <button
            onClick={handleToday}
            style={{
              background: "#18181b",
              color: "#fafafa",
              border: "1px solid #35353f",
              borderRadius: "6px",
              padding: "6px 18px",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Today
          </button>
          <button
            onClick={handlePrev}
            style={{
              background: "#18181b",
              color: "#fafafa",
              border: "1px solid #35353f",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "1.3em",
              cursor: "pointer",
            }}
            aria-label="Previous"
          >
            &#x2039;
          </button>
          <button
            onClick={handleNext}
            style={{
              background: "#18181b",
              color: "#fafafa",
              border: "1px solid #35353f",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "1.3em",
              cursor: "pointer",
            }}
            aria-label="Next"
          >
            &#x203A;
          </button>
        </div>
      </div>
      {view === "week" && (
        <div
          className="calendar-grid"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "80px repeat(7, 1fr)",
            gridTemplateRows: "40px 40px repeat(24, 56px)",
            background: "#18181b",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 2px 16px #0004",
          }}
        >
          <div
            style={{ gridColumn: 1, gridRow: 1, background: "#18181b" }}
          ></div>
          {days.map((day, i) => (
            <div
              key={day}
              className="calendar-day"
              style={{
                gridColumn: i + 2,
                gridRow: 1,
                background: "#18181b",
                color: "#fafafa",
                fontWeight: 600,
                textAlign: "center",
                borderRight: "1px solid #222",
                borderBottom: "1px solid #222",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <span>{day}</span>
              <span
                style={{
                  fontSize: "0.95rem",
                  color: "#b3b3b9",
                  marginLeft: "4px",
                  fontWeight: 500,
                }}
              >
                {weekDates[i].getDate()}
              </span>
            </div>
          ))}
          <div
            style={{
              gridColumn: 1,
              gridRow: 2,
              color: "#aaa",
              fontWeight: 500,
              padding: "8px 0",
              borderBottom: "1px solid #222",
              background: "#18181b",
            }}
          ></div>
          {days.map((day, i) => (
            <div
              key={day + "-allday"}
              style={{
                gridColumn: i + 2,
                gridRow: 2,
                borderRight: "1px solid #222",
                borderBottom: "1px solid #222",
                background: "#18181b",
                minHeight: "40px",
              }}
            ></div>
          ))}
          {hours.map((time, i) => (
            <div
              key={time}
              className="calendar-time"
              style={{
                gridColumn: 1,
                gridRow: i + 3,
                color: "#a5b4fc",
                fontSize: "0.95rem",
                borderBottom: "1px solid #222",
                position: "relative",
                background: "#18181b",
              }}
            >
              {time}
            </div>
          ))}
          {Array.from({ length: 7 * 24 }, (_, idx) => {
            const day = idx % 7;
            const hour = Math.floor(idx / 7);
            return (
              <div
                key={`block-${day}-${hour}`}
                style={{
                  gridColumn: day + 2,
                  gridRow: hour + 3,
                  borderRight: "1px solid #222",
                  borderBottom: "1px solid #222",
                  background: "#18181b",
                  minHeight: "32px",
                }}
              ></div>
            );
          })}
          <CurrentTimeBar />
        </div>
      )}
      {view === "day" && (
        <div
          className="calendar-grid"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "80px 1fr",
            gridTemplateRows: "40px 40px repeat(24, 56px)",
            background: "#18181b",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 2px 16px #0004",
          }}
        >
          <div
            style={{
              gridColumn: 2,
              gridRow: 1,
              background: "#18181b",
              color: "#fafafa",
              fontWeight: 600,
              textAlign: "center",
              borderRight: "1px solid #222",
              borderBottom: "1px solid #222",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <span>{days[currentDate.getDay()]}</span>
            <span
              style={{
                fontSize: "0.95rem",
                color: "#b3b3b9",
                marginLeft: "4px",
                fontWeight: 500,
              }}
            >
              {currentDate.getDate()}
            </span>
          </div>
          <div
            style={{
              gridColumn: 2,
              gridRow: 2,
              borderRight: "1px solid #222",
              borderBottom: "1px solid #222",
              background: "#18181b",
              minHeight: "40px",
            }}
          ></div>
          {hours.map((time, i) => (
            <div
              key={time}
              className="calendar-time"
              style={{
                gridColumn: 1,
                gridRow: i + 3,
                color: "#a5b4fc",
                fontSize: "0.95rem",
                borderBottom: "1px solid #222",
                position: "relative",
                background: "#18181b",
              }}
            >
              {time}
            </div>
          ))}
          {Array.from({ length: 24 }, (_, hour) => (
            <div
              key={`block-${hour}`}
              style={{
                gridColumn: 2,
                gridRow: hour + 3,
                borderRight: "1px solid #222",
                borderBottom: "1px solid #222",
                background: "#18181b",
                minHeight: "32px",
              }}
            ></div>
          ))}
          <CurrentTimeBar dayView={true} currentDate={currentDate} />
        </div>
      )}
      {view === "month" && (
        <div
          className="calendar-month-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gridTemplateRows: "40px repeat(6, 1fr)",
            gap: "2px",
            background: "#18181b",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 2px 16px #0004",
            minHeight: "480px",
          }}
        >
          {days.map((day, i) => (
            <div
              key={day + "-month-header"}
              style={{
                background: "#222",
                color: "#fafafa",
                fontWeight: 600,
                textAlign: "center",
                padding: "8px 0",
                borderBottom: "1px solid #222",
              }}
            >
              {day}
            </div>
          ))}
          {(() => {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const firstDay = new Date(year, month, 1);
            const startDay = firstDay.getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const grid = [];
            let dayNum = 1;
            for (let row = 0; row < 6; row++) {
              for (let col = 0; col < 7; col++) {
                if ((row === 0 && col < startDay) || dayNum > daysInMonth) {
                  grid.push(null);
                } else {
                  grid.push(new Date(year, month, dayNum));
                  dayNum++;
                }
              }
            }
            return grid.map((date, idx) => {
              const isToday =
                date && date.toDateString() === new Date().toDateString();
              return (
                <div
                  key={idx}
                  style={{
                    background: date
                      ? isToday
                        ? "#f43f5e22"
                        : "#222"
                      : "#18181b",
                    color: date ? "#fafafa" : "#444",
                    border: isToday ? "2px solid #f43f5e" : "1px solid #222",
                    borderRadius: "8px",
                    minHeight: "64px",
                    padding: "6px 8px",
                    position: "relative",
                    fontWeight: isToday ? 700 : 500,
                    boxShadow: isToday ? "0 0 8px #f43f5e44" : "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  {date && (
                    <span style={{ fontSize: "1rem", fontWeight: 600 }}>
                      {date.getDate()}
                    </span>
                  )}
                </div>
              );
            });
          })()}
        </div>
      )}
    </div>
  );
};

function CurrentTimeBar({ dayView, currentDate }) {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);
  const hour = now.getHours();
  const minute = now.getMinutes();
  const row = hour + minute / 60;
  const topPx = 40 + 40 + row * 56;
  const period = hour < 12 ? "AM" : "PM";
  const hourLabel = hour % 12 === 0 ? 12 : hour % 12;
  const timeLabel = `${hourLabel}:${minute
    .toString()
    .padStart(2, "0")} ${period}`;

  if (dayView) {
    if (currentDate && now.toDateString() !== currentDate.toDateString())
      return null;
    return (
      <>
        <div
          style={{
            position: "absolute",
            left: 80 + (window.innerWidth - 80) / 2 - 32,
            top: topPx - 22,
            background: "#f43f5e",
            color: "#fff",
            fontSize: "0.85rem",
            padding: "2px 10px",
            borderRadius: "6px",
            fontWeight: 600,
            zIndex: 22,
            boxShadow: "0 2px 8px #f43f5e44",
            pointerEvents: "none",
            opacity: 0.95,
            whiteSpace: "nowrap",
          }}
        >
          {timeLabel}
        </div>
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 0,
            top: topPx,
            height: "3px",
            background: "#f43f5e",
            borderRadius: "2px",
            zIndex: 20,
            boxShadow: "0 0 12px #f43f5e88",
            pointerEvents: "none",
          }}
        />
      </>
    );
  } else {
    // Week view
    const grid = document.querySelector(".calendar-grid");
    let leftOffset = 80;
    let dayColWidth = 0;
    if (grid) {
      const gridWidth = grid.offsetWidth;
      dayColWidth = (gridWidth - leftOffset) / 7;
    } else {
      dayColWidth = (window.innerWidth - leftOffset) / 7;
    }
    const day = now.getDay();
    return (
      <>
        <div
          style={{
            position: "absolute",
            left: leftOffset + day * dayColWidth + dayColWidth / 2 - 32,
            top: topPx - 22,
            background: "#f43f5e",
            color: "#fff",
            fontSize: "0.85rem",
            padding: "2px 10px",
            borderRadius: "6px",
            fontWeight: 600,
            zIndex: 22,
            boxShadow: "0 2px 8px #f43f5e44",
            pointerEvents: "none",
            opacity: 0.95,
            whiteSpace: "nowrap",
          }}
        >
          {timeLabel}
        </div>
        <div
          style={{
            position: "absolute",
            left: leftOffset + day * dayColWidth,
            top: topPx,
            width: dayColWidth,
            height: "3px",
            background: "#f43f5e",
            borderRadius: "2px",
            zIndex: 20,
            boxShadow: "0 0 12px #f43f5e88",
            pointerEvents: "none",
          }}
        />
      </>
    );
  }
}

export default CalendarView;
