import React from 'react'

export default function LoginPage() {
  return (
    <div><PasswordField/></div>
  )
}

const PasswordField = () => {
    return (
      <div className="field">
        <label for="password">Password</label>
        <input type="password" name="password" id="password"/>
      </div>
    )
  }