import React from 'react'

const LoginSignup = () => {
  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <div>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continus</button>
        <p>Already have an account? <span>Login Here</span></p>
      </div>
    </div>
  )
}

export default LoginSignup
