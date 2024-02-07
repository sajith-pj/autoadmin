import Accordion from "../../Accordian";

const AddComponents = () => {
  return (
    <div className="grid grid-cols-12 h-sc">
      {/* PREVIEW */}
      <div className="col-span-7"></div>

      {/* SETTINGS */}
      <div className="col-span-5">
        <Accordion title="Section 1">
          <p>This is the content of section 1</p>
        </Accordion>
        <Accordion title="Section 2">
          <p>This is the content of section 2</p>
        </Accordion>
      </div>
    </div>
  );
};

export default AddComponents;
