import { ReactNode, useCallback, useLayoutEffect } from "react";
import Header from "./header";
import css from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { GetUserThunk } from "@/redux/features/actions/users/me";
import DashboardSidebar from "./aside";
import Protected from "@/components/etc/protected_route";
import { useLocation } from "react-router-dom";
import { DASHBOARD_ROUTE } from "@/helpers/routes";

export default function UserPortalLayout({
  children,
  mainOnly,
  className = "",
}: {
  children: ReactNode;
  mainOnly?: boolean;
  className?: string;
}) {
  const { user } = useAppSelector((s) => s.user);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const getUser = useCallback(async () => {
    try {
      if (!user) await dispatch(GetUserThunk()).unwrap();
    } catch (error: any) {
      if (error?.code == "ERR_NETWORK") getUser();
    }
  }, [dispatch, user]);

  useLayoutEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Protected>
      <div
        className={`${css.box} ${pathname == DASHBOARD_ROUTE ? css.home : ""} ${mainOnly ? css.mainOnly : ""} min-h-dvh bg-light-grey ${className}`}
      >
        {!mainOnly && (
          <>
            <Header />
            <aside>
              <DashboardSidebar />
            </aside>
          </>
        )}
        <main className="min-h-full relative">{children}</main>
      </div>
    </Protected>
  );
}
