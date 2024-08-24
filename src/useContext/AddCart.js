import { createContext, useContext } from "react";

export const AddCartContext = createContext({
  addCart: () =>{}
})


export const AddCartProvider = AddCartContext.Provider;

export const useAddCart = () =>{
    return useContext(AddCartContext)
}