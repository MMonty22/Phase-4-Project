import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { UserContext } from '../Context/UserContext';

function Home() {
    const navigate = useNavigate()
    const {user, loggedIn, logout} = useContext(UserContext)
    //console.log('user', user)

    function navigateToLoginPage() {
        navigate('/login')
    }

    function navigateToSignUpPage() {
        navigate('/signup')
    }

    function handleUserLogout() {
        fetch('/logout', {
            method: 'DELETE',
            headers: {"Content-Type": "application/json",},
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if (loggedIn)
        return(
            <div>
                <h2>Welcome, {user.username}</h2>
                <button onClick={handleUserLogout}>Logout</button>
            </div>
        )
    else
        return (
            <div>
                <h2>Please Create and Account or Login</h2>
                <button onClick={navigateToSignUpPage}>Create Account</button>
                <button onClick={navigateToLoginPage}>Login</button>
            </div>
        ) 
}

export default Home