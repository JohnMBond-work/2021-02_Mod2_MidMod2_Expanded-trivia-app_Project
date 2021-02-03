// this container is handling the homescreen that is listing the quiz type options

import React from "react";
import { Link } from "react-router-dom";


export default function HomeScreen() {
  return (
    <div>
      <Link to="/quiz/html">
        <div
          style={{
            margin: "50px auto",
            width: "50%",
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
            width: "50%",
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
            width: "50%",
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
