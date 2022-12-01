import React, { useState, useEffect, useReducer } from "react";
import { reducer, initialState} from "./reducer";

const UserContext = React.createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [overallState, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                dispatch({type: "setUser", payload: data }) 
                data.errors ? dispatch({type: "setLoggedIn", payload: false}) : dispatch({type: "logout", payload: true})
            })
    }, [])

    useEffect(() => {
        fetch('/comedians')
        .then(res => res.json())
        .then(data => dispatch({type: 'fetchComedians', payload: data}))
        fetch('/users')
        .then(res => res.json())
        .then(data => dispatch({type: 'fetchUsers', payload: data}))
        fetch('/reviews')
        .then(res => res.json())
        .then(data => dispatch({type: 'fetchReviews', payload: data}))
      },[])

    function login(user) {
        //dispatch({type: "login", payload: user})
        setUser(user)
        setLoggedIn(true)
    }

    function logout() {
        //dispatch({type: "logout", payload: user})
        setUser({})
        setLoggedIn(false)
    }

    function signup(user) {
        //dispatch({type: "signup", payload: user})
        setUser(user)
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, overallState, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }