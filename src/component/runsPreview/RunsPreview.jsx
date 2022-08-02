import React from "react";
import "./RunsPreview.css";

export const RunPreview = (props) => {
  return (
    <div>
      <div className="runs-preview">
        Total Runs : {props.totalRuns} -{" "}
        {props.isAllOut ? "All Out" : props.totalWickets}
      </div>

      <div className="both-batsmen-wrapper">
        <div className="batsman-wrapper">
          <div>K. Sanagkkara</div>
          <div>10(6)</div>
        </div>
        <div className="batsman-wrapper">
          <div>M. Jayawardena</div>
          <div>10(6)</div>
        </div>
      </div>
    </div>
  );
};
