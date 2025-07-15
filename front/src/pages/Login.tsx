import useUser from "../services/useUser";

function Login() {
  const { user, handleUser, login } = useUser();

  return (
    <form onSubmit={login}>
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
