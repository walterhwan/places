import React from 'react'
import { GoogleLogin } from 'react-google-login'

import './App.scss'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

const logResponse = (res) => console.log(res)

function App() {
  return (
    <div className="app">
      <p>Places</p>
      <GoogleLogin
        className="login-button"
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={logResponse}
        onFailure={logResponse}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default App
