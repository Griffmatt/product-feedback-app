import React, { createContext, useContext, ReactNode, useState } from 'react'

interface FeatureContextProviderProps{
    children: ReactNode
}

interface FeatureContextType{
    currentFeature: string,
    setCurrentFeature: React.Dispatch<string>
}


const FeatureContext = createContext({} as FeatureContextType)

export function useFeature() {
  return useContext(FeatureContext)
}


export function FeatureContextProvider({ children }: FeatureContextProviderProps){
    
    const [currentFeature, setCurrentFeature] = useState("All")

    return (
        <FeatureContext.Provider value={{setCurrentFeature, currentFeature}}>
            {children}
        </FeatureContext.Provider>
    )
}