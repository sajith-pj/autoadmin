import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";
import Pages from "./Pages/Pages";
import { config } from "./components/Form/Form";
import axiosConfig from "./config/axios";
import ClientLayout from "./components/ClientLayout";
import ClientPage from "./Pages/ClientPanel/ClientPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

config(axiosConfig);
function App() {
  const router = createBrowserRouter([
    {
    path:"/register",
    element:<Register />
    },
    {
    path:"/login",
    element:<Login />
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/pages",
          element: <Pages />,
        },
      ],
    },
    {
      path: "/client",
      element: <ClientLayout />,
      children: [
        {
          path: "/client/",
          element: <ClientPage />,
        },
      ],
    },
  ]);
  return (
    <GoogleOAuthProvider clientId="858610154745-pvoetcmoqcsu81opumtj2l0cn9mt3n7m.apps.googleusercontent.com">
      <RouterProvider router={router} />;
    </GoogleOAuthProvider>
  ); 
}

export default App;
