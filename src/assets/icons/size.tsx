import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export default function SizeIcon({ className = "", style = {} }: props) {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M12.5113 10.071V3.92902C12.8524 3.84155 13.1643 3.66537 13.4154 3.41838C13.6664 3.17138 13.8476 2.86237 13.9405 2.52271C14.0335 2.18305 14.035 1.82483 13.9447 1.48443C13.8545 1.14403 13.6758 0.833565 13.4268 0.584552C13.1778 0.33554 12.8673 0.156849 12.5269 0.0666205C12.1865 -0.0236079 11.8283 -0.0221606 11.4886 0.0708153C11.149 0.163791 10.84 0.344985 10.593 0.596001C10.346 0.847018 10.1698 1.15892 10.0823 1.50004H3.94037C3.8529 1.15892 3.67672 0.847018 3.42973 0.596001C3.18274 0.344985 2.87372 0.163791 2.53406 0.0708153C2.1944 -0.0221606 1.83619 -0.0236079 1.49579 0.0666205C1.15538 0.156849 0.844917 0.33554 0.595905 0.584552C0.346892 0.833565 0.168201 1.14403 0.077973 1.48443C-0.0122553 1.82483 -0.0108081 2.18305 0.0821678 2.52271C0.175144 2.86237 0.356338 3.17138 0.607354 3.41838C0.85837 3.66537 1.17027 3.84155 1.51139 3.92902V10.071C1.17027 10.1585 0.85837 10.3346 0.607354 10.5816C0.356338 10.8286 0.175144 11.1376 0.0821678 11.4773C-0.0108081 11.8169 -0.0122553 12.1752 0.077973 12.5156C0.168201 12.856 0.346892 13.1664 0.595905 13.4154C0.844917 13.6645 1.15538 13.8432 1.49579 13.9334C1.83619 14.0236 2.1944 14.0222 2.53406 13.9292C2.87372 13.8362 3.18274 13.655 3.42973 13.404C3.67672 13.153 3.8529 12.8411 3.94037 12.5H10.0823C10.1698 12.8411 10.346 13.153 10.593 13.404C10.84 13.655 11.149 13.8362 11.4886 13.9292C11.8283 14.0222 12.1865 14.0236 12.5269 13.9334C12.8673 13.8432 13.1778 13.6645 13.4268 13.4154C13.6758 13.1664 13.8545 12.856 13.9447 12.5156C14.035 12.1752 14.0335 11.8169 13.9405 11.4773C13.8476 11.1376 13.6664 10.8286 13.4154 10.5816C13.1643 10.3346 12.8524 10.1585 12.5113 10.071ZM12.0113 1.00004C12.2091 1.00004 12.4024 1.05869 12.5669 1.16857C12.7313 1.27845 12.8595 1.43463 12.9352 1.61735C13.0109 1.80008 13.0307 2.00114 12.9921 2.19512C12.9535 2.3891 12.8583 2.56728 12.7184 2.70714C12.5786 2.84699 12.4004 2.94223 12.2064 2.98081C12.0124 3.0194 11.8114 2.99959 11.6286 2.92391C11.4459 2.84822 11.2897 2.72005 11.1799 2.5556C11.07 2.39115 11.0113 2.19781 11.0113 2.00003C11.0116 1.73491 11.1171 1.48074 11.3046 1.29327C11.492 1.1058 11.7462 1.00035 12.0113 1.00004ZM1.01139 2.00003C1.01139 1.80225 1.07004 1.60892 1.17992 1.44447C1.2898 1.28002 1.44598 1.15185 1.62871 1.07616C1.81143 1.00047 2.0125 0.980671 2.20648 1.01926C2.40046 1.05784 2.57864 1.15308 2.71849 1.29293C2.85834 1.43278 2.95358 1.61097 2.99217 1.80495C3.03075 1.99892 3.01095 2.19999 2.93526 2.38271C2.85957 2.56544 2.7314 2.72162 2.56695 2.8315C2.40251 2.94138 2.20917 3.00003 2.01139 3.00003C1.74625 2.99976 1.49206 2.89432 1.30458 2.70684C1.1171 2.51937 1.01166 2.26517 1.01139 2.00003ZM2.01139 13C1.81361 13 1.62027 12.9413 1.45582 12.8314C1.29137 12.7215 1.1632 12.5654 1.08751 12.3826C1.01183 12.1999 0.992023 11.9989 1.03061 11.8049C1.06919 11.6109 1.16443 11.4327 1.30428 11.2929C1.44414 11.153 1.62232 11.0578 1.8163 11.0192C2.01028 10.9806 2.21134 11.0004 2.39407 11.0761C2.57679 11.1518 2.73297 11.28 2.84285 11.4444C2.95273 11.6088 3.01138 11.8022 3.01138 12C3.01108 12.2651 2.90562 12.5193 2.71815 12.7067C2.53068 12.8942 2.27651 12.9997 2.01139 13ZM10.0823 11.5H3.94037C3.85082 11.1562 3.67119 10.8425 3.42 10.5914C3.16881 10.3402 2.85515 10.1605 2.51138 10.071V3.92902C2.85513 3.83942 3.16876 3.65977 3.41994 3.40859C3.67113 3.1574 3.85078 2.84377 3.94037 2.50003H10.0823C10.1719 2.8438 10.3515 3.15745 10.6027 3.40865C10.8539 3.65984 11.1676 3.83947 11.5113 3.92902V10.071C11.1675 10.1605 10.8539 10.3401 10.6027 10.5913C10.3515 10.8425 10.1719 11.1562 10.0823 11.5ZM12.0113 13C11.8135 13 11.6202 12.9413 11.4558 12.8314C11.2913 12.7215 11.1631 12.5654 11.0874 12.3826C11.0118 12.1999 10.992 11.9989 11.0305 11.8049C11.0691 11.6109 11.1644 11.4327 11.3042 11.2929C11.4441 11.153 11.6222 11.0578 11.8162 11.0192C12.0102 10.9806 12.2113 11.0004 12.394 11.0761C12.5767 11.1518 12.7329 11.28 12.8428 11.4444C12.9527 11.6088 13.0113 11.8022 13.0113 12C13.011 12.2651 12.9055 12.5192 12.718 12.7067C12.5306 12.8941 12.2764 12.9996 12.0113 13Z"
        fill="currentColor"
      />
    </svg>
  );
}
