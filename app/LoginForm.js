import React from 'react';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    }
    this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { email, password, confirmPassword } = this.state;

    return <form>
      <input type='text' placeholder='Email' id='email' value={email} onChange={this.handleInputChange}/>
      <input type='text' placeholder='Password' id='password' value={password} onChange={this.handleInputChange} />
      <button id="submitFormBtn"> Submit </button>
    </form>
  }
};

export default LoginForm;
