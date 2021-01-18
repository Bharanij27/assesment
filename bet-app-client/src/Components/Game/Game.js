import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Game.css";
import ResultConatiner from "./ResultContainer/ResultContainer";

const Game = () => {
  const players = JSON.parse(localStorage.getItem("players")) || [];
  const history = useHistory();
  const bet = localStorage.getItem("placeBet");

  useEffect(() => {
    console.log(players, bet);
    debugger;
    if (!players || players.length !== 9 || !bet) history.push("/");
    else {
      localStorage.setItem("placeBet", +bet + 1);
    }
  });

  const handleClick = () => {
      localStorage.removeItem('placeBet');
      history.push('/');
  }
  return (
    <div className="game">
      <div className="containers center pt-5">
        <div className="row">
          <ResultConatiner players={players} bet={+bet + 1} />
        <div className="back-btn pt-3">
            <button className="left p-3" onClick={handleClick}>BACK</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
