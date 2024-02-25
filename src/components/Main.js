import { useState } from "react";
import Board from "./Board";
import Message from "./Message";
import Buttons from "./Buttons";
const scoreToReach = 20;
export default function Main() {
  const [image, setImage] = useState("./images/dice-0.png");
  const [playerActive, setPlayerActive] = useState(0);
  const [player1CurrScore, setPlayer1CurrScore] = useState(0);
  const [player2CurrScore, setPlayer2CurrScore] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(true);
  function handleDiceRoll() {
    const diceValue = Math.floor(Math.random() * 6 + 1);
    setImage(`./images/dice-${diceValue}.png`);
    if (diceValue === 1) {
      handlePlayerChange(diceValue);
    } else handleCurrScore(diceValue);
  }
  function handleCurrScore(diceVal) {
    if (playerActive === 0) {
      setPlayer1CurrScore((player1CurrScore) => player1CurrScore + diceVal);
    }
    if (playerActive === 1) {
      setPlayer2CurrScore((player2CurrScore) => player2CurrScore + diceVal);
    }
  }
  function handlePlayerChange(diceVal) {
    if (diceVal !== 1) {
      if (playerActive === 0) {
        setPlayer1Score((player1Score) => player1Score + player1CurrScore);
        setPlayer1CurrScore((player1CurrScore) => 0);
      }
      if (playerActive === 1) {
        setPlayer2Score((player2Score) => player2Score + player2CurrScore);
        setPlayer2CurrScore((player2CurrScore) => 0);
      }
    } else {
      setPlayer1CurrScore((player1CurrScore) => 0);
      setPlayer2CurrScore((player2CurrScore) => 0);
    }
    if (
      player1Score + player1CurrScore >= scoreToReach ||
      player2Score + player2CurrScore >= scoreToReach
    ) {
      setIsGameRunning((isGameRunning) => false);
    } else {
      setPlayerActive((playerActive) => (playerActive === 0 ? 1 : 0));
    }
  }
  return (
    <main>
      {!isGameRunning ? (
        <Message player={player1Score >= scoreToReach ? 1 : 2}>
          {player1Score >= scoreToReach
            ? "Player1 Wins the Game!!!"
            : "Player2 Wins the Game"}
        </Message>
      ) : (
        ""
      )}
      <Board
        image={image}
        player1CurrScore={player1CurrScore}
        player2CurrScore={player2CurrScore}
        playerActive={playerActive}
        player1Score={player1Score}
        player2Score={player2Score}
      />
      <Buttons
        onDiceRoll={handleDiceRoll}
        onSetPlayerChange={handlePlayerChange}
        isGameRunning={isGameRunning}
      />
    </main>
  );
}
