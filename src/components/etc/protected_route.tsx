import { filterRoles } from "@/helpers/filterRoles";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "@/helpers/routes";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Loader from "./loader";

type props = {
  children: ReactNode;
  roles?: string[];
};

export default function Protected({ children, roles = [] }: props) {
  const { good, bad } = filterRoles(roles);
  const { access_token, status, user } = useAppSelector((state) => state.user);

  if (status == "pending") return <Loader />;
  if (!access_token || !user) return <Navigate to={LOGIN_ROUTE} />;

  if (
    !(
      roles.length === 0 ||
      (bad.length && !bad.includes(user?.role?.toLowerCase() || "member")) ||
      (good.length && good?.includes(user?.role?.toLowerCase() || ""))
    )
  )
    return <Navigate to={DASHBOARD_ROUTE} replace />;

  return <>{children}</>;
}
