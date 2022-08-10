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



// Score Button start
export const ScoreButtons = (props) => {
  return (
    <div>
      {RUNS_BUTTONS.map((btn) => {
        return (
          <button
            className="button"
            onClick={() => {
              props.addScore(btn.value);
            }}
          >
            {btn.value}
          </button>
        );
      })}

      {/* Extras & byes */}

      <button
        className="button"
        onClick={() => {
          props.addScore(6);
        }}
      >
        LB
      </button>
      <button
        className="button"
        onClick={() => {
          props.addScore(6);
        }}
      >
        Wide
      </button>
      <button
        className="button"
        onClick={() => {
          props.addScore(6);
        }}
      >
        NB
      </button>
      <button
        className="button reset"
        onClick={() => {
          props.addWicket();
        }}
      >
        Wicket
      </button>

      <br />
      <br />

      <button
        className="button reset"
        onClick={() => {
          props.resetScore();
        }}
      >
        Reset
      </button>
      <button
        className="button reset"
        onClick={() => {
          props.undoRecentScore();
        }}
      >
        Undo
      </button>
    </div>
  );
};
