import { useState } from "react";
import { User } from "../interfaces/formInterface";

const useAuthHook = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User): void => {
    setUser(userData);
    console.log(`User Logged In`);
  };

  const register = (userData: User): void => {
    setUser(userData);
    console.log(`User Registered`);
  };

  const logout = (): void => {
    console.log(`${user?.username} logged out`);
    setUser(null);
  };

  return { user, login, register, logout };
};

export default useAuthHook;