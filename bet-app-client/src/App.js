import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Game from "./Components/Game/Game";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="containers m-0 p-0">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="*" render={() => <div>Not Valid Path</div>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
