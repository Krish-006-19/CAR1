import { createContext, useContext } from "react";

export let ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: ()=>{},
  lightTheme: ()=>{}
});

export let ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
  return useContext(ThemeContext)
}