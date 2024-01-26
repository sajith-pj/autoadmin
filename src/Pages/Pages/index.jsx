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
      <h1 className="text-primary text-xl font-semibold font-oswald">
        Create Your Page
      </h1>
      <div className="mt-4">
        <Table header={tableHeader} rows={tableRows} />
      </div>
    </div>
  );
};

export default Page;
