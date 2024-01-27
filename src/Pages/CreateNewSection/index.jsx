import React from "react";
import PlusIcon from "../../assets/icons/PlusIcon";
import MenuDots from "../../assets/icons/MenuDots";
import HeroImage from "../../assets/images/dashboardalt.png";
import Pencil from "../../assets/icons/Pencil";
import Trash from "../../assets/icons/Trash";

const CreateSection = () => {
  const CardData = [
    {
      icon: <MenuDots />,
      image: HeroImage,
      Head: "Hero Section",
      Subhead: "left 6 Right 6",
      Editicon: <Pencil />,
      Deleteicon: <Trash />,
    },
  ];
  return (
    <div className="w-full">
      <div>
        <h1 className="text-text_color text-[30px] font-semibold ">
          Create New sections
        </h1>
        <p className="text-sub_text">add,edit,delete sections here</p>
      </div>
      <div className="bg-white w-full p-[15px] rounded-md shadow-md">
        <div className="w-full  flex justify-between items-center ">
          <div className="">
            <label className="mr-2 text-border_color text-[12px]">Name</label>
            <input
              type="text"
              placeholder="Hero Section"
              className="border border-border_color[0/0.32] text-border_color text-[12px] p-1 rounded-sm "
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <div>
              <label className="mr-2 text-border_color text-[12px]">Left</label>
              <input
                type="text"
                placeholder="6"
                className="border border-border_color[0/0.32] text-border_color text-[12px] p-1 rounded-sm max-w-[30px] "
              />
            </div>
            <div>
              <div className="flex items-center justify-center">
                <label className="mr-2 text-border_color text-[12px]">
                  Right
                </label>
                <input
                  type="text"
                  placeholder="6"
                  className="border border-border_color[0/0.32] text-border_color text-[12px] p-1 rounded-sm max-w-[30px] "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-[30px] ">
          <div className="bg-secondary_btn rounded-lg flex items-center justify-center min-h-[270px] ">
            <button
              type="button"
              className="flex justify-center items-center flex-col"
            >
              <div className="w-[30px] h-[30px] rounded-full bg-primary flex justify-center items-center ">
                <PlusIcon className="stroke-white" width="20" />
              </div>
            </button>
          </div>
          <div className="bg-secondary_btn rounded-lg flex items-center justify-center min-h-[270px] ">
            <button
              type="button"
              className="flex justify-center items-center flex-col"
            >
              <div className="w-[30px] h-[30px] rounded-full bg-primary flex justify-center items-center ">
                <PlusIcon className="stroke-white" width="20" />
              </div>
            </button>
          </div>
        </div>
        <div className="w-full mt-4">
          <div className="flex flex-row justify-end items-center gap-2">
            <button className="bg-secondary_btn px-[17px] py-2 rounded-md text-[12px]">
              Cancel
            </button>
            <button className="bg-primary_btn px-[17px] py-2 rounded-md text-white text-[12px]">
              Save
            </button>
          </div>
        </div>

        {CardData.map((card, index) => (
          <div className="w-full flex items-center justify-between" key={index}>
            <div className="flex justify-center items-center gap-6">
              {card.icon}
              <div>
                <img
                  src={card.image}
                  alt="dashboard image"
                  className="w-[150px] h-[100px]"
                />
              </div>
              <div className="flex flex-col gap-1 justify-center items-center">
                <div className="font-semibold text-[17px]">{card.Head}</div>
                <div className="text-border_color text-[13px]">
                  {card.Subhead}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              {card.Editicon}
             {card.Deleteicon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateSection;
