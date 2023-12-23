import React, { useState } from 'react'

const CreateHeader = ({ setFieldValue, values }) => {
    const [tableHeader,setTableHeader] = useState("")
    const [error,setError] = useState("")
    const[headerOptions,setHeaderOptions] = useState([])
    const validateForm = () => {
      let tableHeader = "";
      

      if (formDetails.tableHeader === "") {
        tableHeader = "Please enter  a Header";
      }
      

      if (
        tableHeader !== "" 
       
      ) {
        setError(
         
          tableHeader
        );
        return false;
      }
      return true;
    };
  let headers = [];
  return (
    <div>
      <div className="input-container">
        <label className="label">Add Header</label>
        <div className="flex">
          <input
            type="text"
            name="input-table-header"
            className="input"
            onChange={(e) => {
              setTableHeader(e.target.value);
            }}
            value={tableHeader}
            placeholder="Type your option "
            data-fr
          />
          <button
            type="button"
            className="w-[50px] h-[35px] rounded-md  bg-slate-200"
            onClick={() => {
              setHeaderOptions([...headerOptions, tableHeader]);
              setTableHeader("");
            }}
          >
            +
          </button>
        </div>
        <p className="error">{error}</p>
      </div>
      <div className='flex '>
        {headerOptions.map((option, index) => (
          <div
            key={`header_${index}`}
            className="bg-primary rounded-full px-4 py-2 text-white mr-4 "
          >
            {option}
            <button
              type="button"
              className="ml-4 px-2 rounded-[7px] bg-white text-primary"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div>
        <button type='button' className="bg-primary text-white px-4 py-2 rounded-md text-sm">Save</button>

        <button type='button' className="bg-slate-400 text-white px-4 py-2 rounded-lg" data-modal-close>Cancel</button>
      </div>
    </div>
  );
};

export default CreateHeader