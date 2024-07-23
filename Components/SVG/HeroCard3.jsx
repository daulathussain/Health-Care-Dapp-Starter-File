import React from "react";

const HeroCard3 = () => {
  return (
    <svg
      width={28}
      height={19}
      viewBox="0 0 28 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.875 9.25C21.0787 11.6256 25.1753 16.0091 26.4375 17.5H1V1L10.625 13.375L18.875 9.25Z"
        fill="url(#paint0_linear1)"
      />
      <path
        d="M26.4375 17.5C25.1753 16.0091 21.0787 11.6256 18.875 9.25L10.625 13.375L1 1"
        stroke="white"
        strokeWidth={2}
      />
      <defs>
        <linearGradient
          id="paint0_linear1"
          x1="13.7188"
          y1="3.0625"
          x2="12.6875"
          y2="17.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.73" offset="0.1" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeroCard3;
