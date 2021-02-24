// This file handles the reducer, INCREMENT and RESET.

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  score: 0,
  users: [],
  authenticated: false,
  currentUser: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentUser: state.users.find(
          (user) =>
            user.userName === action.user.userName &&
            user.password === action.user.password
        ),
        authenticated:
          state.users.find(
            (user) =>
              user.userName === action.user.userName &&
              user.password === action.user.password
          ) === undefined
            ? false
            : true,
      };
    case "CREATE_USER":
      return {
        ...state,
        users: [...state.users, action.user],
        authenticated: true,
        currentUser: action.user,
      };
    case "LOGOUT":
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    case "INCREMENT":
      return {
        ...state,
        score: state.score + 10, // this number is only applicable towards quizes with 10 questions.  Future redesign would need to be done to accomodate different number of questions to the score.
      };
    case "RESET":
      return {
        ...state,
        score: 0,
      };
    default:
      return state;
  }
}

const store = createStore(reducer); // Creates the store in Redux using Redux's createStore, updated by function "reducer" in this file.

ReactDOM.render(
  <React.StrictMode>
    {/* this creates the Redux within JSX to allow for storing state outside of containers via the Provider tag. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// This is for future improvement to do with User Management.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
