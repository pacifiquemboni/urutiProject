import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export default function GiftIcon({ className = "", style = {} }: props) {
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
        d="M11.6408 4.99994H6.12076C5.78076 4.62994 5.79076 4.05994 6.15076 3.69994L7.57076 2.27994C7.94076 1.90994 8.55076 1.90994 8.92076 2.27994L11.6408 4.99994Z"
        stroke="#528FF0"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8696 4.99994H12.3496L15.0696 2.27994C15.4396 1.90994 16.0496 1.90994 16.4196 2.27994L17.8396 3.69994C18.1996 4.05994 18.2096 4.62994 17.8696 4.99994Z"
        stroke="#528FF0"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.93945 10V15.14C8.93945 15.94 9.81945 16.41 10.4895 15.98L11.4295 15.36C11.7695 15.14 12.1995 15.14 12.5295 15.36L13.4195 15.96C14.0795 16.4 14.9695 15.93 14.9695 15.13V10H8.93945Z"
        stroke="#528FF0"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9707 10H3.9707V18C3.9707 21 4.9707 22 7.9707 22H15.9707C18.9707 22 19.9707 21 19.9707 18V10Z"
        stroke="#0D2366"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z"
        stroke="#0D2366"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
