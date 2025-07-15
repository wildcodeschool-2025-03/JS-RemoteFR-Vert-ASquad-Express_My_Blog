import useUser from "../services/useUser";
import { useNavigate } from "react-router";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const { user, handleUser, login } = useUser();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const validateLogin = async (e) => {
    try {
      const logged = await login(e);
      authContext?.setAuth(logged);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={validateLogin}>
      <label htmlFor="mail">
        Votre email
        <input
          id="mail"
          type="email"
          value={user.email}
          onChange={handleUser}
          name="email"
        />
      </label>
      <label htmlFor="pass">
        Mot de passe
        <input
          id="pass"
          type="password"
          value={user.password}
          onChange={handleUser}
          name="password"
        />
      </label>
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default Login;
