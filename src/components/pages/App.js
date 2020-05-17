import React from 'react';
import '../../index';
import {Route, Link} from 'react-router-dom'
import userService from "../utils/userService"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Navbar from "../Navbar"
import Dashboard from "../pages/Dashboard"

class App extends React.Component {
  state ={
    user: userService.getUser
  }

                                  // **********CALLBACK METHODS***********
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

                              // *************LIFECYCLE METHODS*****************
  // async componentDidMount() {
  //   const scores = await scoresService.index();
  //   this.setState({ scores });
  // }


  render() {
    return(
      <div className="app">
            <Link to="/"><h1>Bottle-IQ</h1></Link>

            <Route exact path="/dashboard" render={() => 
              <Dashboard
                user={this.state.user}
              />
            }/>

            <Route exact path="/" render={() =>  
              <Navbar
                user={this.state.user}
                handleLogout={this.handleLogout} 
              />
            }/>

            <Route exact path="/signup" render={({history}) =>
              <Signup
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              /> 
            }/>

            <Route exact path="/login" render={({history}) =>
              <Login
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              /> 
            }/>
          
      </div>
    )
  }
}

export default App;
