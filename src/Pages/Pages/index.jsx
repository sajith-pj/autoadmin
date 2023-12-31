import Form from "../../components/Form/Form";
import { creatPageForm } from "../../utils/pageforms/forms";
const Page = () => {
  return (
    <div>
      <h1 className="text-primary text-xl font-semibold font-oswald">
        Create Your Page
      </h1>
      <div className="mt-4">
        <Form {...creatPageForm} />
      </div>
    </div>
  );
};

export default Page;
