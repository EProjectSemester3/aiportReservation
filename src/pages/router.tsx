import { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import HomePageContainer from "./home";

export function RootRouter(): ReactElement {
  return (
    <Switch>
      <Route>
        <HomePageContainer />
      </Route>
    </Switch>
  );
}
