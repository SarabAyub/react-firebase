import { ROUTES } from "@muc/routes";
import {
  ManageAuth,
} from "@muc/screens";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import {
  Login,
  ResetPassword,
  TwoFactorAuth,
} from "@muc/pages";
import ProtectedRoute from "./ProtectedRoute";
const Routes = () => {
  return (
    <ReactRoutes>
      {/* Auth routes */}
      <Route element={<ManageAuth />}>
        <Route path="/" element={<Login />} />
        <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
        <Route path={ROUTES.AUTH.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={ROUTES.AUTH.TWO_FACTOR_AUTH} element={<TwoFactorAuth />} />

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
    </ReactRoutes>
  );
};

export default Routes;
