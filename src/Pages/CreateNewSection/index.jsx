import { useState } from "react";
import PlusIcon from "../../assets/icons/PlusIcon";
import MenuDots from "../../assets/images/Menu (1).png";
import HeroImage from "../../assets/images/dashboardalt.png";
import Pencil from "../../assets/icons/Pencil";
import Trash from "../../assets/icons/Trash";
import MobileIcon from "../../assets/icons/MobileIcon";
import TabIcon from "../../assets/icons/TabIcon";
import LaptopIcon from "../../assets/icons/LaptopIcon";
import Desktop from "../../assets/icons/Desktop";
import classNames from "classnames";
import { modal } from "../../components/Modal";
import AddComponents from "../../components/UiComponents/Pages/AddComponents";

const CreateSection = () => {
  const CardData = [
    {
      icon: MenuDots,
      image: HeroImage,
      Head: "Hero Section",
      Subhead: "left 6 Right 6",
      Editicon: <Pencil width={20} height={20} />,
      Deleteicon: <Trash width={20} height={20} />,
    },
    {
      icon: MenuDots,
      image: HeroImage,
      Head: "Hero Section",
      Subhead: "left 6 Right 6",
      Editicon: <Pencil width={20} height={20} />,
      Deleteicon: <Trash width={20} height={20} />,
    },
  ];
  const [sections, setSections] = useState([
    {
      breakpoints: {
        sm: 6,
        md: 6,
        lg: 4,
        xl: 6,
      },
    },
    {
      breakpoints: {
        sm: 6,
        md: 6,
        lg: 8,
        xl: 6,
      },
    },
  ]);
  const [selectedSection, setSelectedSection] = useState({
    id: undefined,
    section: {},
  });

  const addNewSection = () => {
    setSections([
      ...sections,
      {
        breakpoints: {
          sm: 6,
          md: 6,
          lg: 4,
          xl: 6,
        },
      },
    ]);
  };

  const deleteSection = () => {
    let afterDeletion = sections.filter(
      (section, index) => index !== selectedSection.id
    );
    setSections(afterDeletion);

    setSelectedSection({
      id: afterDeletion.length > 0 ? afterDeletion.length - 1 : undefined,
      section: afterDeletion[afterDeletion.length - 1],
    });
  };
  const handleBreakPoints = (event) => {
    let secArray = sections;
    secArray[selectedSection.id].breakpoints = {
      ...secArray[selectedSection.id].breakpoints,
      [event.target.name]: event.target.value,
    };
    setSections([...secArray]);
  };

  const addComponents = () => {
    modal({
      header: {
        heading: "Add Components",
      },
      containerClassName: "h-screen",
      component: () => <AddComponents />,
      maxWidth: "95%",
    });
  };

  return (
    <div className="w-full">
      <div>
        <h1 className="text-text_color text-[30px] font-semibold ">
          Create New sections
        </h1>
        <p className="text-sub_text">add,edit,delete sections here</p>
      </div>
      <div className="bg-white w-full p-4 rounded-md shadow-md">
        <div className="w-full   ">
          <div className="input-container white-bg flex items-center max-w-[300px]">
            <label className="mr-2 text-text_color  text-[12px] font-semibold">
              Name
            </label>
            <input type="text" placeholder="Hero Section" className="input" />
          </div>

          <div className="bg-transparent border-t-[1px] border-b-[1px]  border-t-border_color/[0.32] py-2 px-4 rounded-md flex items-center">
            <div className="mr-4 border-r-[1px]  border-r-border_color/[0.32] pr-3">
              <button
                type="button"
                className="p-2 hover:bg-border_color stroke-border_color hover:stroke-white rounded-md transition-colors ease-in-out duration-200"
                onClick={addNewSection}
              >
                <PlusIcon className="stroke-inherit" />
              </button>
            </div>
            <div className="mr-4 border-r-[1px]  border-r-border_color/[0.32] pr-3">
              <button
                type="button"
                className="px-4 py-3 hover:bg-border_color fill-border_color hover:fill-white rounded-md transition-colors ease-in-out duration-200"
                onClick={deleteSection}
              >
                <Trash width="10" className="stroke-inherit fill-inherit" />
              </button>
            </div>

            {selectedSection.id !== undefined && (
              <>
                <div className=" white-bg flex items-center max-w-[300px]">
                  <label className="mr-2 text-sub_text  text-[12px] font-semibold">
                    <MobileIcon width="25" />
                  </label>
                  <input
                    type="number"
                    name="sm"
                    onChange={handleBreakPoints}
                    className=" rounded-md border-[1px] border-border_color/[0.32] bg-transparent px-2 py-1 max-w-[5ch]"
                    placeholder="6"
                    value={sections[selectedSection.id].breakpoints.sm}
                  />
                </div>

                <div className=" white-bg flex items-center max-w-[300px] ml-4">
                  <label className="mr-2 text-sub_text  text-[12px] font-semibold">
                    <TabIcon width="25" />
                  </label>
                  <input
                    type="number"
                    name="md"
                    onChange={handleBreakPoints}
                    className=" rounded-md border-[1px] border-border_color/[0.32] bg-transparent px-2 py-1 max-w-[5ch]"
                    placeholder="6"
                    value={sections[selectedSection.id].breakpoints.md}
                  />
                </div>
                <div className=" white-bg flex items-center max-w-[300px] ml-4">
                  <label className="mr-2 text-sub_text  text-[12px] font-semibold">
                    <LaptopIcon width="30" />
                  </label>
                  <input
                    type="number"
                    name="lg"
                    onChange={handleBreakPoints}
                    className=" rounded-md border-[1px] border-border_color/[0.32] bg-transparent px-2 py-1 max-w-[5ch]"
                    placeholder="6"
                    value={sections[selectedSection.id].breakpoints.lg}
                  />
                </div>
                <div className=" white-bg flex items-center max-w-[300px] ml-4">
                  <label className="mr-2 text-sub_text  text-[12px] font-semibold">
                    <Desktop width="20" />
                  </label>
                  <input
                    type="number"
                    name="xl"
                    onChange={handleBreakPoints}
                    className=" rounded-md border-[1px] border-border_color/[0.32] bg-transparent px-2 py-1 max-w-[5ch]"
                    placeholder="6"
                    value={sections[selectedSection.id].breakpoints.xl}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-[30px] ">
          {sections.map((section, index) => (
            <div
              key={index}
              role="button"
              className={classNames(
                "bg-secondary_btn rounded-lg flex items-center justify-center min-h-[270px] hover:border-[1px] hover:border-primary",
                selectedSection.id === index && "border-[1px] border-primary",
                ` col-span-${section.breakpoints.sm}
                sm:col-span-${section.breakpoints.sm} 
                md:col-span-${section.breakpoints.md} 
                lg:col-span-${section.breakpoints.lg} 
                xl:col-span-${section.breakpoints.xl}`
              )}
              onClick={() =>
                setSelectedSection({
                  ...selectedSection,
                  id: index,
                  section: section,
                })
              }
            >
              <button
                type="button"
                className="flex justify-center items-center flex-col"
              >
                <button
                  type="button"
                  className="w-[30px] h-[30px] rounded-full bg-primary flex justify-center items-center "
                  onClick={addComponents}
                >
                  <PlusIcon className="stroke-white" width="20" />
                </button>
              </button>
            </div>
          ))}
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
      </div>

      {CardData.map((card, index) => (
        <div
          className=" mt-4 bg-white w-full flex items-center justify-between"
          key={index}
        >
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
  );
};

export default CreateSection;
