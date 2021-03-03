import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';

class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "login",
      authenticated: this.props.authenticated,
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      attemptedLogin: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit = (e) => {
    // prevents page from reloading when form is submitted - standard for forms in React
    e.preventDefault();

    // checks which form is being submitted, and calls the associated action type in redux
    switch (this.state.formType) {
      case "login":
        fetch('http://localhost:8080/users')
        .then((res) => res.json())
        .then(
          (result) => {
            // Had to pull in all users and look for specific user and log the user name and password to redux because there is no backend functionality that looks for and returns a single user
            if (result.find(user => user.name === this.state.userName && user.password === this.state.password) !== undefined) 
            {
              this.props.dispatch({
              type: "LOGIN",
              user: {
                userName: this.state.userName,
                password: this.state.password,
              },
            });
          } else {
            this.setState({
                attemptedLogin: true
            })
          }
          }
        )
        break;

      case "createAccount":
        // used axios to make post request
        axios.post("http://localhost:8080/users/add-user", { name: this.state.userName, password: this.state.password}) // API call.
      .then(
        (result) => {
          console.log(result)
          // had to store the form data in redux because we couldn't get the add-user function on the backend to return the new user 
          if (result.status === 200) { 
            this.props.dispatch({
              type: "LOGIN",
              user: {
                userName: this.state.userName,
                password: this.state.password
              },
            });
          }
        }
      );
        
        break;
      default:
        // If formType doesn't match either of these cases for some reason, then we just log an error to the console
        console.log(`Unknown form type of "${this.state.formType}"`);
    }
  };

  handleChange = (e) => {
    // This handles all input values. Each input has a name which is identical to it's corresponding field in state.
    // to set the state dynamically, the field is 'e.target.name' and the value is 'e.target.value'
    // so, if you're trying to update the userName value, e.target.name === 'userName' and e.target.value === whatever the user input for their username
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { formType, userName, password, firstName, lastName } = this.state;

    // This function checks the form type stored in the component's state to see which form should be rendered
    // This is so we can handle Login, Create account, and Logout all within the same component.
    const renderForm = () => {
      switch (formType) {
        case "login":
          return (
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              className="login-form"
            >
              <p style={{ fontSize: "20px", fontWeight: "semi-bold" }}>Login</p>
              <input
                type="text"
                name="userName"
                value={userName}
                placeholder="User Name"
                autoComplete="false"
                onChange={this.handleChange}
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                autoComplete="false"
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
              <div style={{ margin: "10px 0 0 0" }}>
                <button type="submit">Login</button>
              </div>
              {/* if credentials are incorrect, currentUser will be undefined. Display error text if currentUser is undefined */}
              {this.state.attemptedLogin && (
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#900000",
                  }}
                >
                  User name or password is incorrect. Please try again or Create New User Account below. Note:
                  credentials are case-sensitive.
                </p>
              )}
              <p
                style={{
                  fontSize: "14px",
                  color: "#4b5320",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.setState({ formType: "createAccount" });
                }}
              >
                New user? Create an Account
              </p>
            </form>
          );
        case "createAccount":
          return (
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              className="login-form"
            >
              <p style={{ fontSize: "20px", fontWeight: "semi-bold" }}>
                Create an Account
              </p>
              {/* <input
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={this.handleChange}
                required
              /> */}
              <input
                type="text"
                name="userName"
                value={userName}
                placeholder="User Name"
                onChange={this.handleChange}
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
              <div style={{ margin: "10px 0 0 0" }}>
                <button type="submit">Create Account</button>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#4b5320",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.setState({ formType: "login" });
                }}
              >
                Already have an account? Login
              </p>
            </form>
          );
        default:
          return null;
      }
    };

    return (
      <div style={{ margin: "100px" }}>
        <h1 className="title">Login or Create an Account</h1>
        <div className="card shadow" style={{ margin: "80px auto 0 auto" }}>
          {/* Checking to see if they're authenticated. If they are, display the logout screen, if not, render the login/create user forms */}
          {this.props.authenticated ? (
            <div>
              <p>
                Currently Logged in as {this.props.currentUser.userName}
              </p>
              <button
                onClick={() => {
                  this.setState({ formType: "login" });
                  this.props.dispatch({ type: "LOGOUT" });
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            renderForm()
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // Function that takes the Redux State and maps to this component's props.
  return { authenticated: state.authenticated, currentUser: state.currentUser };
}
export default connect(mapStateToProps)(AccountScreen);
