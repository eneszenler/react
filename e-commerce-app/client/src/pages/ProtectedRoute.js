import {Navigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

function ProtectedRoute({admin, children}) {
  const {loggedIn, user} = useAuth();
  if (admin && user.role !== "admin") {
    return <Navigate to="/products" />;
  }
  return loggedIn ? children : <Navigate to="/products" />;
}

export default ProtectedRoute;
