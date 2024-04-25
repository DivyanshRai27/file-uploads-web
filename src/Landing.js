import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <Fragment>
      <h1>DashDrive</h1>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/signup">Sign Up</Link>
      </div>
    </Fragment>
  )
}

export default Landing