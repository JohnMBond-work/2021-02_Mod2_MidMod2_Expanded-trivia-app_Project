// this container handles the quiz score

import React, { Component } from "react";
import { connect } from "react-redux";

class Score extends Component {
  render() {
    // This prints out the current score on page, pulled from Redux state.score.
    // Still need to take this value and add to previous value from DB as well as display on homepage of current user.
    return (
      <div className="subtitle">
        Current Score: {this.props.score} points out of 100
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { score: state.score };
}
export default connect(mapStateToProps)(Score);
