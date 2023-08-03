// eslint-disable-next-line no-unused-vars
import React from "react";
import Answers from "./Answers";
import classes from "./styles/Question.module.css";

export default function Question({ answers = [] }) {
  return answers.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}
