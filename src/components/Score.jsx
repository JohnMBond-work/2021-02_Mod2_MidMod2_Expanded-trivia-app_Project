// this container handles the quiz score

import React, { Component } from "react";
import { connect } from "react-redux";

class Score extends Component {

  render() {
    return (
            <div>

             <div>Current Score: {this.props.score} points out of 100</div>

            </div>
    );
  }
}





function mapStateToProps(state) {
  return{score: state.score};
}
export default connect(mapStateToProps) (Score);
