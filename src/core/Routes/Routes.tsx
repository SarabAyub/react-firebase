import { ROUTES } from "@muc/routes";
import {
  ManageAuth,
  ManageAdmins,
  ManageReports,
  ManageUsers,
  ManageAppConfigurations,
  ManageDashboard,
  ManageMessages,
} from "@muc/screens";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import {
  Login,
  ResetPassword,
  ForgotPassword,
  TwoFactorAuthPhone,
  TwoFactorAuthPin,
  TermsConditions,
  AdminManagement,
  Reports,
  Users,
  Dashboard,
  Messages,
  Settings,
} from "@muc/modules";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <ReactRoutes>
      {/* Auth routes */}
      <Route element={<ManageAuth />}>
        <Route path="/" element={<Login />} />
        <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
        <Route path={ROUTES.AUTH.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={ROUTES.AUTH.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.AUTH.TWO_FACTOR_AUTH_PHONE} element={<TwoFactorAuthPhone />} />
        <Route path={ROUTES.AUTH.TWO_FACTOR_AUTH_PIN} element={<TwoFactorAuthPin />} />
        <Route path={ROUTES.AUTH.TERMS_CONDITIONS} element={<TermsConditions />} />

        {/* <Route path={ROUTES.AUTH.SIGN_UP} element={<SignupContainer />} />
        <Route
          path={ROUTES.AUTH.SUBSCRIPTION}
          element={
            <ProtectedRoute>
              <SubscriptionContainer />
            </ProtectedRoute>
          }
        /> */}
        
      </Route>
      <Route element={<ManageAdmins />}>
      <Route path={ROUTES.WEB_APP.MANAGE_ADMIN} element={<AdminManagement />} />
      </Route>

      <Route element={<ManageDashboard />}>
      <Route path={ROUTES.WEB_APP.DASHBOARD} element={<Dashboard />} />
      </Route>

      <Route element={<ManageAppConfigurations />}>
      <Route path={ROUTES.WEB_APP.APP_CONFIGURATIONS} element={<Settings />} />
      </Route>

      <Route element={<ManageUsers />}>
      <Route path={ROUTES.WEB_APP.MANAGE_USERS} element={<Users />} />
      </Route>

      <Route element={<ManageReports />}>
      <Route path={ROUTES.WEB_APP.MANAGE_REPORTS} element={<Reports />} />
      </Route>

      <Route element={<ManageMessages />}>
      <Route path={ROUTES.WEB_APP.MESSAGES} element={<Messages />} />
      </Route>


      
    </ReactRoutes>
  );
};

export default Routes;
