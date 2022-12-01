import React, { useState, useEffect, createContext } from 'react'

export const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();

    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'))
    

    useEffect(() => {
        
        setCurrentUser(localStorageUser)

    }, [localStorageUser]);


    return (

        <CurrentUserContext.Provider value={{ currentUser }}>
            {children}
        </CurrentUserContext.Provider>

    );
};

export default CurrentUserProvider;