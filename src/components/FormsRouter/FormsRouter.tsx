import { Switch, Route } from "react-router-dom";
import FormFailurePage from "../FormFailurePage/FormFailurePage";
import FormsIndexPage from "../FormsIndexPage/FormsIndexPage";
import FormsNewPage from "../FormsNewPage/FormsNewPage";
import FormsShowPage from "../FormsShowPage/FormsShowPage";
import FormSuccessPage from "../FormSuccessPage/FormSuccessPage";

export default function FormsRouter() {
  return (
    <Switch>
      <Route exact path="/forms">
        <FormsIndexPage />
      </Route>
      <Route path="/forms/new">
        <FormsNewPage />
      </Route>
      <Route exact path="/forms/form-success">
        <FormSuccessPage />
      </Route>
      <Route exact path="forms/form-failure">
        <FormFailurePage />
      </Route>
      <Route path="/forms/:id">
        <FormsShowPage />
      </Route>
    </Switch>
  );
}
