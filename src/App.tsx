import { Suspense, lazy } from "react";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  DASHBOARD_ROUTE,
  DASHBOARD_USERS_ROUTE,
  DASHBOARD_TRANSACTIONS_ROUTE,
  DRAW_ROUTE,
  ROULETTE_ROUTE,
  DASHBOARD_ROLES_ROUTE,
  DASHBOARD_PERMISSION_ROUTE,
  DASHBOARD_PRODUCTS_ROUTE,
  DRAW_WINNER_ROUTE,
  DRAW_TOKENS_ROUTE,
  DRAW_TEMP_TOKENS_ROUTE,
  DASHBOARD_MESSAGES_ROUTE,
  DASH_DRAW_ROUTE,
  DASHBOARD_PAYMENT_ROUTE,
  DASHBOARD_RADIO_ROUTE,
  Client_Login,
  Client_Signup,
  My_Wallet
} from "./helpers/routes";
import Loader from "./components/etc/loader";
import ClientLogin from "./components/newHome/Auth/clientLogin";
import ClientSignup from "./components/newHome/Auth/clientSignup";
import MyWallet from "./components/newHome/MyWallet/MyWallet";

const AuthLayout = lazy(() => import("./components/layout/default/auth"));
const PageLayout = lazy(() => import("./components/layout/default"));
const DashboardLayout = lazy(() => import("./components/layout/dashboard"));

// const HomePage = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/auth/login"));
// const SignupPage = lazy(() => import("./pages/auth/signup"));

const DashHomePage = lazy(() => import("./pages/dashboard/home"));
const DashUsersPage = lazy(() => import("./pages/dashboard/users"));
const DashTransactionsPage = lazy(() => import("./pages/dashboard/transactions"));
const DashPaymentPage = lazy(() => import("./pages/dashboard/payment"));
const DashRolesPage = lazy(() => import("./pages/dashboard/roles"));
const DashPermissionsPage = lazy(() => import("./pages/dashboard/permissions"));
const DashProductsPage = lazy(() => import("./pages/dashboard/products"));
const DashMessagesPage = lazy(() => import("./pages/dashboard/messages"));
const DashRadioPage = lazy(() => import("./pages/dashboard/radio"));

const RoulettePage = lazy(() => import("./pages/dashboard/draw/roulette"));
const DashDrawList = lazy(() => import("./pages/dashboard/draw/list"));
const WinnersPage = lazy(() => import("./pages/dashboard/draw/winners"));
const DashTokensPage = lazy(() => import("./pages/dashboard/draw/tokens"));
const DashTempTokensPage = lazy(() => import("./pages/dashboard/draw/tempTokens"));
const NewHome = lazy(() => import("./components/newHome/index"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* auth routes */}
          <Route
            path={"/"}
            element={
              <AuthLayout>
                <Outlet />
              </AuthLayout>
            }
          >
            <Route path={LOGIN_ROUTE} element={<Login />} />
            

            {/* <Route path={`${SIGNUP_ROUTE}/:step/*`} element={<SignupPage />} />
            <Route path={`${SIGNUP_ROUTE}/*`} element={<SignupPage />} /> */}
          </Route>
          {/* Client Login */}
          <Route path={Client_Login} element={<ClientLogin />} />
          <Route path={Client_Signup} element={<ClientSignup />} />
          <Route path={My_Wallet} element={<MyWallet />} />


          {/* newhome route */}
          
          {/* Default pages */}
          <Route
            path={HOME_ROUTE}
            element={
              <PageLayout>
                <Outlet />
              </PageLayout>
            }
          >
            {/* <Route index element={<HomePage />} /> */}
            <Route index element={<NewHome />} />

          </Route>

          {/* dashboard pages */}
          <Route
            path={`${DASHBOARD_ROUTE}`}
            element={
              <DashboardLayout>
                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
              </DashboardLayout>
            }
          >
            <Route index element={<DashHomePage />} />
            <Route path={DASHBOARD_USERS_ROUTE} element={<DashUsersPage />} />
            <Route path={DASHBOARD_ROLES_ROUTE} element={<DashRolesPage />} />
            <Route path={DASHBOARD_PRODUCTS_ROUTE} element={<DashProductsPage />} />
            <Route path={DASHBOARD_PERMISSION_ROUTE} element={<DashPermissionsPage />} />
            <Route path={DASHBOARD_TRANSACTIONS_ROUTE} element={<DashTransactionsPage />} />
            <Route path={DASHBOARD_PAYMENT_ROUTE} element={<DashPaymentPage />} />
            <Route path={DASHBOARD_MESSAGES_ROUTE} element={<DashMessagesPage />} />
            <Route path={DASHBOARD_RADIO_ROUTE} element={<DashRadioPage />} />

            {/* draw tables */}
            <Route path={DASH_DRAW_ROUTE} element={<DashDrawList />} />
            <Route path={DRAW_WINNER_ROUTE} element={<WinnersPage />} />
            <Route path={DRAW_TOKENS_ROUTE} element={<DashTokensPage />} />
            <Route path={DRAW_TEMP_TOKENS_ROUTE} element={<DashTempTokensPage />} />

            {/* User Route Not found */}
            <Route path="*" element={<Navigate to={DASHBOARD_ROUTE} />} />
          </Route>

          <Route
            path={DRAW_ROUTE}
            element={
              <DashboardLayout mainOnly className="bg-primary2">
                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
              </DashboardLayout>
            }
          >
            <Route path={`${ROULETTE_ROUTE}`} element={<RoulettePage />} />
            <Route path={`${ROULETTE_ROUTE}/:id`} element={<RoulettePage />} />
          </Route>

          {/* Not found route */}
          <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
