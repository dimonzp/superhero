import React, { Component } from "react";
import "./App.sass";
import { Badge } from "react-bootstrap";
import { Route } from "react-router-dom";
import Header from "./component/Header/Header";
import HeroesContainer from "./component/Heroes/HeroesContainer";
import HeroProfileContainer from "./component/Heroes/HeroProfile/HeroProfileContainer";
import AddHeroContainer from "./component/Heroes/AddHero/AddHeroContainer";
import UpdateHeroContainer from "./component/Heroes/HeroProfile/UpdateHero.jsx/UpdateHeroContainer";

class App extends Component {
  state = { users: [] };

  render() {
    return (
      <div className="App">
        <Header />
        <h1>
          <Badge variant="danger">Открытая база данных супергороев</Badge>
        </h1>
        <div>
          <Route exact path="/" component={HeroesContainer} />
          <Route exact path="/update/:id" component={UpdateHeroContainer} />
          <Route exact path="/hero/:id" component={HeroProfileContainer} />
          <Route exact path="/addNew" component={AddHeroContainer} />
        </div>
      </div>
    );
  }
}

export default App;
