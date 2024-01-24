import { Link } from "react-router-dom";
import { modal } from "../../components/Modal";
import CreatePanel from "../../components/CreatePanel";
import { useEffect } from "react";
import Naac from "../../assets/images/Mask group.png";

const Dashboard = (props) => {
  return (
    <div>
      <div className="my-2 pb-1 text-text_color text-[23px] font-semibold">
        <h1>Welcome Back ! Arjun</h1>
      </div>
      <div className=" bg-white rounded-[16px] shadow-md shadow-[#eeeeee]  p-[25px] w-full ">
        <div className="flex flex-col justify-start items-start mb-4 ">
          <p className="text-text_color font-semibold text-[16px]">
            Recent Panels
          </p>
          <p className="text-sub_text text-[13px]">Your Recent Admin Panels</p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
          <div className="w-[230px] h-[160px] border border-border_color/[0.32] p-6 rounded-lg shadow-md relative ">
            <h1 className="text-text_color font-semibold text-[20px] absolute top-0 z-10">
              EASY NAAC PRO
            </h1>
            <img
              src={Naac}
              alt="Naac dashboard"
              className="w-[100%] h-[100%]  absolute top-0 left-0 z-0"
            />
          </div>
          <div className="w-[230px] h-[160px] border border-border_color/[0.32] p-6 rounded-lg shadow-md relative ">
            <h1 className="text-text_color font-semibold text-[20px] absolute top-0 z-10">
              RELIVA GLOBALS
            </h1>
            <img
              src={Naac}
              alt="Naac dashboard"
              className="w-[100%] h-[100%]  absolute top-0 left-0 z-0"
            />
          </div>
          <div className="w-[230px] h-[160px] border border-border_color/[0.32]  p-6 rounded-lg shadow-md relative ">
            <h1 className="text-text_color font-semibold text-[20px] absolute top-0 z-10">
              ADMIN STATION
            </h1>
            <img
              src={Naac}
              alt="Naac dashboard"
              className="w-[100%] h-[100%]  absolute top-0 left-0 z-0"
            />
          </div>
          <div className="w-[230px] h-[160px] border border-border_color/[0.32] p-6 rounded-lg shadow-md relative ">
            <h1 className="text-text_color font-semibold text-[20px] absolute top-0 z-10">
              PANELIST
            </h1>
            <img
              src={Naac}
              alt="Naac dashboard"
              className="w-[100%] h-[100%]  absolute top-0 left-0 z-0"
            />
          </div>
          <div className="w-[230px] h-[150px] border border-border_color/[0.32] p-4 rounded-lg  flex justify-center items-center shadow-md">
            <CreatePanel />
            {/* <PlusIcon width="100" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
