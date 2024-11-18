import { Link, useLocation } from "react-router-dom";
import Timer from "@/components/etc/Timer";
import { useAppSelector } from "@/redux/hook";
import DropDown from "@/components/dropdown";
import { IconHome } from "@tabler/icons-react";
import LogoutButton from "@/components/etc/LogoutButton";
import {
  DASHBOARD_PRODUCTS_ROUTE,
  DASHBOARD_ROUTE,
  DASHBOARD_USERS_ROUTE,
  HOME_ROUTE,
} from "@/helpers/routes";
import AddUserButton from "@/components/etc/AddUserButton";
import AddPrizeButton from "@/components/etc/AddPrizeButton";
import CheckRole from "@/components/etc/CheckRoles";
import Separator from "@/components/etc/separator";
import DashboardTop from "@/components/etc/dashboardTop";
import ResetPasswordForm from "@/components/etc/resetPassword";

function GetButton() {
  const { pathname } = useLocation();

  if (pathname == DASHBOARD_ROUTE) {
    return (
      <CheckRole permission={["view_reports"]}>
        <DashboardTop />
      </CheckRole>
    );
  }
  if (pathname.includes(DASHBOARD_USERS_ROUTE)) {
    return (
      <CheckRole permission="">
        <AddUserButton />
      </CheckRole>
    );
  }

  if (pathname.includes(DASHBOARD_PRODUCTS_ROUTE)) {
    return (
      <CheckRole permission="create_product">
        <AddPrizeButton />
      </CheckRole>
    );
  }
}

export default function Header() {
  const { user } = useAppSelector((s) => s.user);

  return (
    <header className="flex gap-3 items-center p-4 py-2">
      <div className="flex-grow">
        <h2 className="text-gray-400 capitalize">Hi, {user?.firstName}</h2>
        {/* <h2 className="text-gray-400 capitalize">Hi, {user?.username}</h2> */}
        <Timer />
      </div>
      <GetButton />
      <DropDown
        positions={["bottom"]}
        container={
          <div className="bg-primary size-12 rounded-md flex items-center justify-center text-2xl font-extrabold text-white">
            {/* <span>{user?.firstName?.charAt(0).toUpperCase()}</span> */}
            <span>{user?.username?.charAt(0).toUpperCase()}</span>
          </div>
        }
        className="min-w-[min(35ch,100dvw_-_1.5rem)]"
      >
        <div className="p-2 grid gap-1 text-center text-grey">
          <h3 className="text-foreground">{user?.username}</h3>
          <small>{`${user?.firstName} ${user?.lastName}`}</small>
          <small>{user?.email}</small>
        </div>
        <Separator className="!my-0 !h-[0.8px]" />
        <div className="[&>*]:p-3 hover:[&>*]:bg-light-grey ">
          <Link to={HOME_ROUTE} className="flex items-center gap-2 p-1">
            <IconHome size={20} />
            <span>Go to Home</span>
          </Link>
          <ResetPasswordForm user={user} />
        </div>
        <LogoutButton />
      </DropDown>
      {/* {user.mustChangePassword && <ChangePassword />} */}
    </header>
  );
}
