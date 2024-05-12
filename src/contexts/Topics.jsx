import { useState, createContext } from "react";

export const TopicsContext = createContext();

export const TopicsProvider = ({children}) => {
  const [topics, setTopics] = useState('');

  return (
    <TopicsContext.Provider value = {{topics, setTopics}}>
      {children}
    </TopicsContext.Provider>
  );
};