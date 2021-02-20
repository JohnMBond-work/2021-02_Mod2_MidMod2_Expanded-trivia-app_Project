// This renders the questions that were acquired from the API call.

import React from "react";

export default function Question(props) {
  return (
    <div
      style={{
        margin: "20px auto",
        width: "90%",
        boxShadow: "0 10px 6px -6px #777",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      {props.question}
    </div>
  );
}
