import { useContext } from "react";
import {  createContext } from "react";
import { useRef } from "react";

export const contactRef = createContext()

export const ContextProvider = ({children})=>{
    const contact = useRef(null)
    // const projects = useRef(null)

    return (
        <contactRef.Provider value={{contact}}>
            {children}
        </contactRef.Provider>
    )
}

export const useContactRef = ()=> useContext(contactRef)
