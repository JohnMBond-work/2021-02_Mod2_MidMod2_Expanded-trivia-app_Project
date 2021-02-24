import React, { Component } from "react";
import { connect } from "react-redux";

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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // checks which form is being submitted, and calls the associated action type in redux
    switch (this.state.formType) {
      case "login":
        this.props.dispatch({
          type: "LOGIN",
          user: {
            userName: this.state.userName,
            password: this.state.password,
          },
        });
        break;

      case "createAccount":
        this.props.dispatch({
          type: "CREATE_USER",
          user: {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            password: this.state.password,
          },
        });
        break;
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
              />
              <input
                type="password"
                name="password"
                value={password}
                autoComplete="false"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <div style={{ margin: "10px 0 0 0" }}>
                <button type="submit">Login</button>
              </div>
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
              <input
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="userName"
                value={userName}
                placeholder="User Name"
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
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
      }
    };

    return (
      <div style={{ margin: "100px" }}>
        <h1 className="title">Login or Create an Account</h1>
        <div className="card shadow" style={{ margin: "80px auto 0 auto" }}>
          {this.props.authenticated ? (
            <div>
              <p>
                Current Logged in as {this.props.currentUser.firstName}{" "}
                {this.props.currentUser.lastName}
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
