import React from "react";
import "./ScoreButtons.css";

export const ScoreButtons = (props) => {
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          props.addScore(0);
        }}
      >
        0
      </button>
      <button
        className="button"
        onClick={() => {
          props.addScore(1);
        }}
      >
        1
      </button>
      <button
        className="button"
        onClick={() => {
          props.addScore(2);
        }}
      >
        2
      </button>
      <button
        className="button"
        onClick={() => {
          props.addScore(3);
        }}
      >
        3
      </button>
      <button
        className="button"
        onClick={() => {
          props.addScore(4);
        }}
      >
        4
      </button>
      <button
        className="button"
        onClick={() => {
          props.addScore(5);
        }}
      >
        5
      </button>
      <button
        className="button"
        onClick={() => {
          props.addScore(6);
        }}
      >
        6
      </button>
      <button
        className="button"
        onClick={() => {
          props.addScore(6);
        }}
      >
        Byes
      </button>
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
