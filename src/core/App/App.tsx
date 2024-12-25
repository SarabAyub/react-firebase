import { ThemeProvider } from "@emotion/react";

import { theme } from "@muc/styles";
import { Login } from "@muc/pages";


function App() {
  //@ts-ignore
  return (
    <ThemeProvider theme={theme}>
        <Login />
    </ThemeProvider>
  );
}

export default App;
