import DataTable from "../../components/DataTable";
import dashboardAlt from "../../assets/images/dashboardalt.png";
import { Dropdown } from "../../components/Dropdown";
import MenuDots from "../../assets/icons/MenuDots";
import Pencil from "../../assets/icons/Pencil";
import Trash from "../../assets/icons/Trash";
import PlayIcon from "../../assets/icons/PlayIcon";
import { modal } from "../../components/Modal";
import NewPageModal from "../../components/UiComponents/Pages/NewPageModal";


const Page = () => {

  let headers = [
    {
      Header: "No",
      accessor: "no",
      className: "w-[7%]",
    },
    {
      Header: "",
      accessor: "image",
      className: "w-[20%]",
      Cell: () => (
        <div className="flex justify-center items-center">
          <img src={dashboardAlt} width="90" />
        </div>
      ),
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Path",
      accessor: "path",
    },
    {
      Header: "",
      accessor: "ac",
      Cell: () => (
        <div className="flex  items-center">
          <Dropdown
            button={{
              render: () => (
                <MenuDots
                  width="20"
                  height="20"
                  className="stroke-border_color"
                />
              ),
            }}
            optionsList={[
              {
                name: "Edit",
                value: 10,
                icon: (
                  <Pencil width="15" className="mr-3 stroke-border_color" />
                ),
                className:
                  "w-full flex items-center border-b-[1px] border-border_color/[0.32] text-text_color",
              },
              {
                name: "Delete",
                value: 10,
                icon: <Trash width="15" height="15" className="mr-3 fill-border_color " />,
                className: "w-full flex items-center text-text_color",
              },
            ]}
            optionsContainerClassName="bg-white shadow-md shadow-[#eeeeee] right-0 w-[100px]"
          />
          <button type="button" className=" ml-4 px-3 py-2">
            <PlayIcon width="20" className=" fill-border_color" />
          </button>
        </div>
      ),
    },
  ];
  let tableData = [
    {
      no: "1",
      name: "Dashboard",
      path: "/",
    },
    {
      no: "2",
      name: "Products",
      path: "/products",
    },
    {
      no: "3",
      name: "Add Products",
      path: "/add-products",
    },
    {
      no: "4",
      name: "Add Products",
      path: "/add-products",
    },
    {
      no: "4",
      name: "Add Products",
      path: "/add-products",
    },
  ];
  
  const createNewPage = ()=>{
  modal({header:{
  heading:"CREATE NEW PAGE"
  },
  component:<NewPageModal />
  
  })
 
    }


  return (
    <div>
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-text_color text-[30px] font-semibold ">
            Your Pages Are Here!!!
          </h1>
          <p className="text-sub_text">Pages of selected panel</p>
        </div>
        <div>
          <button
            type="button"
            className="bg-primary px-4 py-2 text-white rounded-[4px] text-sm"
           onClick={createNewPage}
          >
            Create New Page
          </button>
        </div>
      </div>
      <div>
        <DataTable
          columnDef={{ tableHeaders: headers }}
          tableData={tableData}
          className="r-table bordered"
          search={false}
          title="Pages"
        />
      </div>
    </div>
  );
};

export default Page;
