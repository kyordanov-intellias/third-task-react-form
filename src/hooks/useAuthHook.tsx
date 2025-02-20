import { useState, useEffect } from "react";

interface User {
  username: string;
  email: string;
}

const useAuthHook = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: User): void => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const register = (user: User): void => {
    setUser(user);
    console.log(`User Registrated`);
  };

  const logout = (user: User | null): void => {
    console.log(`${user?.username} logged out`);
    setUser(null);
    localStorage.removeItem("user");
  };

  return { user, login, register, logout };
};

export default useAuthHook;
