import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { NextUIProvider, createTheme } from "@nextui-org/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const darkTheme = createTheme({
  type: "dark",
});
root.render(
  <React.StrictMode>
    <NextUIProvider theme={darkTheme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
