import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export default function SendIcon({ className = "", style = {} }: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M9.01001 22.01H15.01C20.01 22.01 22.01 20.01 22.01 15.01V9.01001C22.01 4.01001 20.01 2.01001 15.01 2.01001H9.01001C4.01001 2.01001 2.01001 4.01001 2.01001 9.01001V15.01C2.01001 20.01 4.01001 22.01 9.01001 22.01Z"
        stroke="#0D2366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5998 7.69019H14.8398V11.9402"
        stroke="#528FF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8399 7.69019L9.17993 13.3502"
        stroke="#528FF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 16.5098C9.89 17.8098 14.11 17.8098 18 16.5098"
        stroke="#528FF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
