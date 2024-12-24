import { ROUTES } from "@muc/routes";
import {
  ManageAuth,
  ManagePatients,
  Notifications,
  Settings,
} from "@muc/screens";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import {
  AccountVerificationContainer,
  AuthLandingContainer,
  LogInContainer,
  NotificationsContainer,
  OnBoardingContainer,
  PatientsContainer,
  ResetPasswordContainer,
  SettingsContainer,
  SignupContainer,
  SubscriptionContainer,
} from "@muc/modules";
import ProtectedRoute from "./ProtectedRoute";
const Routes = () => {
  return (
    <ReactRoutes>
      {/* Auth routes */}
      <Route element={<ManageAuth />}>
        <Route path="/" element={<AuthLandingContainer />} />
        <Route path={ROUTES.AUTH.SIGN_UP} element={<SignupContainer />} />
        <Route
          path={ROUTES.AUTH.SUBSCRIPTION}
          element={
            <ProtectedRoute>
              <SubscriptionContainer />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.AUTH.ACCOUNT_VERIFICATION}
          element={
            <ProtectedRoute>
              <AccountVerificationContainer />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.AUTH.ONBOARDING}
          element={
            <ProtectedRoute>
              <OnBoardingContainer />
            </ProtectedRoute>
          }
        />
        <Route path={ROUTES.AUTH.SIGN_IN} element={<LogInContainer />} />
        <Route
          path={ROUTES.AUTH.RESET_PASSWORD}
          element={<ResetPasswordContainer />}
        />
      </Route>
      <Route element={<ManagePatients />}>
        <Route
          path={ROUTES.WEB_APP.PATIENT}
          element={
            <ProtectedRoute>
              <PatientsContainer />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path={ROUTES.WEB_APP.NOTIFICATIONS}
        element={
          <ProtectedRoute>
            <NotificationsContainer />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.WEB_APP.ROOT_SETTINGS}
        element={
          <ProtectedRoute>
            <SettingsContainer />
          </ProtectedRoute>
        }
      >
        <Route
          path={ROUTES.WEB_APP.SETTINGS}
          element={
            <ProtectedRoute>
              <SettingsContainer />
            </ProtectedRoute>
          }
        />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
