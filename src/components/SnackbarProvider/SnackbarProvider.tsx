import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useSuccessErrorNotification } from "@muc/context";

const SnackbarProvider: React.FC = () => {
  const { alert, setAlert } = useSuccessErrorNotification();

  return (
    <Snackbar
      open={alert.show}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      {
        <Alert
          variant="filled"
          sx={{ width: "100%" }}
          severity={alert.variant || "error"}
          onClose={() =>
            setAlert({ show: false, message: "", variant: alert.variant })
          }
        >
          {alert.message}
        </Alert>
      }
    </Snackbar>
  );
};

export default SnackbarProvider;
