import DataTable from "../../components/DataTable";
import dashboardAlt from "../../assets/images/dashboardalt.png";
import { Dropdown } from "../../components/Dropdown";
import MenuDots from "../../assets/icons/MenuDots";
import Pencil from "../../assets/icons/Pencil";
import Trash from "../../assets/icons/Trash";
import PlayIcon from "../../assets/icons/PlayIcon";
import { modal } from "../../components/Modal";
import NewPageModal from "../../components/UiComponents/Pages/NewPageModal";
import { get } from "../../config";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { AdminContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();
  const { panel } = useContext(AdminContext);
  const [selectedPanel] = panel;
  let headers = [
    {
      Header: "No",
      accessor: "no",
      className: "w-[7%]",
      Cell: (data) => data.row.index + 1,
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
      Header: "Label",
      accessor: "label",
    },
    {
      Header: "Path",
      accessor: "path",
    },
    {
      Header: "Updated at",
      accessor: "updatedAt",
      Cell: (data) => {
        return (
          <span>
            {moment(data.row.original.updatedAt).startOf("day").fromNow()}
          </span>
        );
      },
    },
    {
      Header: "",
      accessor: "ac",
      Cell: (data) => (
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
                onClick: () => navigate(`/pages/${data.row.original._id}`),
                className:
                  "w-full flex items-center border-b-[1px] border-border_color/[0.32] text-text_color",
              },
              {
                name: "Delete",
                value: 10,
                icon: (
                  <Trash
                    width="15"
                    height="15"
                    className="mr-3 fill-border_color "
                  />
                ),
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

  const [pages, setPages] = useState([]);
  const fetchPages = () => {
    get(`/pages/list/${selectedPanel.value}`).then((response) =>
      setPages(response.data.data)
    );
  };
  const createNewPage = () => {
    modal({
      header: {
        heading: "CREATE NEW PAGE",
      },
      component: <NewPageModal selectedPanel={selectedPanel.value} />,
      onClose: () => fetchPages(),
    });
  };

  useEffect(() => {
    if (selectedPanel && selectedPanel.value && selectedPanel.value !== "")
      fetchPages();
  }, [selectedPanel.value]);
  return (
    <div>
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-text_color text-[30px] font-semibold ">
            Your Pages Are Here!!!
          </h1>
          <p className="text-sub_text">Pages of selected panel</p>
        </div>
      </div>
      <div>
        <DataTable
          columnDef={{
            tableHeaders: headers,
            panelActionButtons: {
              containerClassName: "w-full flex justify-end",
              items: [
                {
                  displayText: "Create New Page",
                  className:
                    "bg-primary px-4 py-2 text-white rounded-[4px] text-sm",
                  onClick: createNewPage,
                },
              ],
            },
          }}
          tableData={pages}
          className="r-table bordered"
          search={false}
          title="Pages"
        />
      </div>
    </div>
  );
};

export default Page;
