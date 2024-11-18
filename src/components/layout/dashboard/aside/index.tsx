import CheckRole from "@/components/etc/CheckRoles";
import Logo from "@/components/etc/Logo";
import SidebarMenuItem from "@/components/etc/SidebarMenuItem";
import {
  DASHBOARD_MESSAGES_ROUTE,
  DASHBOARD_PAYMENT_ROUTE,
  DASHBOARD_PERMISSION_ROUTE,
  DASHBOARD_PRODUCTS_ROUTE,
  DASHBOARD_RADIO_ROUTE,
  DASHBOARD_ROLES_ROUTE,
  DASHBOARD_ROUTE,
  DASHBOARD_SETTINGS_ROUTE,
  DASHBOARD_TRANSACTIONS_ROUTE,
  DASHBOARD_USERS_ROUTE,
  DASH_DRAW_ROUTE,
  DRAW_TEMP_TOKENS_ROUTE,
  DRAW_TOKENS_ROUTE,
  DRAW_WINNER_ROUTE,
  HOME_ROUTE,
  ROULETTE_ROUTE,
} from "@/helpers/routes";
import {
  IconDeviceAnalytics,
  IconGraph,
  IconHome2,
  IconUsersGroup,
  IconUserCheck,
  IconSettingsCheck,
  IconSettings,
  IconPackage,
  IconMessage2Question,
  IconCash,
  IconCircleKey,
  IconRadio,
} from "@tabler/icons-react";
import { useMemo } from "react";

const DashboardSidebar = () => {
  const sidebarItems = useMemo<SideBarITem[]>(
    () => [
      {
        icon: IconHome2,
        title: "Dashboard",
        url: DASHBOARD_ROUTE,
        end: true,
        // protected: "view_dashboard",
      },
      {
        icon: IconUsersGroup,
        title: "Users",
        url: DASHBOARD_USERS_ROUTE,
        protected: "view_users",
      },
      {
        icon: IconDeviceAnalytics,
        title: "Draw",
        url: DASH_DRAW_ROUTE,
        onClick: (e) => e.preventDefault(),
        protected: [
          "run_draw",
          "view_won_token",
          "view_temp_winner_token",
        ],
        items: [
          {
            url: ROULETTE_ROUTE,
            title: "Make Draw",
            protected: ["run_draw"],
          },
          {
            url: DASH_DRAW_ROUTE,
            title: "Draws List",
            protected: ["run_draw"],
            end: true,
          },
          {
            url: DRAW_WINNER_ROUTE,
            title: "Winners",
            protected: ["view_won_token"],
          },
          {
            url: DRAW_TEMP_TOKENS_ROUTE,
            title: "Temporaly Winners",
            protected: ["view_temp_winner_token"],
          },
        ],
      },
      {
        icon: IconCircleKey,
        url: DRAW_TOKENS_ROUTE,
        title: "Tokens",
        protected: ["view_token"],
      },
      {
        icon: IconPackage,
        title: "Products",
        url: DASHBOARD_PRODUCTS_ROUTE,
        protected: ["create_product", "delete_product", "update_product"],
      },
      {
        icon: IconGraph,
        url: DASHBOARD_TRANSACTIONS_ROUTE,
        title: "Transactions",
        protected: "view-transaction",
      },

      {
        icon: IconCash,
        url: DASHBOARD_PAYMENT_ROUTE,
        title: "Payments",
        protected: "view-transaction",
      },
      {
        icon: IconSettings,
        title: "Settings",
        url: DASHBOARD_SETTINGS_ROUTE,
        onClick: (e) => e.preventDefault(),
        protected: [
          "assign_users_to_group",
          "create_groups",
          "create_roles",
          "update_roles",
          "view_roles",
          "view_contacts",
        ],
        items: [
          {
            icon: IconMessage2Question,
            url: DASHBOARD_MESSAGES_ROUTE,
            title: "Suggestions",
            protected: "view_contacts",
          },
          {
            icon: IconRadio,
            url: DASHBOARD_RADIO_ROUTE,
            title: "Radios",
            protected: ["view_radios", "update_radio", "delete_radio"],
          },
          {
            icon: IconUserCheck,
            url: DASHBOARD_ROLES_ROUTE,
            title: "Roles",
            protected: ["assign_users_to_group", "create_groups"],
          },
          {
            icon: IconSettingsCheck,
            url: DASHBOARD_PERMISSION_ROUTE,
            title: "Permission",
            protected: ["create_roles", "update_roles", "view_roles"],
          },
        ],
      },
    ],
    [],
  );
  return (
    <>
      <CheckRole
        permission={"can_login"}
        fallback={<Logo to={HOME_ROUTE} className="mx-auto flex justify-center py-3" />}
      >
        <Logo to={DASHBOARD_ROUTE} className="mx-auto flex justify-center py-3" />
      </CheckRole>
      <div className="flex flex-col my-4 gap-2">
        {sidebarItems.map((item, index) => {
          return (
            <CheckRole permission={item.protected} key={index}>
              <SidebarMenuItem item={item} />
            </CheckRole>
          );
        })}
      </div>
    </>
  );
};

export default DashboardSidebar;
