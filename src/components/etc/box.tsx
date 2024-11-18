// import ThreeCircleIcon from "@/assets/icons/threeCircles";
import { ReactNode } from "react";

type props = {
  title: ReactNode | string;
  children?: ReactNode;
  className?: string;
};
export function Box({ title, children, className = "" }: props) {
  return (
    <>
      <div
        className={`flex flex-col gap-4 px-4 py-6 rounded-lg bg-light-grey bg-opacity-40 ${className}`}
      >
        <div className="flex gap-2 justify-between">
          <h3>{title}</h3>
          {/* <ThreeCircleIcon /> */}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
