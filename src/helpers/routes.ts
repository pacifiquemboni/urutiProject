export const HOME_ROUTE = "/";

// auth routes
export const AUTH_ROUTE = "";
export const LOGIN_ROUTE = `${AUTH_ROUTE}/login`;
export const SIGNUP_ROUTE = `${AUTH_ROUTE}/register`;

export const NewHome_ROUTE =`/newhome`

// dashboard
export const DASHBOARD_ROUTE = "/dashboard";

export const DASHBOARD_PROFILE_ROUTE = `${DASHBOARD_ROUTE}/profile`;
export const DASHBOARD_USERS_ROUTE = `${DASHBOARD_ROUTE}/users`;
export const DASHBOARD_PRODUCTS_ROUTE = `${DASHBOARD_ROUTE}/products`;
export const DASHBOARD_TRANSACTIONS_ROUTE = `${DASHBOARD_ROUTE}/transactions`;
export const DASHBOARD_PAYMENT_ROUTE = `${DASHBOARD_ROUTE}/payment`;
export const DASHBOARD_MESSAGES_ROUTE = `${DASHBOARD_ROUTE}/messages`;
export const DASHBOARD_RADIO_ROUTE = `${DASHBOARD_ROUTE}/radio`;
export const DRAW_TOKENS_ROUTE = `${DASHBOARD_ROUTE}/tokens`;

export const DASHBOARD_SETTINGS_ROUTE = `${DASHBOARD_ROUTE}/settings`;
export const DASHBOARD_ROLES_ROUTE = `${DASHBOARD_SETTINGS_ROUTE}/roles`;
export const DASHBOARD_PERMISSION_ROUTE = `${DASHBOARD_SETTINGS_ROUTE}/permission`;

// Draw
export const DRAW_ROUTE = `/draw`;
export const DASH_DRAW_ROUTE = `${DASHBOARD_ROUTE}/draw`;
export const DRAW_WINNER_ROUTE = `${DASH_DRAW_ROUTE}/winner`;
export const DRAW_TEMP_TOKENS_ROUTE = `${DASH_DRAW_ROUTE}/temp-tokens`;

// roulette routes
export const ROULETTE_ROUTE = `${DRAW_ROUTE}/engine`;
export const ROULETTE_NDINGA_ROUTE = `/ndinga`;
export const ROULETTE_NDINGA_ROUTE_FULL = `${ROULETTE_ROUTE}/ndinga`;
export const ROULETTE_MAMILIONEA_ROUTE = `/mamilionea`;
export const ROULETTE_MAMILIONEA_ROUTE_FULL = `${ROULETTE_ROUTE}/mamilionea`;
