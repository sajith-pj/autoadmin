"use client";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useCycle } from "framer-motion";
import { get } from "../../config";
import { AdminContext } from "../../context";

const Layout = () => {
  const { profile } = useContext(AdminContext);
  const [, setUserProfile] = profile;
  const navigate = useNavigate();
  const [open, cycleOpen] = useCycle(false, true);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/signin");

    const fetchUserProfile = async () => {
      try {
        const response = await get("/profile");
        setUserProfile(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <div className=" flex overflow-hidden h-screen ">
      <Sidebar open={open} cycleOpen={cycleOpen} />
      <div className="w-full h-full overflow-hidden">
        <Topbar cycleOpen={cycleOpen} />
        <div className="p-8 w-full h-[91%] overflow-auto bg-secondary_bg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
