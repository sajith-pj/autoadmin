import React from 'react'

const Notification = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
  {...props}
    >
      <path
        d="M19.6732 17.5534C19.0303 16.9802 18.4675 16.3232 17.9999 15.6C17.4894 14.6017 17.1834 13.5115 17.0999 12.3934V9.10002C17.1043 7.34376 16.4672 5.64633 15.3084 4.32666C14.1495 3.007 12.5486 2.15592 10.8065 1.93335V1.07335C10.8065 0.837307 10.7128 0.610932 10.5459 0.444025C10.379 0.277117 10.1526 0.18335 9.91654 0.18335C9.68049 0.18335 9.45412 0.277117 9.28721 0.444025C9.12031 0.610932 9.02654 0.837307 9.02654 1.07335V1.94668C7.30004 2.1853 5.71852 3.04152 4.57489 4.35675C3.43126 5.67199 2.80302 7.35711 2.80654 9.10002V12.3934C2.72304 13.5115 2.41705 14.6017 1.90654 15.6C1.44712 16.3216 0.893333 16.9785 0.25987 17.5534C0.188757 17.6158 0.131764 17.6927 0.0926814 17.7789C0.0535988 17.8651 0.033323 17.9587 0.0332031 18.0534V18.96C0.0332031 19.1368 0.103441 19.3064 0.228465 19.4314C0.353489 19.5564 0.523059 19.6267 0.69987 19.6267H19.2332C19.41 19.6267 19.5796 19.5564 19.7046 19.4314C19.8296 19.3064 19.8999 19.1368 19.8999 18.96V18.0534C19.8997 17.9587 19.8795 17.8651 19.8404 17.7789C19.8013 17.6927 19.7443 17.6158 19.6732 17.5534ZM1.41987 18.2934C2.04014 17.6942 2.58627 17.0227 3.04654 16.2934C3.68961 15.0877 4.06482 13.7574 4.14654 12.3934V9.10002C4.1201 8.31871 4.25115 7.54007 4.5319 6.81046C4.81265 6.08086 5.23734 5.41521 5.7807 4.85315C6.32406 4.2911 6.97496 3.84413 7.69466 3.53887C8.41435 3.2336 9.18811 3.07629 9.96987 3.07629C10.7516 3.07629 11.5254 3.2336 12.2451 3.53887C12.9648 3.84413 13.6157 4.2911 14.159 4.85315C14.7024 5.41521 15.1271 6.08086 15.4078 6.81046C15.6886 7.54007 15.8196 8.31871 15.7932 9.10002V12.3934C15.8749 13.7574 16.2501 15.0877 16.8932 16.2934C17.3535 17.0227 17.8996 17.6942 18.5199 18.2934H1.41987Z"
        fill="#FFA412"
      />
    </svg>
  );
}

export default Notification