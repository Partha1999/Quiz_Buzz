import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Quiz = ({ quiz }) => {
  const { options, question, id, correctAnswer } = quiz;
  return (
    <div>
      <div className="p-5 xl:p-14  mb-5">
        <div className="flex mb-5">
          <h3 className="text-xl w-2/3 text-center">{question}</h3>
          <FontAwesomeIcon
            className="mt-2 right-0 top-0 cursor-pointer"
            icon={faEye}
            onClick={() => {
              alert(correctAnswer);
            }}
          ></FontAwesomeIcon>
        </div>
        <div>
          <div className="flex items-center border-2 p-5 rounded-lg mb-2">
            <input
              id={id}
              type="radio"
              value={options[0] ? options[0] : "None of them"}
              name={id}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => {
                if (e.target.value === correctAnswer) {
                  alert("Correct Answer");
                }
              }}
            />
            <label
              htmlFor={id}
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {options[0] ? options[0] : "None of them"}
            </label>
          </div>
          <div className="flex items-center border-2 p-5 rounded-lg mb-2">
            <input
              id={id}
              type="radio"
              value={options[1] ? options[1] : "None of them"}
              name={id}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => {
                if (e.target.value === correctAnswer) {
                  alert("Correct Answer");
                }
              }}
            />
            <label
              htmlFor={id}
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {options[1] ? options[1] : "None of them"}
            </label>
          </div>
          <div className="flex items-center border-2 p-5 rounded-lg mb-2">
            <input
              id={id}
              type="radio"
              value={options[2] ? options[2] : "None of them"}
              name={id}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => {
                if (e.target.value === correctAnswer) {
                  alert("Correct Answer");
                }
              }}
            />
            <label
              htmlFor={id}
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {options[2] ? options[2] : "None of them"}
            </label>
          </div>
          <div className="flex items-center border-2 p-5 rounded-lg mb-2">
            <input
              id={id}
              type="radio"
              value={options[3] ? options[3] : "None of them"}
              name={id}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => {
                if (e.target.value === correctAnswer) {
                  alert("Correct Answer");
                }
              }}
            />
            <label
              htmlFor={id}
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {options[3] ? options[3] : "None of them"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
