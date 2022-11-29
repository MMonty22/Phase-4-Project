import React, {useState, useEffect} from "react";

const UserContext = React.createContext()

function UserProvider({children}) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            data.error ? setLoggedIn(false) : setLoggedIn(true)
        })
    }, [])

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
        <UserContext.Provider value={{user, login, logout, signup, loggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}