import { filterRoles } from "@helpers/filterRoles";
import { useAppSelector } from "@redux/hook";
import { Spin } from "antd";
import { Fragment, ReactNode } from "react";

interface Props {
  children: ReactNode;
  roles?: string[];
  permission?: string | string[];
  otherwise?: ReactNode | any;
  fallback?: ReactNode;
  [keys: string]: any; // any props that come into the component
}

function CheckRole({ children, roles = [], permission, otherwise, fallback, ...props }: Props) {
  const { good, bad } = filterRoles(roles);
  const { good: menuGood, bad: menuBad } = filterRoles(
    !permission ? [""] : Array.isArray(permission) ? permission : [permission],
  );
  const { user, status, allowedPermissions } = useAppSelector((state) => state.user);

  if (status == "pending" || allowedPermissions.status == "pending") return <Spin />;

  if (
    permission
      ? allowedPermissions?.list?.some((r) => menuGood.includes(r)) &&
        !allowedPermissions?.list?.some((r) => menuBad.includes(r))
      : roles.length === 0 ||
        (bad.length && !bad.includes(user?.role?.toLowerCase())) ||
        (good.length && good?.includes(user?.role?.toLowerCase()))
  )
    return <Fragment {...props}>{children}</Fragment>;

  if (otherwise) return otherwise;

  if (fallback) return <Fragment {...props}>{fallback}</Fragment>;
  return <Fragment {...props} />;
}

export default CheckRole;
