import css from "./style.module.scss";
import IncomeSection from "./income";
import TransactionSection from "./transaction";
import { useCallback, useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ReportGroupedThunk } from "@/redux/features/actions/reports";
import TopPlayersSection from "./topPlayers";
import RecentPlayersSection from "./recentPlayers";
import ProductsSection from "./products";
import CheckRole from "@/components/etc/CheckRoles";

export default function DashboardHomePage() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((s) => s.user);
  const { fetchTimes, selected } = useAppSelector((s) => s.reports.details);

  const getData = useCallback(() => {
    const filters: any = {};

    if (user?.attributes?.radioId?.length == 1)
      filters.radioId = user?.attributes?.radioId?.[0] || filters?.radioId;

    dispatch(ReportGroupedThunk({ data: selected, filters }));
  }, [dispatch, selected, user?.attributes?.radioId]);

  useLayoutEffect(() => {
    if (fetchTimes <= 0) getData();
  }, [fetchTimes, getData]);

  return (
    <main className="min-h-full">
      <CheckRole permission={["view_reports"]}>
        <section
          className={`${css.home} min-h-full grid grid-cols-2 max-md:grid-cols-1 gap-2 mb-2`}
        >
          <IncomeSection />
          <TransactionSection />
        </section>
      </CheckRole>
      <CheckRole permission={["view-transaction"]}>
        <ProductsSection />
        <section className="grid md:grid-cols-3 gap-2 mt-2 [&>*]:bg-white [&>*]:rounded-lg">
          <RecentPlayersSection />
          <TopPlayersSection />
        </section>
      </CheckRole>
      <CheckRole
        permission={["view-transaction", "view_reports"]}
        fallback={
          <section className="p-4 bg-white rounded-lg min-h-full text-center grid gap-2">
            <h1 className="text-3xl">Welcome to VunaDeile</h1>
            <p className="text-grey">
              {user?.firstName} {user?.lastName}
            </p>
            <p>{user?.email}</p>
          </section>
        }
      >
        <></>
      </CheckRole>
    </main>
  );
}
