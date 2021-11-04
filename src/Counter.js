import React from "react";

function Counter({ title, timeframes, timeLength }) {
  const timeSize =
    timeLength === "daily" ? "Day" : timeLength === "weekly" ? "Week" : "Month";

  const titleClass = title.replace(/\s+/g, "-").toLowerCase();
  console.log(titleClass);

  return (
    <div className={`counter ${titleClass}-background`}>
      <div>
        <div className="header-counter">
          <div className="counter-title">{title}</div>
          <span className="material-icons">more_horiz</span>
        </div>
        <h2 className="counter-current">{timeframes.current}hrs</h2>
        <div className="counter-previous">
          Last {timeSize} - {timeframes.previous}hrs
        </div>
      </div>
    </div>
  );
}

export default Counter;
