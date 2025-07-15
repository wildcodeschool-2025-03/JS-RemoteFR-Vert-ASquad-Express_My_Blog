import { useState } from "react";
import client from "./client";
import { initialUser, type User, type HandleUserEvent } from "../types/User";

const useUser = () => {
  const [user, setUser] = useState<User>(initialUser);

  const handleUser = (e: HandleUserEvent) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const loggedUser = await client.post("/login", user);
      return loggedUser.data.isConnected;
    } catch (error) {
      console.error(error);
    }
  };

  return { user, handleUser, login };
};

export default useUser;
