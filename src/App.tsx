import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormsRouteContainer from "./components/FormsRouteContainer/FormsRouteContainer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/forms">
          <FormsRouteContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
