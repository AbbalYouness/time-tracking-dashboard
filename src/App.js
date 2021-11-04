import { useEffect, useState } from "react";
import imageJeremy from "./assets/image-jeremy.png";
import Counter from "./Counter";
import data from "./data.json";

function App() {
  const [timeFrames, setTimeFrames] = useState("weekly");
  const [dataTimes, setDataTimes] = useState([]);

  useEffect(() => {
    setDataTimes(
      data.map((timePerCard) => ({
        ...timePerCard,
        timeframes: timePerCard.timeframes[timeFrames],
      }))
    );
  }, [timeFrames]);

  return (
    <div className="container">
      <div className="data-container">
        <div className="person-card">
          <div className="header-person-card">
            <img src={imageJeremy} alt="jeremy" />
            <div>
              <em>Report for</em>
              <h1>Jeremy Robson</h1>
            </div>
          </div>
          <div className="time-selector">
            <p
              onClick={() => {
                setTimeFrames("daily");
              }}
              className={timeFrames === "daily" ? "active" : ""}
            >
              Daily
            </p>
            <p
              onClick={() => {
                setTimeFrames("weekly");
              }}
              className={timeFrames === "weekly" ? "active" : ""}
            >
              Weekly
            </p>
            <p
              onClick={() => {
                setTimeFrames("monthly");
              }}
              className={timeFrames === "monthly" ? "active" : ""}
            >
              Monthly
            </p>
          </div>
        </div>
        <div className="counters">
          {dataTimes.map((dataTime, index) => {
            return (
              <Counter key={index} {...dataTime} timeLength={timeFrames} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
