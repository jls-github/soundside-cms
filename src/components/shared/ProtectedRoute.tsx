import { Redirect, Route, RouteProps } from "react-router-dom";
import getToken from "../../utilities/getToken";

export default function ProtectedRoute(props: RouteProps) {
  if (!getToken()) return <Redirect to="/login" />;
  return <Route {...props}>{props.children}</Route>;
}
