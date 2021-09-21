import { Switch, Route } from "react-router-dom";
import FormsIndexPage from "../FormsIndexPage/FormsIndexPage";
import FormsNewPage from "../FormsNewPage/FormsNewPage";
import FormsShowPage from "../FormsShowPage/FormsShowPage";

export default function FormsRouteContainer() {
  return (
    <Switch>
      <Route exact path="/forms">
        <FormsIndexPage />
      </Route>
      <Route path="/forms/new">
        <FormsNewPage />
      </Route>
      <Route path="/forms/:id">
        <FormsShowPage />
      </Route>
    </Switch>
  );
}
