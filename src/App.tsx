import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormsRouter from "./components/FormsRouteContainer/FormsRouter";
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
          <FormsRouter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
