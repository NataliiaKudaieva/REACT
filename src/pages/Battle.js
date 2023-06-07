import { useState } from "react";
import PlayerInput from "../components/PlayerInput";

const Battle = () => {
  const [PlayerOneName] = useState("");
  const [PlayerTwoName] = useState("");
  const handleSubmit = (id, userName) => {
    console.log(id, userName);
  };
  return (
    <div className="row">
      <PlayerInput id="PlayerOne" label="Player 1" onSubmit={handleSubmit} />
      <PlayerInput id="PlayerTwo" label="Player 2" onSubmit={handleSubmit} />
    </div>
  );
};

export default Battle;
