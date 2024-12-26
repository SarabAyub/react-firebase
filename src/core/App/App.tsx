import { ThemeProvider } from "@emotion/react";

import { theme } from "@muc/styles";
import Routes from "../Routes/Routes";

function App() {
  //@ts-ignore
  return (
    <ThemeProvider theme={theme}>
        <Routes/>
    </ThemeProvider>
  );
}

export default App;
