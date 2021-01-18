import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import "./Home.css";
import SideBar from "./SideBar/SideBar";

const Home = () => {
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [players, setPLayers] = useState([]);
  const [pageData, setPageData] = useState({ searchText: "", index: 0 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchReq = await fetch(
        `http://localhost:3030/?search=${pageData.searchText}&pageIndex=${pageData.index}`
      );
      const fetchResult = await fetchReq.json();
      console.log(fetchResult, pageData);
      setPLayers(fetchResult.searchedResult);
      setCount(fetchResult.count);
    };
    fetchData();
  }, [pageData]);

  useEffect(()=>{
    localStorage.removeItem('players');
    localStorage.removeItem('placeBet')
    localStorage.removeItem('gameData')
  })

  return (
    <div className="home">
      <div className="row p-0">
        <div className="col-md-3">
          <SideBar selectedPlayer={selectedPlayer} />
        </div>
        <div className="col-md-9">
          <Dashboard
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            players={players}
            pageData={pageData}
            count={count}
            setPageData={setPageData}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
