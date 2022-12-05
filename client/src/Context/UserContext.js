import React, {useEffect, useReducer } from "react";
import { reducer, initialState} from "./reducer";

const UserContext = React.createContext()

function UserProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                dispatch({type: "setUser", payload: data }) 
                data.error ? dispatch({type: "setLoggedIn", payload: false}) : dispatch({type: "setLoggedIn", payload: true})
                dispatch ({type: 'setLoad'})
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
        console.log('user', user)
        dispatch({type: "login", payload: user})
    }

    function logout() {
        dispatch({type: "logout"})
    }

    function signup(user) {
        dispatch({type: "signup", payload: user})
    }

    return (
        <UserContext.Provider value={{ login, logout, signup, state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }