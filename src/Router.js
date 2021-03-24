import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header, RequiresAuth } from "./components/";
import { Home, Post } from "./pages";
import * as Routes from "./_config/routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.POST} component={RequiresAuth(Post)} />
      </Switch>
    </BrowserRouter>
  );
};
