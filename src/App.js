import { useState } from "react";
import AnotherComponent from "./AnotherComponent";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <button onClick={switchTheme}>Change theme</button>
      <AnotherComponent />
    </div>
  );
}

export default App;
