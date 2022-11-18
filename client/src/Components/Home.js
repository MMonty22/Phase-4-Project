import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { UserContext } from '../Context/UserContext';

function Home() {
    const navigate = useNavigate()
    const {user, loggedIn} = useContext(UserContext)
    console.log('user', user)

    function navigateToLoginPage() {
        navigate('/login')
    }

    function navigateToSignUpPage() {
        navigate('/signup')
    }

    if (loggedIn)
        return(
            <div>
                <h2>Welcome, {user.username}</h2>
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