import { useState } from "react";
export default function ScoreKeeper({ numPlayers = 2, target = 5 }) {
  const [scores, setScores] = useState(Array(numPlayers).fill(0));
  let playerNum = 1;
  const incrementScore = (idx) => {
    setScores((oldScores) => {
      return oldScores.map((s, oldIdx) => {
        if (oldIdx === idx) return s + 1;
        else return s;
      });
    });
  };
  const resetScore = () => {
    setScores(Array(numPlayers).fill(0))
  };
  return (
    <div>
      <ul>
        {scores.map((s, idx) => {
          return <li>
            Player {idx + 1}:{s}
            {s >= target && <span>Winner!</span>}
            <button onClick={() => incrementScore(idx)}>+1</button>
          </li>
        })}
      </ul>
      <button onClick={resetScore}>Reset</button>
    </div>
  );
}
