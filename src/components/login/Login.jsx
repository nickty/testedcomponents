import React, { useState } from 'react'

const Login = () => {

  const [error, setError] = useState(false)
  return (
    <div>
        <form>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
            <button disabled>Login</button>
            <span data-testid="error" style={{visibility: error ? "visible" : "hidden"}}>Error massage</span>
        </form>
    </div>
  )
}

export default Login