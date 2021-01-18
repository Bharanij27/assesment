import "./SideBar.css";
import betAppLogo from "../../../assets/Logo.svg";
import SelectedPlayerList from "./SelectedPlayerList/SelectedPlayerList";
import { useHistory } from "react-router-dom";

const SideBar = ({ selectedPlayer }) => {
  const history = useHistory();
  const startGame = () => {
    localStorage.setItem('players', JSON.stringify(selectedPlayer));
    localStorage.setItem('placeBet', 0);
    history.push("/game");
  }

  return (
    <div className="sidebar p-3">
      <div className="logo p-3">
        <img src={betAppLogo} alt="logo" />
      </div>
      <div className="player-list pt-5">
        <div className="m-3 heading ml-5">Playing 9</div>
        <SelectedPlayerList selectedPlayer={selectedPlayer} />
        <div className="button-container">
          <button className="startbtn" onClick={startGame} disabled={selectedPlayer.length != 9}>
            START
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
