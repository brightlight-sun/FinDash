import { createContext, useContext, useState, useEffect } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false);

    const [sidebarOpen, setSidebarOpen ] = useState(window.innerWidth >= 768);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    }

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    }

    useEffect(() => {

        if(darkMode){
            document.body.classList.add('dark-body');
        }
        else{
            document.body.classList.remove('dark-body');
        }

    }, [darkMode]);

    return (
        <LayoutContext.Provider
        value={{
            darkMode, toggleDarkMode,
            sidebarOpen, toggleSidebar
        }}
        >

            {children}
        </LayoutContext.Provider>
    )
}

export const useLayout = () => {
   return  useContext(LayoutContext);
}