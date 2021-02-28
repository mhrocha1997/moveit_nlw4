import { create } from "domain";
import { createContext, useContext, useState } from "react";



export const ThemeContext = createContext({});

export function ThemeProvider({children}){
    const [isDefaultTheme, setIsDefaultTheme ] = useState(true);


    <ThemeContext.Provider
        value={{
            setIsDefaultTheme
        }}
    >
        {children}
    </ThemeContext.Provider>
}