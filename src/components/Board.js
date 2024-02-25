import Player from "./Player";
import Dice from "./Dice";
export default function Board({
  image,
  player1CurrScore,
  playerActive,
  player2CurrScore,
  player1Score,
  player2Score,
}) {
  return (
    <div className="board">
      <Player
        player={1}
        playerName="Player 1"
        isActive={playerActive === 0}
        playerCurrScore={player1CurrScore}
        score={player1Score}
      />
      <Dice image={image} />
      <Player
        player={2}
        playerName="Player 2"
        isActive={playerActive === 1}
        playerCurrScore={player2CurrScore}
        score={player2Score}
      />
    </div>
  );
}
