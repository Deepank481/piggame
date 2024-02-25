export default function Player({
  player,
  playerName,
  isActive,
  playerCurrScore,
  score,
}) {
  return (
    <div className={`player-area player-${player} ${isActive ? "active" : ""}`}>
      <h2>{playerName}</h2>
      <p className="score">
        Current Score:
        <span id={`player-${player}-current`}>{playerCurrScore}</span>
      </p>
      <p className="score">
        Total Score: <span id={`player-${player}-total`}>{score}</span>
      </p>
    </div>
  );
}
