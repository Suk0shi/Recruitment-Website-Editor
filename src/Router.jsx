import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Opportunities from "./pages/Opportunities";
import Services from "./pages/Services";
import Login from "./pages/Login";
// import ErrorPage from "./ErrorPage";

const Router = () => {

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
      element: <Opportunities />,
    },
    {
      path: "Services",
      element: <Services />,
    },
    {
      path: "Login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;