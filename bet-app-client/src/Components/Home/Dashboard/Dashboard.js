import "./Dashboard.css";
import search from "../../../assets/search.svg";
import PlayersTable from "./PlayersTable/PlayersTable";

const Dashboard = ({
  selectedPlayer,
  setSelectedPlayer,
  players,
  pageData,
  setPageData,
  count,
}) => {
  console.log(count);
  const totalPage = Math.round(count / 5) || 1;
  return (
    <div className="dashboard m-3 p-3">
      <div className="select-text">Select Playing 9</div>
      <div className="search-container mt-5">
        <label htmlFor="searchUser">
          <img className="searchUser" src={search} alt="serach" />
        </label>
        <input
          id="searchUser"
          className="effect-1"
          type="text"
          value={pageData.search}
          onChange={(e) =>
            setPageData({ index: 0, searchText: e.target.value })
          }
          placeholder="Search Players"
        />
        <span className="focus-border"></span>
      </div>
      <PlayersTable
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
        players={players}
      />
      <div className="pagination">
        <button
          className="arrow"
          disabled={pageData.index + 1 <= 1}
          onClick={() =>
            setPageData({ ...pageData, index: pageData.index - 1 })
          }
        >
          <i className="fas fa-angle-left"></i>
        </button>
        <span className="text-center m-1">
          {pageData.index + 1} / {totalPage}
        </span>
        <button
          className="arrow"
          disabled={pageData.index + 1 >= totalPage}
          onClick={() =>
            setPageData({ ...pageData, index: pageData.index + 1 })
          }
        >
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
