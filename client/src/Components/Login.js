import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { userContext } from '../Context/UserContext';

function Login({username, setUsername, email, setEmail, password, setPassword, errors, setErrors}) {
    const navigate = useNavigate()
    const signup = useContext(userContext)

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        })
          .then((res) => res.json())
          .then(user => {
            if (!user.errors) {
              signup(user)
            }
            else {
              setUsername("")
              setPassword("")
            }
          });
      }

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <label>Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Login