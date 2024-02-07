import { useContext, useEffect } from "react";
import PlusIcon from "../../assets/icons/PlusIcon";
import Naac from "../../assets/images/dashboardalt.png";
import { modal } from "../../components/Modal";
import CreatePanelModal from "../../components/UiComponents/Dasboard/CreatePanel/CreatePanelModal";
import { get } from "../../config";
import { AdminContext } from "../../context";

const Dashboard = () => {
  const { panel, profile, panelList } = useContext(AdminContext);
  const [, setSelectedPanel] = panel;
  const [userProfile] = profile;
  const [panels, setPanels] = panelList;

  const fetchPanels = () => {
    get("/panel/list/").then((response) => {
      setPanels(response.data.data);
    });
  };
  const createAdminPanel = () => {
    modal({
      maxWidth: 600,
      component: () => <CreatePanelModal />,
      header: {
        heading: `CREATE ADMIN PANEL`,
      },
      onClose: () => fetchPanels(),
    });
  };
  const selectPanel = (id) => {
    let selectedPanelFromList = panels.find((panel) => panel._id === id);
    setSelectedPanel({
      label: selectedPanelFromList.name,
      value: selectedPanelFromList._id,
    });
    localStorage.setItem(
      "lastSelectedPanel",
      JSON.stringify({
        label: selectedPanelFromList.name,
        value: selectedPanelFromList._id,
      })
    );
  };
  useEffect(() => {
    fetchPanels();
  }, []);
  return (
    <div>
      <div className="my-2 pb-1 text-text_color text-[23px] font-semibold">
        <h1>Welcome Back ! {userProfile?.name}</h1>
      </div>
      <div className=" bg-white rounded-[16px] shadow-md shadow-[#eeeeee]  p-[25px] w-full ">
        <div className="flex flex-col justify-start items-start mb-4 ">
          <p className="text-text_color font-semibold text-[16px]">
            Recent Panels
          </p>
          <p className="text-sub_text text-[13px]">Your Recent Admin Panels</p>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-6">
          {panels.map(({ name, logo, _id }, index) => (
            <div
              role="button"
              key={`panel_${index}`}
              className="w-full max-w-[230px] h-[160px] border border-border_color/[0.32] rounded-lg shadow-md relative overflow-hidden cursor-pointer"
              onClick={() => selectPanel(_id)}
            >
              <div className=" bg-gradient-to-b from-white w-full absolute top-0 left-0  px-3 py-2">
                <h1 className="text-text_color font-semibold text-[14px] uppercase ">
                  {name}
                </h1>
              </div>
              <img
                src={logo || Naac}
                alt="Naac dashboard"
                className="w-[100%] h-[100%]  "
              />
            </div>
          ))}
          <div className="w-full max-w-[230px] h-[160px] border border-border_color/[0.32] rounded-lg shadow-md relative overflow-hidden flex justify-center items-center">
            <button
              type="button"
              className="flex justify-center items-center flex-col"
              onClick={createAdminPanel}
            >
              <div className="w-[50px] h-[50px] rounded-full bg-primary flex justify-center items-center ">
                <PlusIcon className="stroke-white" width="25" />
              </div>
              <p className="text-text_color font-semibold mt-2">CREATE</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
