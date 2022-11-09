import React, {useState} from 'react'
import './App.css';
import SignUp from './SignUp';

function App() {
  const {login, setlogin} = useState("")

  return (
    <div className="App">
      <SignUp login={login}/>
    </div>
  );
}

export default App;
