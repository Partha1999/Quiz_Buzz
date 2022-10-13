import React from "react";

const Blog = () => {
  return (
    <div className="text-center mt-20">
      <div className="border-2 p-5 shadow-lg mb-5 ">
        <h1 className="mb-5">what is the purpose of react router?</h1>
        <p>
          Ans:React Router is a standard library for routing in React. It
          enables the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL. Let us create a simple application to React to
          understand how the React Router works
        </p>
      </div>
      <div className="border-2 p-5 shadow-lg mb-5">
        <h1 className="mb-5">How does contest API work?</h1>
        <p>
          Ans:The React Context API is a way for a React app to effectively
          produce global variables that can be passed around. This is the
          alternative to "prop drilling" or moving props from grandparent to
          child to parent, and so on. Context is also touted as an easier,
          lighter approach to state management using Redux.
        </p>
      </div>
      <div className="border-2 p-5 shadow-lg mb-5">
        <h1 className="mb-5">what is useref hook and how does it works?</h1>
        <p>
          Ans:The useRef is a hook that allows to directly create a reference to
          the DOM element in the functional component.How does useRef hook work?
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
  );
};

export default Blog;
