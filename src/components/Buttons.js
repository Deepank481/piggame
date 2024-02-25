export default function Buttons({
  onDiceRoll,
  onSetPlayerChange,
  isGameRunning,
}) {
  return (
    <div className="button-area">
      <button disabled={!isGameRunning} onClick={() => onDiceRoll()}>
        Roll Dice
      </button>
      <button disabled={!isGameRunning} onClick={() => onSetPlayerChange()}>
        Hold
      </button>
    </div>
  );
}
