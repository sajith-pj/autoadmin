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
import ClientLayout from "./components/ClientLayout";
import ClientPage from "./Pages/ClientPanel/ClientPage";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./assets/css/table.scss";
import CreateSection from "./Pages/CreateNewSection";
import { AdminContextProvider } from "./context";
import { axios } from "./config";
config({ axios });

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
        {
          path: "/pages/:id",
          element: <CreateSection />,
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
      <AdminContextProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </AdminContextProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
