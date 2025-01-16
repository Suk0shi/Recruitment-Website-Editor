import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Opportunities from "./pages/Opportunities";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import Unpublished from "./pages/unpublished";
import { useState } from 'react'
// import ErrorPage from "./ErrorPage";

const Router = () => {

  const [editInfo, setEditInfo] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      // errorElement: <ErrorPage />,
    },
    {
      path: "About",
      element: <About />,
    },
    {
      path: "Contact",
      element: <Contact />,
    },
    {
      path: "Opportunities",
      element: <Opportunities setEditInfo={setEditInfo}/>,
    },
    {
      path: "Services",
      element: <Services />,
    },
    {
      path: "SignUp",
      element: <SignUp />,
    },
    {
      path: "Login",
      element: <Login />,
    },
    {
      path: "CreatePost",
      element: <CreatePost/>,
    },
    {
      path: "UpdatePost",
      element: <UpdatePost editInfo={editInfo}/>,
    },
    {
      path: "Unpublished",
      element: <Unpublished setEditInfo={setEditInfo}/>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;