import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";
import Pages from "./Pages/Pages";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
