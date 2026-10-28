import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [variable, setVariable] = useState();
  const [isAvaiable, setIsAvailable] = useState(false);

  useEffect(() => {
    const getEnv = async () => {
      const variableFromEnv = import.meta.env.VITE_APP_NAME;
      const avaiable = variableFromEnv !== undefined ? true : false;
      setIsAvailable(avaiable);
      if (avaiable) {
        setVariable(variableFromEnv);
      }
    };
    getEnv();
  });

  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>Vite + React app with env variabel</p>
      {isAvaiable ? <h1>{variable}</h1> : <h1>Failed to load the env</h1>}
    </div>
  );
}

export default App;
