import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { UserContext } from '../Context/UserContext';

function Login({username, setUsername, password, setPassword, errors, setErrors}) {
    const navigate = useNavigate()
    const {login} = useContext(UserContext)

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
              login(user)
            }
            else {
              setUsername("")
              setPassword("")
              const errors = user.errors.map(error => <li>{error}</li>)
              setErrors(errors)
            }
          });
          navigate('/')
      }

    return (
        <div>
        <h2>Please Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <br/>
          <label>Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <br/>
          <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Login