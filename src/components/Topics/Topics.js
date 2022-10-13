import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Topics = () => {
  const quizData = useLoaderData();
  const allquiz = quizData.data;

  return (
    <div className="lg:flex">
      {allquiz.map((quiz) => (
        <Cart quiz={quiz} key={quiz.id}></Cart>
      ))}
    </div>
  );
};

export default Topics;
