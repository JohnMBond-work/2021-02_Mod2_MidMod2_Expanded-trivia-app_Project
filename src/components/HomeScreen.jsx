// this container is handling the homescreen that is listing the quiz type options

import React from "react";
import { Link } from "react-router-dom"; // Link provides declarative, accessible navigation around your application.


export default function HomeScreen() { //This renders the page text and link options.  Link tag passes extension onto API URL in Card.js
  return (
    <div><br></br><br></br><br></br><br></br><br></br><br></br>Welcome to SE Quiz
      <Link to="/quiz/html">
        <div
          style={{
            margin: "50px auto",
            width: "25%",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          Link to HTML Quiz {"->"}
        </div>
      </Link>
      <Link to="/quiz/javascript">
        <div
          style={{
            margin: "50px auto",
            width: "25%",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          Link to JavaScript Quiz {"->"}
        </div>
      </Link>
      <Link to="/quiz/BASH">
        <div
          style={{
            margin: "50px auto",
            width: "25%",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          Link to BASH Quiz {"->"}
        </div>
      </Link>
    </div>
  );
}
