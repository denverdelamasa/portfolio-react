import { useState, useEffect, useRef } from "react";
import { fetchGitHubContributions } from "../utils/githubApi";

// Single palette that works for both light and dark themes
const PALETTE = [
  "rgba(156, 163, 175, 0.15)", // Base — cool gray (slate-like)
  "rgba(129, 140, 248, 0.3)",  // Low — bluish-gray (cool)
  "rgba(107, 114, 128, 0.65)", // Medium — neutral gray
  "rgba(168, 162, 158, 0.85)", // High — warm gray (taupe-ish)
  "rgba(120, 113, 108, 1.0)",  // Peak — strong warm gray (almost brownish)
];


const ACTIVITY_LEVELS = [
  { threshold: 0, description: "No activity" },
  { threshold: 1, description: "Low activity" },
  { threshold: 5, description: "Medium activity" },
  { threshold: 10, description: "High activity" },
  { threshold: 20, description: "Peak activity" },
];

// Responsive dimensions
const SQUARE_SIZE = 14;
const GAP = 2;
const WEEK_WIDTH = SQUARE_SIZE + GAP;
const GRID_HEIGHT = (SQUARE_SIZE * 7) + (GAP * 6);
const MONTH_LABEL_HEIGHT = 20;

export default function GitHubStats() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const gridRef = useRef(null);

  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

  // Detect touch devices
  useEffect(() => {
    const checkTouchDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);

  // Handle clicks outside the grid to clear selection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (gridRef.current && !gridRef.current.contains(event.target)) {
        setSelectedDate(null);
        setHoverInfo(null);
      }
    };

    if (isTouchDevice && selectedDate) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isTouchDevice, selectedDate]);

  const getColor = (count) => {
    for (let i = ACTIVITY_LEVELS.length - 1; i >= 0; i--) {
      if (count >= ACTIVITY_LEVELS[i].threshold) {
        return PALETTE[i];
      }
    }
    return PALETTE[0];
  };

  useEffect(() => {
    const loadContributions = async () => {
      try {
        setLoading(true);
        setSelectedDate(null);
        setHoverInfo(null);
        
        const data = await fetchGitHubContributions("denverdelamasa", year);
        setContributions(data);
      } catch (error) {
        console.error("Failed to load GitHub contributions:", error);
        setContributions([]);
      } finally {
        setLoading(false);
      }
    };

    loadContributions();
  }, [year]);

  // Process contributions data
  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  // Calculate month positions
  const monthLabels = [];
  const monthPositions = [];
  
  let lastMonth = null;
  weeks.forEach((week, weekIndex) => {
    const firstDay = week[0]?.date;
    if (firstDay) {
      const date = new Date(firstDay);
      const month = date.getMonth();
      const monthName = date.toLocaleString("default", { month: "short" });
      
      if (month !== lastMonth) {
        monthLabels.push(monthName);
        monthPositions.push(weekIndex * WEEK_WIDTH);
        lastMonth = month;
      }
    }
  });

  const handleSquareClick = (day) => {
    if (loading) return;
    
    if (selectedDate === day.date) {
      // Deselect if same square is clicked
      setSelectedDate(null);
      setHoverInfo(null);
    } else {
      // Select new square
      setSelectedDate(day.date);
      setHoverInfo(
        `${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`
      );
    }
  };

  return (
    <div className="text-content px-2 mx-auto">
      <header className="flex justify-between items-center mb-4 md:mb-6 gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-content">
            GitHub Activity
          </h1>
          <p className="text-xs md:text-sm font-normal text-content/80 mt-1">
            A snapshot of my contributions and projects in <strong>{year}</strong>.
          </p>
        </div>
      </header>
      
      <div className="w-[85vw] lg:w-fit xl-w-auto p-2 md:p-6  shadow-md hover:shadow-xl transition-shadow duration-300 bg-base-100 border-2 border-accent">
        <div 
          ref={gridRef}
          className="relative overflow-auto" 
          style={{ minHeight: `${GRID_HEIGHT + MONTH_LABEL_HEIGHT + 24}px` }}
        >
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center bg-base-100/80 z-10 ">
              <span className="loading loading-spinner loading-md md:loading-lg text-primary"></span>
            </div>
          )}

          <div className="flex relative h-5 md:h-6 mb-1 ml-6 md:ml-7">
            {monthLabels.map((month, index) => (
              <div
                key={index}
                className="absolute text-[10px] md:text-xs text-content/80 whitespace-nowrap"
                style={{ left: `${monthPositions[index]}px` }}
              >
                {month}
              </div>
            ))}
          </div>

          <div className="flex">
            <div className="flex flex-col justify-between mr-1 md:mr-2 text-[10px] md:text-xs text-content/60">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div 
                  key={day} 
                  className="h-4 flex items-center justify-end pr-1"
                  style={{ height: `${SQUARE_SIZE}px` }}
                >
                  {day[0]}
                </div>
              ))}
            </div>

            <div className="flex">
              {weeks.map((week, weekIndex) => (
                <div 
                  key={weekIndex} 
                  className="flex flex-col"
                  style={{ gap: `${GAP}px`, marginRight: `${GAP}px` }}
                >
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`transition-all duration-150 cursor-pointer hover:scale-110 border border-base-200 ${
                        loading ? "opacity-50" : ""
                      } ${selectedDate === day.date ? 'ring-2 ring-primary ring-offset-1' : ''}`}
                      onClick={() => isTouchDevice && handleSquareClick(day)}
                      onMouseEnter={() => !isTouchDevice && handleSquareClick(day)}
                      onMouseLeave={() => !isTouchDevice && setHoverInfo(null)}
                      onFocus={() => !isTouchDevice && handleSquareClick(day)}
                      onBlur={() => !isTouchDevice && setHoverInfo(null)}
                      tabIndex={0}
                      style={{ 
                        backgroundColor: loading ? "var(--fallback-bc,oklch(var(--bc)/0.1))" : getColor(day.count),
                        width: `${SQUARE_SIZE}px`,
                        height: `${SQUARE_SIZE}px`,
                        opacity: day.count > 0 ? 0.9 + (day.count * 0.01) : 0.7
                      }}
                      aria-label={loading ? "Loading..." : `${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 w-full text-center">
          <p className="text-xs md:text-sm text-content/80 min-h-6">
            {loading 
              ? "Loading contribution data..." 
              : hoverInfo || 
                (isTouchDevice 
                  ? (selectedDate ? "Tap outside to clear selection" : "Tap on squares to view details")
                  : "Hover over squares to view contribution details")
            }
          </p>
        </div>

        <footer className="flex flex-col md:flex-row justify-between items-center mt-4 gap-3 text-xs">
          <div className="flex items-center gap-2 bg-base-200/50 px-2 py-1 ">
            <span className="text-content text-[10px] md:text-xs">Less</span>
            {[0, 1, 3, 5, 7].map((count) => (
              <div
                key={count}
                className="w-2.5 h-2.5 md:w-3 md:h-3 border border-base-300"
                style={{ 
                  backgroundColor: loading ? "var(--fallback-bc,oklch(var(--bc)/0.1))" : getColor(count),
                  opacity: count > 0 ? 0.9 + (count * 0.01) : 0.7
                }}
              />
            ))}
            <span className="text-content text-[10px] md:text-xs">More</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 justify-center mt-4">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => {
                  setYear(y);
                  setHoverInfo(null);
                  setSelectedDate(null);
                  setLoading(true);
                }}
                aria-pressed={y === year}
                className={`btn btn-xs md:btn-sm ${y === year ? "btn-primary" : "btn-ghost"}`}
                disabled={loading}
              >
                {y}
              </button>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}