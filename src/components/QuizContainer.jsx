// this container handles the rendering of the trivia questions/answer options, or the actual quiz.

import React from "react";
import Score from "./Score";
import Card from "./Card";

export default function QuizContainer(props) {
  return (
    <div>
      <Score />
      <Card quizType={props.quizType} />
    </div>
  );
}
