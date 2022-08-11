import React from "react";
import "./ScoreButtons.css";

const RUNS_BUTTONS = [
  {
    buttonName: "0-run",
    value: 0,
  },
  {
    buttonName: "1-run",
    value: 1,
  },
  {
    buttonName: "2-run",
    value: 2,
  },
  {
    buttonName: "3-run",
    value: 3,
  },
  {
    buttonName: "4-run",
    value: 4,
  },
  {
    buttonName: "5-run",
    value: 5,
  },
  {
    buttonName: "6-run",
    value: 6,
  },
];

const EXTRA_BUTTONS = [
  {
    buttonName: "lb-btn",
    value: "LB",
  },
  {
    buttonName: "wd-btn",
    value: "WD",
  },
  {
    buttonName: "nb-btn",
    value: "NB",
  },
  {
    buttonName: "wicket-btn",
    value: "WKT",
  },
];

export const ScoreButtons = (props) => {
  return (
    <div>
      <div className="runs-buttons-wrapper">
        {RUNS_BUTTONS.map((btn) => {
          return (
            <button
              className="runs-button"
              onClick={() => {
                props.addScore(btn.value);
              }}
            >
              {btn.value}
            </button>
          );
        })}
      </div>

      <div className="extra-buttons-wrapper">
        {EXTRA_BUTTONS.map((extraBtn) => {
          return (
            <button className="extra-buttons" onClick={() => {}}>
              {extraBtn.value}
            </button>
          );
        })}
      </div>

      <div className="more-buttons-wrapper">
        <button
          className="more-buttons"
          onClick={() => {
            props.resetScore();
          }}
        >
          Reset
        </button>
        <button
          disabled={!props.undoAvailable}
          className="more-buttons"
          onClick={() => {
            if (props.undoAvailable) {
              props.undoRecentScore();
            }
          }}
        >
          Undo
        </button>
      </div>
    </div>
  );
};
