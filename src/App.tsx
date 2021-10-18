import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormsRouter from "./components/FormsRouter/FormsRouter";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProtectedRoute from "./components/shared/ProtectedRoute";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <ProtectedRoute exact path="/">
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path="/forms">
          <FormsRouter />
        </ProtectedRoute>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
