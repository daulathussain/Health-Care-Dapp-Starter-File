import React from "react";

const Steps = () => {
  return (
    <div className="step-bar-wrapper">
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter
            id="inset-shadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feComponentTransfer in="SourceAlpha">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="1.2" />
            <feOffset dx={0} dy="0.5" result="offsetblur" />
            <feFlood floodColor="rgba(0, 0, 0, 0.5)" result="color" />
            <feComposite in2="offsetblur" operator="in" />
            <feComposite in2="SourceAlpha" operator="in" />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode />
            </feMerge>
          </filter>
          <symbol id="icon-left" viewBox="0 0 61 32">
            <title>left</title>
            <path
              id="first"
              fill="#ececec"
              d="M59.992 13.423h-23.73c-2.481 0-4.708-1.527-5.726-3.817-2.608-5.726-8.652-9.543-15.459-8.843-7.316 0.763-13.233 6.871-13.678 14.251-0.573 8.907 6.489 16.223 15.268 16.223 6.235 0 11.579-3.69 13.932-9.034 1.018-2.29 3.372-3.69 5.853-3.69h23.539v-5.089z"
            />
          </symbol>
          <symbol id="icon-mid" viewBox="0 0 89 32">
            <title>mid</title>
            <path
              id="mid"
              fill="#ececec"
              d="M64.26 13.501c-2.531 0-4.803-1.558-5.842-3.895-2.272-4.868-6.945-8.373-12.592-8.957-0.065 0-0.065 0-0.13 0s-0.065 0-0.13 0c-0.325 0-0.584-0.065-0.909-0.065-0.195 0-0.389 0-0.519 0-0.195 0-0.389 0-0.519 0-0.325 0-0.584 0-0.909 0.065-0.065 0-0.065 0-0.13 0s-0.065 0-0.13 0c-5.582 0.584-10.32 4.089-12.527 9.022-1.039 2.337-3.31 3.895-5.842 3.895h-24.146v5.193h24.016c2.531 0 4.933 1.428 5.972 3.765 2.207 4.998 6.945 8.568 12.592 9.152 0 0 0.065 0 0.065 0 0.195 0 0.454 0.065 0.649 0.065 0.26 0 0.454 0 0.714 0 0.065 0 0.13 0 0.195 0 0 0 0 0 0.065 0 0 0 0 0 0.065 0s0.13 0 0.195 0c0.26 0 0.454 0 0.714 0 0.195 0 0.454 0 0.649-0.065 0 0 0.065 0 0.065 0 5.647-0.584 10.385-4.154 12.592-9.152 1.039-2.337 3.44-3.765 5.972-3.765h24.016v-5.193h-24.211z"
            />
          </symbol>
          <symbol id="icon-right" viewBox="0 0 61 32">
            <title>right</title>
            <path
              id="last"
              fill="#ececec"
              d="M1.4 13.423h23.666c2.481 0 4.708-1.527 5.726-3.817 2.608-5.726 8.652-9.543 15.459-8.843 7.38 0.763 13.233 6.871 13.678 14.251 0.573 8.907-6.489 16.223-15.268 16.223-6.235 0-11.579-3.69-13.932-9.034-1.018-2.29-3.372-3.69-5.853-3.69h-23.539v-5.089z"
            />
          </symbol>
        </defs>
      </svg>
      <ul className="step-wrapper">
        <li className="completed">
          <a>
            <svg className="icon icon-left ">
              <use xlinkHref="#icon-left" />
            </svg>
          </a>
        </li>
        <li className="active">
          <a>
            <svg className="step step-mid">
              <use xlinkHref="#icon-mid" />
            </svg>
          </a>
        </li>

        <li className="">
          <a>
            <svg className="step step-right">
              <use xlinkHref="#icon-right" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Steps;
