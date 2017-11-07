import React from 'react';

const AccountDetails = ({ email, password, confirmPassword }) => {

  return <form>
    <input type='text' placeholder='Email' id='email' value={email} onChange={this.handleInputChange}/>
    <input type='text' placeholder='Password' id='password' value={password} onChange={this.handleInputChange} />
    <input type='text' placeholder='Confirm Password' id='passwordConfirmation' value={confirmPassword} onChange={this.handleInputChange}/>
    <button id="submitFormBtn"> Submit </button>
  </form>
}

export default LoginForm;