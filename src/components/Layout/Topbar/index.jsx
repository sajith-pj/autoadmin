import DownArrow from "../../../assets/icons/DownArrow";
import Notification from "../../../assets/icons/Notification";
import ProfileImage from "../../../assets/images/Rectangle 1393.png";

const Topbar = () => {
  return (
    <div className="shadow-sm border-b-[1px] border-primary  border-opacity-10">
      <div className="w-full h-[65px]">
        <div className="flex justify-end items-center gap-4 pr-3">
          <div className="flex justify-center items-center w-[48px] h-[48px] rounded-md bg-[#FFFAF1] relative">
            <Notification />
            <div className="rounded-[50%] w-[8px] h-[8px] bg-red-500 absolute top-1 right-1"></div>
          </div>
          <div>
         <img src={ProfileImage} alt="profile image" className="w-[50px] h-[50px]"/>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="flex flex-col items-start">
              <h1 className="text-text_color text-[16px]">Musfiq</h1>
              <h1 className="text-border_color text-[14px]">Admin</h1>
            </div>
            <div>
              <DownArrow />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end items-center px-10"></div>
      </div>
    </div>
  );
};

export default Topbar;
