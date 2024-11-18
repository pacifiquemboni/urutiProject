import { TablerIconsProps } from "@tabler/icons-react";
import { MouseEventHandler } from "react";

export {};

declare global {
  type statusType = "pending" | "success" | "error";

  type MenuItem = {
    url?: string;
    title: string;
    protected?: string | string[];
    end?: boolean;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    icon?: (props: TablerIconsProps) => JSX.Element;
  };

  type SideBarITem = {
    items?: MenuItem[];
  } & MenuItem;
}
