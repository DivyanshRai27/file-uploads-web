import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SignUp() {
  const [values, setValues] = useState({
    phone: '',
    password: ''
  })

  const handleChange = (event) => {
    console.log('###', event);
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://31e4-112-196-47-10.ngrok-free.app/user/sign-up', values)
      console.log(response);
    } catch (error) {
      console.log(error.message)
      throw error;
    }

  }
  return (
    <div>
      <h1>Create Account</h1>
      <form action=""  onSubmit={handleSubmit}>
        <div>
        <input type='number' placeholder='Enter phone' name='phone' value={values.phone} onChange={handleChange}/>
        </div>
        <div>
        <input placeholder='Enter password' name='password' value={values.password} onChange={handleChange}/>
        </div>
        <div>
          <button type='submit'>Sign up</button>
        </div>
      </form>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default SignUp