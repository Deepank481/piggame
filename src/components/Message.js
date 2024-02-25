export default function Message({ player, children }) {
  return (
    <div className={`message-area active player-${player}-win `}>
      {children}
    </div>
  );
}
