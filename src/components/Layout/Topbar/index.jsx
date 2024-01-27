import DownArrow from "../../../assets/icons/ChevronArrow";
import MenuIcon from "../../../assets/icons/MenuIcon";
import Notification from "../../../assets/icons/Notification";
import ProfileImage from "../../../assets/images/Rectangle 1393.png";

const Topbar = ({ cycleOpen }) => {
  return (
    <div className="shadow-sm border-b-[1px] border-primary  border-opacity-10">
      <div className="w-full  flex justify-between items-center gap-4 p-4">
        <div>
          <button type="button" onClick={cycleOpen}>
            <MenuIcon width="25" className="fill-primary stroke-primary" />
          </button>
        </div>
        <div className=" flex justify-center items-center gap-x-4">
          <div className="flex justify-center items-center w-[48px] h-[48px] rounded-md bg-[#FFFAF1] relative">
            <Notification width="15" />
            <div className="rounded-[50%] w-[8px] h-[8px] bg-red-500 absolute top-1 right-1"></div>
          </div>
          <div>
            <img
              src={ProfileImage}
              alt="profile image"
              className="w-[30px] h-[40px]"
            />
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="flex flex-col items-start">
              <h1 className="text-text_color text-[14px]">Musfiq</h1>
              <h1 className="text-border_color text-[13px]">Admin</h1>
            </div>
            <div>
              <DownArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
