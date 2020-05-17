import React, { Component } from 'react';
import SignupForm from '../SignupForm';


class Signup extends Component {
    state = {
        message: ''
    }
    
  
    updateMessage = (msg) => {
      this.setState({message: msg});
    }
  
    render() {
      return (
        <div className='Signup'>
          <SignupForm {...this.props} updateMessage={this.updateMessage} />
          <p>{this.state.message}</p>
        </div>
      );
    }
  }
  
  export default Signup;