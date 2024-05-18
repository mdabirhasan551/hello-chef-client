import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Login from "../Login/Login";
import Recipe from "../Recipe/Recipe";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Chef from "../Chef/Chef";
import SingleChef from "../Chef/SingleChef";
import SingleRecipe from "../Recipe/SingleRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/"),
      },
      {
        path: "/chef",
        element: <Chef />,
        loader: () => fetch("http://localhost:5000/chef"),
      },
      {
        path: "chef/:chefId",
        element: <SingleChef />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.chefId}`),
      },
      {
        path: "/recipes",
        element: <Recipe />,
        loader: () => fetch("http://localhost:5000/recipes"),
      },
      {
        path: "/recipes/:recipeId",
        element: <SingleRecipe />,
        loader: ({ params }) =>
        fetch(`http://localhost:5000/recipes/${params.recipeId}`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
