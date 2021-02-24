// this container is handling the homescreen that is listing the quiz type options

import React from "react";
import { Link } from "react-router-dom"; // Link provides declarative, accessible navigation around your application.

export default function HomeScreen() {
  //This renders the page text and link options.  Link tag passes extension onto API URL in Card.js
  return (
    <div>
      {/*  Updated structure of code and styling */}
      <h1 className="title">Coding Trivia App</h1>
      <p className="subtitle">Select a Quiz below to get started!</p>

      <div className="card shadow">
        <div className="link-container">
          <Link to="/quiz/html" className="link">
            HTML
          </Link>
        </div>
        <div className="link-container">
          <Link to="/quiz/javascript" className="link">
            JavaScript
          </Link>
        </div>
        <div className="link-container">
          <Link to="/quiz/BASH" className="link">
            BASH
          </Link>
        </div>
      </div>
    </div>
  );
}
