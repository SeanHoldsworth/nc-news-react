import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [username, setUsername] = useState('happyamy2016');

  return (
    <UserContext.Provider value = {{username, setUsername}}>
      {children}
    </UserContext.Provider>
  );
};