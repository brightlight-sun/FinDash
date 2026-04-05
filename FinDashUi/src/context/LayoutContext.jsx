import { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    }


    return (
        <LayoutContext.Provider
        value={{
            darkMode, toggleDarkMode
        }}
        >

            {children}
        </LayoutContext.Provider>
    )
}

export const useLayout = () => {
   return  useContext(LayoutContext);
}