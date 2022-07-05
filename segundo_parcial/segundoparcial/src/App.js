import AuthRouter from "./routers/AuthRouter/AuthRouter";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

const App = () => {
  const localStorageTheme = getLocalStorage("dark-theme");
  const [isDark, setIsDark] = useState(
    localStorageTheme === null ? true : localStorageTheme
  );
  const changeTheme = () => {
    setLocalStorage("dark-theme", !isDark);
    setIsDark(!isDark);
  };
  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <AuthRouter changeTheme={changeTheme} />
    </NextUIProvider>
  );
};

export default App;
