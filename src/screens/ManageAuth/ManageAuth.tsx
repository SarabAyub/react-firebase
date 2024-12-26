import { AuthLayout } from "@muc/layout";
import React from "react";
import { Outlet } from "react-router-dom";

const ManageAuth = () => {
  return (
    <React.Fragment>
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    </React.Fragment>
  );
};

export default ManageAuth;
