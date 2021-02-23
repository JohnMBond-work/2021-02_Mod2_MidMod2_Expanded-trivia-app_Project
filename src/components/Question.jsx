// This renders the questions that were acquired from the API call.

import React from "react";

export default function Question(props) {
  return (
    <div
      style={{
        margin: "20px auto",
        width: "90%",
        textAlign: "left",
      }}
    >
      {props.question}
    </div>
  );
}
