import React from 'react'

const NewPageModal = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-2">
      <div className="w-full">
        <div>
          <label className="text-[13px] text-text_color font-semibold">
            Label
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Project name"
            className="text-border_color border border-solid border-border_color[0.32] rounded-sm text-[13px] w-[100%] p-1"
          />
        </div>
      </div>
      <div className="w-full">
        <div>
          <label className="text-[13px] text-text_color font-semibold">
            Path
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Project name"
            className="text-border_color border border-solid border-border_color[0.32] rounded-sm text-[13px] w-[100%] p-1"
          />
        </div>
        <span className="text-border_color text-[10px] ">
          Example:/products/page-name
        </span>
      </div>
      <div className="w-full">
        <div className="flex flex-row justify-end items-center gap-2">
          <button className="bg-secondary_btn px-[17px] py-2 rounded-md text-[12px]" data-modal-close="true">
            Cancel
          </button>
          <button className="bg-primary_btn px-[17px] py-2 rounded-md text-white text-[12px]">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPageModal