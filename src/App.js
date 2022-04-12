import { useEffect, useState } from "react";
import Home from "./screens/Home";
import WelcomeEncrypt from "./components/WelcomeEncrypt";

function App() {
  const [welcomeOpen, setWelcomeOpen] = useState(true);

  const decryptScreen = localStorage.getItem("decryptScreen");
  useEffect(() => {
    if (decryptScreen) {
      if (Date.now() >= decryptScreen) localStorage.removeItem("decryptScreen");
      else setWelcomeOpen(false);
    }
  }, [decryptScreen]);
  return (
    <>
      {welcomeOpen ? (
        <WelcomeEncrypt setWelcomeOpen={setWelcomeOpen} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
