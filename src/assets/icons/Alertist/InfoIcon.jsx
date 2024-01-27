const InfoIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      {...props}
    >
      <circle cx="28" cy="28" r="18.5" fill="#90caf9" />
      <path
        fill="none"
        stroke="#18193f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M31.4,41c-2.3,1-4.8,1.5-7.4,1.5C13.8,42.5,5.5,34.2,5.5,24c0-4.5,1.6-8.6,4.2-11.8"
      />
      <path
        fill="none"
        stroke="#18193f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M16.3,7.2c2.3-1.1,5-1.7,7.7-1.7c10.2,0,18.5,8.3,18.5,18.5c0,4-1.3,7.7-3.4,10.7"
      />
      <circle cx="24" cy="16" r="2" fill="#18193f" />
      <line
        x1="24"
        x2="24"
        y1="22.5"
        y2="33.5"
        fill="none"
        stroke="#18193f"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
    </svg>
  );
};

export default InfoIcon;
