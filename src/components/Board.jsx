import Square from "./square";
import styles from "./Board.module.css";
import { useState } from "react";
import Win from "./Win";

export default function Board() {
  const [xNext, setxNext] = useState(true);
  const [winner, setWinner] = useState(false);
  const [values, setValues] = useState(Array(9).fill(null));
  let again = "";
  function handleClick(i) {
    if (values[i] || winner) {
      return;
    }
    const nextValues = values.slice();
    if (xNext) {
      nextValues[i] = "X";
    } else {
      nextValues[i] = "O";
    }
    setValues(nextValues);
    setxNext(!xNext);
  }
  function resetGame() {
    setValues(Array(9).fill(null)); // Reset board
    setxNext(true); // Reset turn to X
    setWinner(false); // Reset winner
  }
  return (
    <>
      <Win values={values} xNext={xNext} setWinner={setWinner} />
      {winner && (
        <button className={styles.playAgainButton} onClick={resetGame}>
          Play Again
        </button>
      )}{" "}
      <div className={styles.board}>
        <div className={styles.row}>
          <Square value={values[0]} onClick={() => handleClick(0)} />
          <Square value={values[1]} onClick={() => handleClick(1)} />
          <Square value={values[2]} onClick={() => handleClick(2)} />
        </div>
        <div className={styles.row}>
          <Square value={values[3]} onClick={() => handleClick(3)} />
          <Square value={values[4]} onClick={() => handleClick(4)} />
          <Square value={values[5]} onClick={() => handleClick(5)} />
        </div>
        <div className={styles.row}>
          <Square value={values[6]} onClick={() => handleClick(6)} />
          <Square value={values[7]} onClick={() => handleClick(7)} />
          <Square value={values[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
