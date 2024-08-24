import { createContext, useContext } from "react";

export const ShareItContext = createContext({
    handlerShareIt: () =>{},
})

export const ShareItProvider = ShareItContext.Provider;

export const useShareIt = () =>{
    return useContext(ShareItContext)
}

