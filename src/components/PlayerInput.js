import { useState } from "react";

const PlayerInput = ({ label }) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit(userName, label);
  };
  return (
    <form className="column" onSubmit={handleSubmit}>
      <label className="header" htmlFor={label}>
        {label}
        <input
          id={label}
          type="text"
          placeholder="GitHub username"
          value={userName}
          onChange={(e) => setUserName(() => e.target.name)}
        ></input>
      </label>
      <button className="" type="submit" disabled={!userName.length}>
        Submit
      </button>
    </form>
  );
};

export default PlayerInput;
