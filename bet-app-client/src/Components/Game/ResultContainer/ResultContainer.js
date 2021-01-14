import PlayerCard from "../PlayerCard/PlayerCard";
import RandomNumber from "../RandomNumber/RandomNumber";

const ResultContainer = ({ players, bet }) => {
  let number = 0;

  const sortedArray = [...players]
    .sort((a, b) => {
      if (b.price === a.price) return b.level - a.level;
      return b.price - a.price;
    })
    .splice(0, 3)
    .map((topper) => topper._id);

  const updateData = async (updatePlayerData) => {
    localStorage.setItem("players", JSON.stringify(players));
    await fetch("http://localhost:3030/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ players: updatePlayerData }),
    });
  };

  console.log(bet);
  if (bet === 2) {
    const dbUpdateData = [];
    number = (Math.random() * 10).toFixed(0);
    players = players.map((playerInfo) => {
      if (+playerInfo.bet === +number) {
        playerInfo.price = playerInfo.price * 2;
        dbUpdateData.push(playerInfo);
      }
      return playerInfo;
    });
    updateData(dbUpdateData);
  }

  const card = (arr) => {
    return arr.map((player) => {
      return (
        <PlayerCard
          key={player._id}
          player={player}
          isTopper={sortedArray.includes(player._id)}
          won={+player.bet === +number}
        />
      );
    });
  };
  const firstHalf = card(players.slice(0, 5));
  const secondHalf = card(players.slice(5, 9));

  return (
    <>
      <div className="col-12 top">{firstHalf}</div>
      <div className="random-number">
        <RandomNumber number={number} />
      </div>
      <div className="col-12 bottom">{secondHalf}</div>
    </>
  );
};

export default ResultContainer;
