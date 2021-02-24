import React, { Component } from "react";

export default class AccountScreen extends Component {
  constructor() {
    super();
    this.state = {
      formType: "login",
      username: "",
      password: "",
      firstName: "",
      lastName: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  handleChange = (e) => {
    console.log("changed");
  };
  render() {
    const { formType, username, password, firstName, lastName } = this.state;

    return (
      <div style={{ margin: "100px" }}>
        <h1 className="title">Login or Create an Account</h1>
        <div className="card shadow" style={{ margin: "80px auto 0 auto" }}>
          {formType === "login" ? (
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              className="login-form"
            >
              <p style={{ fontSize: "20px", fontWeight: "semi-bold" }}>Login</p>
              <input
                type="text"
                name="userName"
                value={username}
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
          ) : (
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
                value={username}
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
          )}
        </div>
      </div>
    );
  }
}
