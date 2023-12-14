import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<{
  token: string;
  storeLoginToken: (val: string) => void;
  removeToken: () => void;
}>({
  token: "",
  storeLoginToken: () => {},
  removeToken: () => {},
});

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const initializeStoredValue = () => {
    try {
      const tokenValue = localStorage.getItem("token");
      if (tokenValue) {
        return JSON.parse(tokenValue);
      } else {
        localStorage.setItem("token", JSON.stringify(null));
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const [storedValue, setStoredValue] = useState(initializeStoredValue);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(storedValue));
  }, [storedValue]);

  function login(data: string) {
    setStoredValue(data);
  }

  function logout() {
    setStoredValue(null);
  }

  return (
    <AuthContext.Provider
      value={{
        token: storedValue,
        storeLoginToken: login,
        removeToken: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
