import React, { createContext, useState } from 'react'

export const AppContext = createContext()

function AppContextProvider({children}) {
    const [ menu, setMenu ] = useState(false)

    function changeMenu() {
        setMenu(prev => !prev)
    }
    const [ data, setData ] = useState(
        {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    )
    const [ user, setUser ] = useState([])

    const handleChange = (event) => {
        const { name, value } = event.target
        setData( prev => {
            return { ...prev, [name]: value}
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setUser( data )
        setData({
            name:'',email:'',subject:'',message:''
        })
        
    }
    return(
        <AppContext.Provider value={{menu, setMenu, user, data, setUser,setData, changeMenu, handleSubmit, handleChange}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
