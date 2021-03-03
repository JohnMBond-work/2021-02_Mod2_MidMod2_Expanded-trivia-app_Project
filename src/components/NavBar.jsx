import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function NavBar(props) {
  return (
    <div className="navbar shadow">
      <Link to="/" className="link navbar-items middle">
        Home
      </Link>
      {props.authenticated ? (
        <div className="navbar-items">
          Hello {props.currentUser.userName}!
          <Link to="/account" className="link navbar-items middle">
            View Account
          </Link>
        </div>
      ) : (
        <Link to="/account" className="link navbar-items middle">
          Login or Create an Account
        </Link>
      )}
    </div>
  );
}
function mapStateToProps(state) {
  // Function that takes the Redux State and maps to this component's props.
  return { authenticated: state.authenticated, currentUser: state.currentUser };
}
export default connect(mapStateToProps)(NavBar);
