import "./SelectedPlayerList.css";
import winIcon from "../../../../assets/trophy.svg";
import betIcon from "../../../../assets/bet.svg";
import coinIcon from "../../../../assets/coin.svg";
import badgeIcon from "../../../../assets/badge.svg";

const SelectedPlayerList = ({ selectedPlayer = [] }) => {
  const topTwoPlayers = [...selectedPlayer]
    .sort((a, b) => {
      if(b.price === a.price) return b.level - a.level
      return b.price - a.price
    })
    .slice(0, 2).map(topper => topper._id);
    
  return (
    <div className="selected-user">
      {selectedPlayer.map((player) => {
        return (
          <div className="player m-3" key={player.name}>
            <div className="col-3">
              <span className="img">
                <img
                  src="https://via.placeholder.com/50x45?text=User"
                  alt="avatar"
                />
                {topTwoPlayers.includes(player._id) && <img
                className="badge"
                  src={badgeIcon}
                  alt="badge"
                />}
              </span>
            </div>
            <div className="col-5 player-details">
              <span>{player.name}</span>
              <div className="player-stats mt-2">
                <span>
                  <img className="pl-5" src={winIcon} alt="price" />
                  {player.win}
                </span>
                <span>
                  <img className="pl-5" src={betIcon} alt="price" />
                  {player.bet}
                </span>
              </div>
            </div>
            <div className="col-3 m-auto">
              <span>
                <img className="pl-5" src={coinIcon} alt="price" />
                {player.price}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayerList;
