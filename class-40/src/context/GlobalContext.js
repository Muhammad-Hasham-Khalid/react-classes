import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <GlobalContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
