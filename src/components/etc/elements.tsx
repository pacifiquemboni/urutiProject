import { ReactNode } from "react";

export function Sb({ children }: { children: ReactNode }) {
  return (
    <small>
      <b>({children})</b>
    </small>
  );
}
