import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";
import Pages from "./Pages/Pages";
import { config } from "./components/Form/Form";
import axiosConfig from "./config/axios";
import ClientLayout from "./components/ClientLayout";
import ClientPage from "./Pages/ClientPanel/ClientPage";
config(axiosConfig);
function App() {
  const router = createBrowserRouter([
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
  return <RouterProvider router={router} />;
}

export default App;
