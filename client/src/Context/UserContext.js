import React, {useEffect, useReducer } from "react";
import { reducer, initialState} from "./reducer";

const UserContext = React.createContext()

function UserProvider({ children }) {
    const [overallState, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                dispatch({type: "setUser", payload: data }) 
                data.errors ? dispatch({type: "setLoggedIn", payload: false}) : dispatch({type: "setLoggedIn", payload: true})
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
        dispatch({type: "login", payload: user})
    }

    function logout() {
        dispatch({type: "logout"})
    }

    function signup(user) {
        dispatch({type: "signup", payload: user})
    }

    return (
        <UserContext.Provider value={{ login, logout, signup, overallState, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }