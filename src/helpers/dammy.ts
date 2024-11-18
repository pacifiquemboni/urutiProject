export const permission = [
  "can_login",
  "view_reports",
  "view_dashboard",
  "register_won_token",
  "reject_temp_winner",
  "update_won_token_user_info",
  "view-transaction",
  "view_users",
  "view_roles",
  "run_draw",
  "view_won_token",
  "view_temp_winner_token",
  "view_token",
  "create_product",
  "view_contacts",
];

export const permissionByRole = {
  admin: permission,
  moderator: [
    "can_login",
    "view_dashboard",
    "register_won_token",
    "reject_temp_winner",
    "update_won_token_user_info",
    "run_draw",
    "view_won_token",
    "view_temp_winner_token",
    "view_token",
  ],
  drawer: ["run_draw", "can_login"],
};

export const access_token = {
  access_token:
    "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJuWW5TTllTUUhlampXWUFvTFh2eUJLQy1OeTE0VHBRbDkxNUxRTXpJN0hvIn0.eyJleHAiOjE3MTIxNzQ1MjksImlhdCI6MTcxMjE0NTcyOSwianRpIjoiM2VlMDU2ZTQtN2E2MS00NjllLTgzZjItMDAyYTc3NGY2MjdkIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5pc2hlbWEucncvcmVhbG1zL3Z1bmEtZGVpbGUiLCJhdWQiOlsicmVhbG0tbWFuYWdlbWVudCIsImJyb2tlciIsImFjY291bnQiXSwic3ViIjoiZDQyYThhNTMtMjA3MS00NGYxLTgwNzMtYjEzMTg1ZDc0MWIxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYWNjZXNzLW1hbmFnZXIiLCJzZXNzaW9uX3N0YXRlIjoiYTZlY2Q1YTItNzgzNy00OWI4LTg2YTEtMDdiNGQ5M2U3ZTA3IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIvKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsidXBkYXRlX2dyb3VwcyIsImFzc2lnbl9ncm91cF9yb2xlcyIsInZpZXdfd29uX3Rva2VuIiwiZGVsZXRlX3Rlc3RpbW9ueSIsInZpZXdfdHJhbnNhY3Rpb25zIiwiZGVsZXRlX3VzZXJzIiwidXBkYXRlX3Rlc3RpbW9ueSIsImNyZWF0ZV90cmFuc2FjdGlvbnMiLCJ2aWV3X2Rhc2hib2FyZCIsInJlamVjdF90ZW1wX3dpbm5lciIsInVwZGF0ZV9yb2xlcyIsIm9mZmxpbmVfYWNjZXNzIiwiY3JlYXRlX3VzZXJzIiwidW5hc3NpZ25fdXNlcnNfdG9fZ3JvdXAiLCJyZWdpc3Rlcl93b25fdG9rZW4iLCJ1cGRhdGVfcHJvZHVjdCIsInVtYV9hdXRob3JpemF0aW9uIiwiY3JlYXRlX3JvbGVzIiwidW5hc3NpZ25fZ3JvdXBfcm9sZXMiLCJjcmVhdGVfZXhwZWN0ZWRfdHJhbnNhY3Rpb24iLCJ2aWV3X2NvbnRhY3RzIiwiY3JlYXRlX2FjY2Vzc19rZXkiLCJ1cGRhdGVfd29uX3Rva2VuX3VzZXJfaW5mbyIsInZpZXdfc2Vzc2lvbiIsInZpZXdfdG9rZW4iLCJ2aWV3X3VzZXJzIiwiZGVsZXRlX3JvbGVzIiwicnVuX2RyYXciLCJlZGl0X3VzZXIiLCJkZWxldGVfZ3JvdXBzIiwiY3JlYXRlX2dyb3VwcyIsImNyZWF0ZV9wcm9kdWN0IiwiZmluZF9yb2xlcyIsInZpZXdfYWNjZXNzX2tleSIsImRlZmF1bHQtcm9sZXMtdnVuYS1kZWlsZSIsImNyZWF0ZV90ZXN0aW1vbnkiLCJ2aWV3LXRyYW5zYWN0aW9ucyIsInZpZXdfdGVtcF93aW5uZXJfdG9rZW4iLCJ2aWV3X3JvbGVzIiwiZGVsZXRlX3Byb2R1Y3QiLCJhc3NpZ25fdXNlcnNfdG9fZ3JvdXAiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctcmVhbG0iLCJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY2Vzcy1tYW5hZ2VyIjp7InJvbGVzIjpbInVtYV9wcm90ZWN0aW9uIl19LCJicm9rZXIiOnsicm9sZXMiOlsicmVhZC10b2tlbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctYXBwbGljYXRpb25zIiwidmlldy1jb25zZW50Iiwidmlldy1ncm91cHMiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsImRlbGV0ZS1hY2NvdW50IiwibWFuYWdlLWNvbnNlbnQiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiJhNmVjZDVhMi03ODM3LTQ5YjgtODZhMS0wN2I0ZDkzZTdlMDciLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJzdHJpbmcgc3RyaW5nIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic3RyaW5nIiwiZ2l2ZW5fbmFtZSI6InN0cmluZyIsImZhbWlseV9uYW1lIjoic3RyaW5nIiwiZW1haWwiOiJzdHJpbmdAZ21haWwuY29tIn0.J10XUPf3W19E9VLETtgO7fb4lw24Eqgd-27ItLuzXhCqd-CQ2E6Ud3VMlvTCz_u6BW7LEA1L8xno9wMFNI7WKhLZNgHaafpVUr8bwptbHJgif4_FR2YfuaY_WVXHdghvVN4U7ily-Fl64j7Ts9bYR3TBe2043EhBus1mwQgFYA-TC-METLqclfWalss-foYwWF0zDU2F8_Kd4_DwqzP6kDlla-9WJdslJCOeIQwywko8kyOiCxQoxGqAEkzFsSF8mIlN2ncIsAt7C5YVb34CS4DFZRBE-OEYpzvJnoLxWfdqgF3ckAWyvhDXO_PVODffyX0tMbz8d5iUefto5g1Kxw",
  expires_in: 28800,
  refresh_expires_in: 32400,
  refresh_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkNDQwYmNmZi1iMzZlLTQyNTEtODc2NC0xN2I1Yjk3ZTRiNmQifQ.eyJleHAiOjE3MTIxNzgxMjksImlhdCI6MTcxMjE0NTcyOSwianRpIjoiZWNhNmEzYzktNDJkMy00ZWZhLWJkNjUtNzkyMzEwMGMzMzZlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5pc2hlbWEucncvcmVhbG1zL3Z1bmEtZGVpbGUiLCJhdWQiOiJodHRwczovL2tleWNsb2FrLmlzaGVtYS5ydy9yZWFsbXMvdnVuYS1kZWlsZSIsInN1YiI6ImQ0MmE4YTUzLTIwNzEtNDRmMS04MDczLWIxMzE4NWQ3NDFiMSIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJhY2Nlc3MtbWFuYWdlciIsInNlc3Npb25fc3RhdGUiOiJhNmVjZDVhMi03ODM3LTQ5YjgtODZhMS0wN2I0ZDkzZTdlMDciLCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiJhNmVjZDVhMi03ODM3LTQ5YjgtODZhMS0wN2I0ZDkzZTdlMDcifQ.QcfmTjhdSavWkvh59pwY5Vlo_fuuT5PpT9Dt8mki8y4",
  token_type: "Bearer",
  "not-before-policy": 0,
  session_state: "a6ecd5a2-7837-49b8-86a1-07b4d93e7e07",
  scope: "email profile",
};

type userType = {
  username: string;
  email: string;
  password: string;
  role: "admin" | "moderator" | "drawer";
};

export const users: userType[] = [
  {
    username: "string",
    email: "string@gmail.com",
    password: "string",
    role: "admin",
  },
  {
    username: "david",
    email: "dkubui@gmail.com",
    password: "12345",
    role: "admin",
  },
  {
    username: "blackd44",
    email: "irabd44@gmail.com",
    password: "string",
    role: "admin",
  },
  {
    username: "moderator",
    email: "moderator@gmail.com",
    password: "12345",
    role: "moderator",
  },
  {
    username: "draweruser",
    email: "draweremail@gmail.com",
    password: "12345",
    role: "drawer",
  },
];

export function getLoginDammy(data: any) {
  console.log({ data });

  const user = users?.filter(
    (one) =>
      one?.email?.toLowerCase() == data?.username?.toLowerCase() ||
      one?.username?.toLowerCase() == data?.username?.toLowerCase(),
  )?.[0];

  if (!user) return null;

  localStorage.setItem("user", JSON.stringify(data));
  localStorage.setItem("logged_user", JSON.stringify(user));

  return {
    updatePasswordRequired: false,
    accessToken: access_token,
    userInfo: {
      realmRoles: permissionByRole?.[user?.role],
    },
    userId: "",
  };
}

export function getProfileDammy() {
  const user = JSON.parse(`${localStorage.getItem("logged_user") || "{}"}`) as userType;

  return {
    username: user?.username,
    email: user?.email,
    realmRoles: permissionByRole?.[user?.role],
  };
}
