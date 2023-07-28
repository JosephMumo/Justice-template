import React, { createContext, useState } from 'react'

export const AppContext = createContext()

function AppContextProvider({children}) {
    const [ menu, setMenu ] = useState(false)

    function changeMenu() {
        setMenu(prev => !prev)
    }
    return(
        <AppContext.Provider value={{menu, setMenu, changeMenu}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
