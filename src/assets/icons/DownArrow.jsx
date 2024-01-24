import React from 'react'

const DownArrow = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="#151D48"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default DownArrow