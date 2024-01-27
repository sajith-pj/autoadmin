import React from 'react'


const NewPageModal = () => {

  return (
    <div className="w-full flex justify-center items-center flex-col gap-2">
      <div className="w-full">
        <div className='input-container white-bg'>
          <label className="label">
            Label
          </label>
       
          <input
            type="text"
            placeholder="Enter Project name"
            className="input"
          />
        </div>
      </div>
      <div className="w-full">
        <div className='input-container white-bg'>
          <label className="label">
            Path
          </label>
       
          <input
            type="text"
            placeholder="Enter Project name"
            className="input"
          />
        </div>
        <span className="text-border_color text-[10px] block mt-1">
          Example:/products/page-name
        </span>
      </div>
      <div className="w-full">
        <div className="flex flex-row justify-end items-center gap-2">
          <button
            className="bg-secondary_btn px-[17px] py-2 rounded-md text-[12px]"
            data-modal-close="true"
          >
            Cancel
          </button>
          <button
            className="bg-primary_btn px-[17px] py-2 rounded-md text-white text-[12px]"
            onClick={() => window.location.href="/pages/new"}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPageModal