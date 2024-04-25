import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues(values);
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
        <input type='email' placeholder='Enter Email' name='email' onChange={handleInput}/>
        </div>
        <div>
        <input type='password' placeholder='Enter password' name='password' onChange={handleInput}/>
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
      <Link to="/signup">Sign Up</Link>
    </div>
  )
}

export default Login