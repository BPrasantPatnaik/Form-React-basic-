import { createContext,useContext } from "react";

const UserContext=createContext({
    user:null,
    password:null,
    setUser:()=>{},
    setPassword:()=>{},
})

export const ContextProvider=UserContext.Provider;

const getContext=()=>{
    return useContext(UserContext);
}

export default getContext;