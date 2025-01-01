import { AppLayout } from "@muc/layout";
import React from "react";
import { Outlet } from "react-router-dom";

const ManageReports = () => {
  return (
    <React.Fragment>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </React.Fragment>
  );
};

export default ManageReports;
