import winIcon from "../../../../assets/trophy.svg";
import betIcon from "../../../../assets/bet.svg";
import coinIcon from "../../../../assets/coin.svg";
import "./PlayersTable.css";

const TABLE_HEAD = ["name", "level", "avatar", "bet", "win", "lost", "price"];

const PlayersTable = ({ selectedPlayer, setSelectedPlayer, players = [] }) => {
  const handleChange = (e, player) => {
    if (e.target.checked) {
      setSelectedPlayer([...selectedPlayer, player]);
    } else {
      const updatedPlayers = [...selectedPlayer];
      const index = updatedPlayers.findIndex(
        (unselectedPlayer) => player._id === unselectedPlayer._id
      );
      updatedPlayers.splice(index, 1);
      setSelectedPlayer(updatedPlayers);
    }
  };

  const TABLE_VALUE = (key, player) => {
    if (key === "avatar") {
      return (
        <img src="https://via.placeholder.com/30x30?text=User" alt="avatar" />
      );
    } else return player[key];
  };

  const isSelected = (player) =>
    selectedPlayer.filter((data) => data._id === player._id).length === 1;

  return (
    <div className="row mt-3">
      <table className="table">
        <thead className="p-5">
          <tr>
            <th scope="col">Select</th>
            <th scope="col-3">Player Name</th>
            <th scope="col text-center">Level</th>
            <th scope="col text-center">Avatar</th>
            <th scope="col text-center">
              <img className="pl-5" src={coinIcon} alt="win" />
              <span>Bet</span>
            </th>
            <th scope="col text-center">
              <img className="pl-5" src={winIcon} alt="win" />
              <span>Wins</span>
            </th>
            <th scope="col text-center">Lost</th>
            <th scope="col text-center">
              <img className="pl-5" src={betIcon} alt="price" />
              <span>Price</span>
            </th>
          </tr>
        </thead>
        <tbody className="p-5">
          {players.map((player) => {
            return (
              <tr key={player._id}>
                <td key={player._id}>
                  <input
                    type="checkbox"
                    id={player._id + "input"}
                    checked={isSelected(player)}
                    onChange={(e) => handleChange(e, player)}
                  />
                  <label htmlFor={player._id+'input'}></label>
                </td>
                {TABLE_HEAD.map((header) => {
                  return (
                    <td key={player._id + header}>
                      {TABLE_VALUE(header, player)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersTable;

// <td key={player._id}>
//   <input
//     type="checkbox"
//     id={player._id + "input"}
//     checked={isSelected(player)}
//     onChange={(e) => handleChange(e, player)}
//   />
//   <label htmlFor={player._id}></label>
// </td>;
// {
//   Object.keys(player).map((key, i) => {
//     if (i === 0) {
//       return null;
//     } else if (i === 1) {
//       return (
//         <>
//           <td className="col">{player[key]}</td>
//           <td className="col">
//             <img
//               src="https://via.placeholder.com/30x30?text=User"
//               alt="avatar"
//             />
//           </td>
//         </>
//       );
//     } else {
//       return <td className="col">{player[key]}</td>;
//     }
//   });
// }
