// this container is handling the API request for the quiz quesitons and answers.

import React, { Component } from "react";
import Question from "./Question.jsx";
import Answers from "./Answers";
import { connect } from "react-redux"; // connect() function connects a React component to a Redux store.
import { Link } from "react-router-dom"; // Link provides declarative, accessible navigation around your application.

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      currentQuestionIndex: 0,
      error: null,
      data: [],
      completed: false,
    };
  }

  nextQuestion = () => {
    // This is counting the questions to determine if round is still active or completed.
    if (this.state.currentQuestionIndex < this.state.data.length - 1) {
      this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex + 1,
      });
    } else {
      this.setState({ completed: true });
    }
  };
  // API key management=====================================================
  getData = () => {
    const key = "ufyYzoFd70dkgrVfurdw8RhjWow9lm9uxYixPnh3"; // Key is seperate incase new key is needed.  Easier to change here.
    const url = `https://quizapi.io/api/v1/questions?apiKey=${key}&limit=10&tags=${this.props.quizType}`; //quizType is passed down from QuizContainer.jsx

    fetch(url) // API call.
      .then((res) => res.json()) // The promise starts here.
      .then(
        (result) => {
          this.setState({
            data: result,
            isLoaded: true,
          });
        },
        (error) => {
          // this handles any issues with returned data failure.
          this.setState(
            {
              error,
              isLoaded: false,
            },
            console.log(error)
          );
        }
      );
  };

  checkAnswer = (selectedAnswer) => {
    // this is where the json correct answer is identified to be compared to selected answer.
    const { data, currentQuestionIndex } = this.state;
    let correctAnswer = "";
    // This maps over each entry in the current question's correct answers object, and changes the correctAnswer variable to the key of the entry that has a value of true from json
    for (const [key, value] of Object.entries(
      data[currentQuestionIndex].correct_answers
    )) {
      if (value === "true") {
        // this portion was the solution to a complicated json file layout.
        correctAnswer = key.slice(0, 8);
        console.log(key.slice(0, 8));
        break;
      }
    }
    if (selectedAnswer === correctAnswer) {
      // this where the correct answer from json and selected answer from user is compared.
      // if the user selects the correct score, we call reducer to increment the score in redux
      this.props.dispatch({ type: "INCREMENT" });
    }
    this.nextQuestion();
  };

  componentDidMount() {
    // similar to a render function, this is a React Lifecycle Method.  this is outside the render function to prevent looping due to getData triggering a re-render each time the state is updated.
    this.getData();
  }

  // Reset score when component unmounts - user navigates back, refreshes page, or closes browser
  componentWillUnmount() {
    this.props.dispatch({ type: "RESET" });
  }

  // Once API data has been received, proper quiz is rendered here according to user choice of topic.
  render() {
    const { isLoaded, data, currentQuestionIndex, completed } = this.state;
    return (
      <div className="card shadow" style={{ margin: "60px auto" }}>
        {/* Conditionally render question and answer if quiz is not completed, or their total score percentage if it is completed */}
        {completed ? (
          <div style={{ margin: "20px 0" }}>
            <p>COMPLETE! You scored {this.props.score}%</p>
            <Link to="/">
              <button>Back to Home</button>
            </Link>
          </div>
        ) : (
          <div>
            <p>
              Question {currentQuestionIndex + 1} of {data.length}
            </p>
            {/* progress bar */}
            <div
              style={{
                height: "3px",
                width: currentQuestionIndex * 10 + "%",
                backgroundColor: "#4b5320",
                margin: "2px 5%",
              }}
            ></div>
            <Question
              question={isLoaded ? data[currentQuestionIndex].question : null}
            />
            <Answers
              answers={isLoaded ? data[currentQuestionIndex].answers : null}
              checkAnswer={this.checkAnswer}
            />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Function that takes the Redux State and maps to this component's props.
  return { score: state.score };
}
export default connect(mapStateToProps)(Card);
