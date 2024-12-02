// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = {
  primaryColor_Green: string;
  primaryColor_Blue: string;
  primaryColor_Mild: string;
  secondaryColor_Green_Light: string;
  secondaryColor_Green_Dark: string;
  primaryStandoutColor: string;
  backgroundColor: string;
};

const lightTheme: Theme = {
  primaryColor_Green: '#1E412D',
  primaryColor_Blue: '#465F6E',
  primaryColor_Mild: '#F2E8DB',
  secondaryColor_Green_Light: '#719B7F',
  secondaryColor_Green_Dark: '#5A846A',
  primaryStandoutColor: '#DE7B44',
  backgroundColor: '#eaeaea',
};

const darkTheme: Theme = {
  primaryColor_Green: '#1E412D',
  primaryColor_Blue: '#465F6E',
  primaryColor_Mild: '#F2E8DB',
  secondaryColor_Green_Light: '#719B7F',
  secondaryColor_Green_Dark: '#5A846A',
  primaryStandoutColor: '#DE7B44',
  backgroundColor: '#121212',
};

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ theme: isDark ? darkTheme : lightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};