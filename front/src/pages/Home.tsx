import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Home() {
  const authContext = useContext(AuthContext);
  return (
    <div>
      Home
      <button onClick={() => authContext?.setAuth(false)}>
        Se deconnecter
      </button>
    </div>
  );
}

export default Home;
