import React, { createContext, useContext, ReactNode, useState } from 'react'

interface ContextProviderProps{
    children: ReactNode
}

interface ContextType{
    menuOpen: string,
    setMenuOpen: React.Dispatch<string>
}


const ModalContext = createContext({} as ContextType)

export function useModal() {
  return useContext(ModalContext)
}


export function ModalContextProvider({ children }: ContextProviderProps){
    
    const [menuOpen, setMenuOpen] = useState("")

    return (
        <ModalContext.Provider value={{setMenuOpen, menuOpen}}>
            {children}
        </ModalContext.Provider>
    )
}