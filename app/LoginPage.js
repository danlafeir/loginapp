import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisible: false
    };
  }
  
  render() {
    const { formVisible } = this.state;

    return (
      <div>
        <h2>Login App</h2>
        {formVisible ? <LoginForm /> : <button id="showFormBtn" onClick={() => {this.setState({formVisible: true})}}> Log in </button> }
      </div>
    );
  }
};

export default LoginPage;




