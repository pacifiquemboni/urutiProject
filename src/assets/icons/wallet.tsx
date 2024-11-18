import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export function Cirled({ className = "", style = {} }: props) {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx="20" cy="20.5" r="20" fill="rgb(var(--primary-color), 0.6)" />
      <path
        d="M25.7495 14.55C25.5095 14.51 25.2595 14.5 24.9995 14.5H14.9995C14.7195 14.5 14.4495 14.52 14.1895 14.56C14.3295 14.28 14.5295 14.02 14.7695 13.78L18.0195 10.52C19.3895 9.16 21.6095 9.16 22.9795 10.52L24.7295 12.29C25.3695 12.92 25.7095 13.72 25.7495 14.55Z"
        stroke="var(--primary-color)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 20H27C25.9 20 25 20.9 25 22C25 23.1 25.9 24 27 24H30"
        stroke="var(--primary-color)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 19.5V24.5C30 27.5 28 29.5 25 29.5H15C12 29.5 10 27.5 10 24.5V19.5C10 16.78 11.64 14.88 14.19 14.56C14.45 14.52 14.72 14.5 15 14.5H25C25.26 14.5 25.51 14.51 25.75 14.55C28.33 14.85 30 16.76 30 19.5Z"
        stroke="#C9D5F8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WalletIcon({ className = "", style = {} }: props) {
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
        d="M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.7514 7.05C17.5114 7.01 17.2614 7.00001 17.0014 7.00001H7.00141C6.72141 7.00001 6.45141 7.02001 6.19141 7.06001C6.33141 6.78001 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.79002C17.3714 5.42002 17.7114 6.22 17.7514 7.05Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
