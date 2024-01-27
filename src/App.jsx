import "./App.css";
import "./assets/css/inputs.scss";
import "./assets/css/table.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";
import Pages from "./Pages/Pages";
import { config } from "./components/Form/Form";
import axiosConfig from "./config/axios";
import ClientLayout from "./components/ClientLayout";
import ClientPage from "./Pages/ClientPanel/ClientPage";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./assets/css/table.scss";

config(axiosConfig);
function App() {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <Register />,
    },
    {
      path: "/signin",
      element: <Login />,
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
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENTID}>
      <ToastContainer />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;
