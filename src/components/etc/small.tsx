import { ReactNode } from "react";

type smallProp = {
  children: ReactNode;
  className?: string;
};
export function Small({ children, className = "" }: smallProp) {
  return (
    <small className={`p-1 bg-purple-500 bg-opacity-10 rounded-md text-primary ${className}`}>
      {children}
    </small>
  );
}
