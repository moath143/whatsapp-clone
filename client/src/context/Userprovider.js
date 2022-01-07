import React, {useState, createContext} from 'react'


export const UserConext = createContext(null)
function Userprovider({ children }) {
    const[person, setPerson] = useState({})
    return (
        <UserConext.Provider value={{person, setPerson}}>
            {children}
        </UserConext.Provider>
    )
}

export default Userprovider
