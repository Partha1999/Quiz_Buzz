import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/Main/Main";
import Topics from "./components/Topics/Topics";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
// import { element } from "prop-types";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Dataload from "./components/Dataload/Dataload";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "/Topics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Statistics></Statistics>,
        },
        {
          path: "/Blog",
          element: <Blog></Blog>,
        },
        {
          path: "/cart/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Dataload></Dataload>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
