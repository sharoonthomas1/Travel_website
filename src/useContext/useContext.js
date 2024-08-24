import React ,{ createContext, useContext } from "react";


export const themeContext = createContext({
   SignActive: () =>{},
   SignDiactive: () =>{},
   emailActive: () =>{},
   emailDiactive: () =>{},
   langActive: () =>{},
})

export const ThemeProvider = themeContext.Provider;


export const useSign = ()=>{
    return useContext(themeContext)
}