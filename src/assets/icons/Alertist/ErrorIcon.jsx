const ErrorIcon = (props) => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.3403 14.7871L13.3403 30.7871"
        stroke="#F31717"
        strokeWidth="3.61702"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3403 14.7871L31.3403 30.7871"
        stroke="#F31717"
        strokeWidth="3.61702"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="22.5"
        cy="22.5"
        r="20.6915"
        stroke="#F31717"
        strokeWidth="3.61702"
      />
    </svg>
  );
};

export default ErrorIcon;
