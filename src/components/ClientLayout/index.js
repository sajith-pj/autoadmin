import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const ClientLayout = () => {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const getPageLayout = () => {
      axios.get("/page/layout/").then((response) => {
        setNavLinks(response.data.data);
      });
    };
    getPageLayout();
  });
  return (
    <div className=" flex overflow-hidden h-screen ">
      <Sidebar items={navLinks} />
      <div className="w-full h-full overflow-hidden">
        <div className="p-8 w-full h-[91%] overflow-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
