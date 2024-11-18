import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export function ShowIcon({ className = "", style = {} }: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      style={style}
    >
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6346 10.0442C12.6346 11.4992 11.4546 12.6783 9.99965 12.6783C8.54465 12.6783 7.36548 11.4992 7.36548 10.0442C7.36548 8.58835 8.54465 7.40918 9.99965 7.40918C11.4546 7.40918 12.6346 8.58835 12.6346 10.0442Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99842 16.129C13.1717 16.129 16.0742 13.8473 17.7084 10.044C16.0742 6.24065 13.1717 3.95898 9.99842 3.95898H10.0017C6.82841 3.95898 3.92591 6.24065 2.29175 10.044C3.92591 13.8473 6.82841 16.129 10.0017 16.129H9.99842Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
