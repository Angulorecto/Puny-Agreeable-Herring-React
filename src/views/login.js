import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>login - Puny Agreeable Herring</title>
        <meta property="og:title" content="login - Puny Agreeable Herring" />
      </Helmet>
    </div>
  )
}

export default Login
