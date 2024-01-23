import { Link } from "react-router-dom";
import { modal } from "../../components/Modal";
import CreatePanel from "../../components/CreatePanel";
import { useEffect } from "react";

const Dashboard = (props) => {
  return (
    <div className="flex gap-x-5">
      <div className="w-[300px] h-[150px] border border-slate-400 p-4 rounded-lg shadow-md">
        <h1>Panel Name</h1>
      </div>
      <div className="w-[300px] h-[150px] border border-slate-400 p-4 rounded-lg shadow-md flex justify-center items-center shadow-md">
        <CreatePanel />
        {/* <PlusIcon width="100" /> */}
      </div>
    </div>
  );
};

export default Dashboard;
