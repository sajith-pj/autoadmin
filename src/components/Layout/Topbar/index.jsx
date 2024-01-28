import { useContext } from "react";
import DownArrow from "../../../assets/icons/ChevronArrow";
import MenuIcon from "../../../assets/icons/MenuIcon";
import Notification from "../../../assets/icons/Notification";
import ProfileImage from "../../../assets/images/Rectangle 1393.png";
import { AdminContext } from "../../../context";
import { Dropdown } from "../../Dropdown";
import Logout from "../../../assets/icons/Logout";

const Topbar = ({ cycleOpen }) => {
  const { profile } = useContext(AdminContext);
  const [userProfile] = profile;
  return (
    <div className="shadow-sm border-b-[1px] border-primary  border-opacity-10">
      <div className="w-full  flex justify-between items-center gap-4 p-4">
        <div>
          <button type="button" onClick={cycleOpen}>
            <MenuIcon width="25" className="fill-primary stroke-primary" />
          </button>
        </div>
        <div className=" flex justify-center items-center gap-x-4">
          <button className=" px-4 py-3 rounded-md bg-[#FFFAF1] relative">
            <Notification width="15" />
            <div className="rounded-[50%] w-[8px] h-[8px] bg-red-500 absolute top-1 right-1"></div>
          </button>
          <div>
            <img
              src={userProfile.photo || ProfileImage}
              alt="profile image"
              className="w-[30px] h-[40px] rounded-[10px]"
            />
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="flex flex-col items-start">
              <h1 className="text-text_color text-[14px]">
                {userProfile.name}
              </h1>
              <h1 className="text-border_color text-[13px]">Admin</h1>
            </div>
            <div>
              <Dropdown
                button={{
                  render: () => <DownArrow />,
                }}
                optionsContainerClassName="bg-white shadow-md shadow-[#eeeeee] right-0 top-[30px] w-[250px] text-[14px]"
                optionsList={[
                  {
                    name: "Profile",
                    icon: (
                      <Logout width="20" className="fill-border_color mr-3" />
                    ),
                    className:
                      "w-full flex items-center border-b-[1px] border-border_color/[0.32] text-sub_text py-4 px-4",
                  },
                  {
                    name: "Change Password",
                    icon: (
                      <Logout width="20" className="fill-border_color mr-3" />
                    ),
                    className:
                      "w-full flex items-center border-b-[1px] border-border_color/[0.32] text-sub_text py-4 px-4",
                  },
                  {
                    name: "Logout",
                    icon: (
                      <Logout width="20" className="fill-border_color mr-3 " />
                    ),
                    className: "w-full flex items-center text-sub_text py-4 px-4",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
