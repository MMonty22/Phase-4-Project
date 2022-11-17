import React, {useState, useEffect, createContext} from "react";

const userContext = createContext()

function UserProvider({children}) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/user')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            data.error ? setLoggedIn(false) : setLoggedIn(true)
        })
    })

    function login(user) {
        setUser(user)
        setLoggedIn(true)
    }

    function logout() {
        setUser({})
        setLoggedIn(false)
    }

    function signup(user) {
        setUser(user)
        setLoggedIn(true)
    }

    return (
        <userContext.Provider value={{user, login, logout, signup, loggedIn}}>
            {children}
        </userContext.Provider>
    )
}

export {userContext, UserProvider}