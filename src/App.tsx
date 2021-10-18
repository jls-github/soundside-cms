import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormsRouter from "./components/FormsRouter/FormsRouter";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";

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
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
