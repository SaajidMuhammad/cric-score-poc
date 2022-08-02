import React, { useEffect, useState } from "react";
import "./App.css";

import { RunPreview } from "./component/runsPreview/RunsPreview";
import { ScoreButtons } from "./component/scoreButtons/ScoreButtons";

function App() {
  const [totalRuns, setTotalRuns] = useState(0);
  const [totalWickets, setTotalWickets] = useState(0);
  const [isAllOut, setIsAllOut] = useState(false);
  const [lastAdded, setLastAdded] = useState(0);

  const addScore = (score) => {
    if (isAllOut) {
    } else {
      setTotalRuns(totalRuns + score);
      setLastAdded(score);
    }
  };

  const addWicket = () => {
    if (totalWickets === 9) {
      setIsAllOut(true);
    } else {
      setTotalWickets(totalWickets + 1);
    }
  };

  const resetScore = () => {
    setTotalRuns(0);
    setIsAllOut(false);
    setTotalWickets(0);
  };

  const undoRecentScore = () => {
    setTotalRuns(totalRuns - lastAdded);
  };

  return (
    <div className="App">
      <RunPreview
        totalRuns={totalRuns}
        totalWickets={totalWickets}
        isAllOut={isAllOut}
      />
      <ScoreButtons
        addScore={addScore}
        resetScore={resetScore}
        undoRecentScore={undoRecentScore}
        addWicket={addWicket}
      />
    </div>
  );
}

export default App;
