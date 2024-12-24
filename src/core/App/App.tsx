import { ThemeProvider } from "@emotion/react";

import { theme } from "@muc/styles";
import { app } from "@muc/firebase";
import { AuthContextProvider, NotificationContextProvider } from "@muc/context";
import { SnackbarProvider } from "@muc/components";

import Routes from "../Routes/Routes";

function App() {
  //@ts-ignore
  const _appFirebase = app;

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <NotificationContextProvider>
          <Routes />
          <SnackbarProvider />
        </NotificationContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
