import React, { Component } from "react";

export default class Answers extends Component {
  constructor(props) {
    super(props);

    this.state = {
        selectedAnswer: ""

    }
  }
  generateAnswers = () => {
    let answers = [];
    if (this.props.answers !== null) {
      for (const [key, value] of Object.entries(this.props.answers)) {
        if (value !== null) {
          answers.push(
            <div>
              <input
                type="radio"
                name="answers"
                id={key}
                value={value}
                checked={this.state.selectedAnswer === key}
                onChange={this.handleChange}
              />
              <label htmlFor={key}>{value}</label>
            </div>
          );
        }
      }
    }
    return answers;
  };

handleChange = (e) => {
this.setState(
  {selectedAnswer: e.target.id}
)
}

handleSubmit = (e) => {
  e.preventDefault() // prevents application from reloading.
  this.props.checkAnswer(this.state.selectedAnswer)
  this.setState(
    {selectedAnswer: ""}
  )
  }

  render() {
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
      {/* this form is for the purpose of submitting the user answer choices to the card for validation. */}
      <form onSubmit={this.handleSubmit}>
        {this.generateAnswers().map((answer, index) => {
        return <div key={index}>{answer}</div>;
        })}
        <br></br>
        <button type="submit" style={{margin: '5px 0'}}>Submit</button>
      </form>


    </div>
  );
  };

}
