import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home";
import ChefRecipes from "../components/ChefRecipes";
import Login from "../components/Login";
import Register from "../components/Register";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () =>
          fetch("https://chef-recipe-server-shariarmdimtiaz.vercel.app/chefs"),
      },
      {
        path: "/chef-recipes/:chefId",
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-server-shariarmdimtiaz.vercel.app/chefs/${params.chefId}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
