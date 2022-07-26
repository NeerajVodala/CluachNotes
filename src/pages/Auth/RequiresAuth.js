import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts";

const RequiresAuth = ({ children }) => {
  const {
    authState: { isLoggedIn },
  } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export { RequiresAuth };
