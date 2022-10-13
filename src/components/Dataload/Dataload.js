import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Dataload = () => {
  const loadQuiz = useLoaderData();
  const listQuizes = loadQuiz.data.questions;
  return (
    <div>
      <div className="mt-8 xl:mx-20">
        {listQuizes.map((quiz) => (
          <Quiz quiz={quiz} key={quiz.id}></Quiz>
        ))}
      </div>
    </div>
  );
};
export default Dataload;
