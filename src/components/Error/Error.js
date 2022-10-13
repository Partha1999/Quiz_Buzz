import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center">
      <h2>ERROR 404</h2>
    </div>
  );
};

export default Error;
