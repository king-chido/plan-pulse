import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landingpage from "./pages/landing-page/Landingpage";
import UserSignup from "./pages/user-signup-page/UserSignup";
import UserLogin from "./pages/user-login-page/UserLogin";
import Button from "./components/button/Button";

//creating my router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/user-signup",
    element: <UserSignup />,
  },
  {
    path: "user-login",
    element: <UserLogin />,
  },
  {
    path: "btn",
    element: <Button />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
