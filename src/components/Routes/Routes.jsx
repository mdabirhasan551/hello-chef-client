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
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://hello-chef-7j1tgszih-md-abir-hasans-projects.vercel.app"
          ),
      },
      {
        path: "/chef",
        element: <Chef />,
        loader: () =>
          fetch(
            "https://hello-chef-7j1tgszih-md-abir-hasans-projects.vercel.app/chef"
          ),
      },
      {
        path: "chef/:chefId",
        element: (
          <PrivateRoutes>
            <SingleChef />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hello-chef-7j1tgszih-md-abir-hasans-projects.vercel.app/chef/${params.chefId}`
          ),
      },
      {
        path: "/recipes",
        element: (
          <PrivateRoutes>
            <Recipe />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch(
            "https://hello-chef-7j1tgszih-md-abir-hasans-projects.vercel.app/recipes"
          ),
      },
      {
        path: "/recipes/:recipeId",
        element: (
          <PrivateRoutes>
            <SingleRecipe />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hello-chef-7j1tgszih-md-abir-hasans-projects.vercel.app/recipes/${params.recipeId}`
          ),
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
