import React from 'react'
import {useNavigate} from "react-router-dom"

function SignUp({username, setUsername, email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation, login}) {
    const navigate = useNavigate()
  
    function handleSubmit(event) {
      event.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((res) => res.json())
        .then(login);
        navigate('/comedians')
    }

    function navigateToLoginPage() {
      navigate('/login')
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input type="password" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
        <h3>Already have an account?</h3>
        <button onClick={navigateToLoginPage}>Login Here</button>
      </div>
    );
}

export default SignUp