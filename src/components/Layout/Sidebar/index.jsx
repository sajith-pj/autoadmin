import { useNavigate } from "react-router-dom";
import Dashboard from "../../../assets/icons/Dashboard";
import Settings from "../../../assets/icons/Settings";
import Pages from "../../../assets/icons/Pages";
import DummyLogo from "../../../assets/icons/DummyLogo";

const Sidebar = () => {
  const navigate = useNavigate();
  const items = [
    {
      icon: <Dashboard width="20" />,
      title: "Dashboard",
      link: "/",
    },
    {
      icon: <Pages width="20" />,
      title: "Pages",
      link: "/pages",
    },
    {
      icon: <Settings width="20" />,
      title: "Settings",
      link: "/settings",
    },
  ];
  const navigateToHref = (link) => {
    navigate(link);
  };
  return (
    <div
      className="fixed lg:relative w-full max-w-[300px] bg-white-500  h-full border-r-[1px] border-primary border-opacity-30 shadow-sm"
      style={{ backgroundColor: "white" }}
    >
      {/* <img src="/sigi.png" alt="LOGO" className="w-[130px]" /> */}
      <div className="flex gap-3 justify-center items-center h-[65px] ">
        <DummyLogo width={35} height={35} />
        <p className="font-bold ">
          AUTO <span className="text-primary">ADMIN</span>
        </p>
      </div>
      <ul className="w-full px-5 py-9">
        {items.map((data, index) => {
          console.log(window.location.pathname == data.link);
          return (
            <li className="mb-4 flex justify-center" key={index}>
              <button
                type="button"
                onClick={() => navigateToHref(data.link)}
                className={` w-full flex justify-start items-center px-6 py-2 rounded-[7px] hover:shadow-sm text-sub_text ${
                  window.location.pathname == data.link
                    ? "bg-primary text-white shadow-sm fill-white"
                    : "hover:bg-primary hover:bg-opacity-10 fill-border_color"
                } `}
              >
                {data.icon}
                <span className="ml-4 text-[14px] font-semibold tracking-wider ">
                  {data.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
