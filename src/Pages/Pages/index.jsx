import Table from "../../components/Table";
import { creatPageForm } from "../../utils/pageforms/forms";
import DashboardImage from "../../assets/images/Mask group.png";

const Page = () => {
    const tableHeader = [
      { header: "No" },
      {
        header: "image",
        render: () => (
          <img src={DashboardImage} alt="Dashboard" width={30} height={30} />
        ),
      },
      { header: "Name" },
      { header: "path" },
    ];
    const tableRows = [
      {
        No: "1",
        render: () => <img src={DashboardImage} alt="Dashboard" width={30} height={30}/>,
        Name: "Dashboard",
        path: "/",
      },
      {
        No: "1",
        render: () => <img src={DashboardImage} alt="Dashboard Image" />,
        Name: "Dashboard",
        path: "/",
      },
    ];
  return (
    <div>
      <div className="flex  items-start justify-between ">
        <div>
          <h1 className=" text-xl font-semibold ">Your Pages Are Here !!</h1>
          <p className="text-[10px] text-border_color">
            Pages of Selected Panel
          </p>
        </div>
        <div>
          <button className="text-white bg-primary_btn p-[7px] flex items-center justify-center rounded-md text-[12px]">Create New Page</button>
        </div>
      </div>

      <div className="mt-4">
        <Table header={tableHeader} rows={tableRows} />
      </div>
    </div>
  );
};

export default Page;
