import React from "react";
// Routes

import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import Anime from "./features/anime/Anime";

const Routes = () => {
  //const isConnected = useSelector(state => state.connexion.isConnected);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/anime/:id/" component={Anime} />
        <Route>
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
