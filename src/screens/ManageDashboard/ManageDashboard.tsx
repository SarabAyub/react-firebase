import { AppLayout } from "@muc/layout";
import React from "react";
import { Outlet } from "react-router-dom";

const ManageDashboard = () => {
  return (
    <React.Fragment>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </React.Fragment>
  );
};

export default ManageDashboard;
