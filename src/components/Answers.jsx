// This will generate the answers to display relative to the question and hand the submit of selected answer to be compared to correct answer.

import React, { Component } from "react";

export default class Answers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswer: "",
    };
  }
  generateAnswers = () => {
    // this generates the answers to display based on random question/answers from json data.
    let answers = [];
    if (this.props.answers !== null) {
      for (const [key, value] of Object.entries(this.props.answers)) {
        if (value !== null) {
          answers.push(
            <div className="answer">
              <input
                type="radio"
                name="answers"
                id={key}
                value={value}
                checked={this.state.selectedAnswer === key}
                onChange={this.handleChange}
                required
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
    this.setState({ selectedAnswer: e.target.id });
  };

  handleSubmit = (e) => {
    // this records the selected answer to check against the correct answer in json data.
    e.preventDefault(); // prevents application from reloading.
    this.props.checkAnswer(this.state.selectedAnswer);
    this.setState({ selectedAnswer: "" });
  };

  render() {
    return (
      <div id="answers-container">
        {/* this form is for the purpose of submitting the user answer choices to the card for validation. */}
        <form onSubmit={this.handleSubmit}>
          {this.generateAnswers().map((answer, index) => {
            return <div key={index}>{answer}</div>;
          })}
          <br></br>
          <button type="submit" style={{ margin: "5px 0" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
