import winIcon from "../../../assets/trophy.svg";
import betIcon from "../../../assets/bet.svg";
import coinIcon from "../../../assets/coin.svg";
import badgeIcon from "../../../assets/badge.svg";
import "./PlayerCard.css";

const PlayerCard = ({ player, won, isTopper }) => {
  return (
    <>
      <div
        className={won ? "card success" : "card failed"}
        style={{ width: "18rem" }}
      >
        <div className="card-body row">
          <div
            className="col-5
          "
          >
            <span className="selected-player-avatar">
              <img
                src="https://via.placeholder.com/50x45?text=User"
                alt="avatar"
              />
              {isTopper && (
                <img className="selected-badge" src={badgeIcon} alt="badge" />
              )}
            </span>
          </div>
          <div className="col-5 player-detail">
            <div>{player.name}</div>
            <div className="level">LEVEL {player.level}</div>
          </div>
          <div className="player-stat mt-2 row">
            <span className="pl-5 col-6">
              <img className="" src={betIcon} alt="bet" />
              {player.price}
            </span>
            <span className="pl-5 col-6">
              <img className="" src={coinIcon} alt="coin" />
              {player.bet}
            </span>
            <span className="pl-5 col-6">
              <img className="" src={winIcon} alt="price" />
              {player.win}
            </span>
          </div>
        </div>
        <div className="result text-center">{won ? "Winner" : "lose"}</div>
      </div>
    </>
  );
};

export default PlayerCard;
