import "./App.css";
import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const authContext = useContext(AuthContext);

  if (authContext?.auth) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
}

export default App;
