import React from "react";
import { Link } from "react-router-dom";

const QuizCart = ({ quiz }) => {
  const { name, logo, id } = quiz;

  return (
    <div className="mx-auto pt-16 ">
      <section className="mr-5 lg:w-[300px]  shadow-lg">
        <figure className="mb-4">
          <img
            className="bg-gray-200"
            src={logo}
            alt=""
          />
        </figure>
        <div className="">
          <div className="flex justify-between">
            <p className="text-xl">{name}</p>
            <Link to={`/cart/${id}`}>
              <button
                type="button"
                className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuizCart;
