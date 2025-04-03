
import { useEffect, useState } from "react";
import Login from "./components/login";
import Dashboard from "./pages/Dashboard";
import { isAuthenticated } from "./utils/auth";

export default function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) setAuth(true);
  }, []);

  return (
    <div>
      {auth ? <Dashboard /> : <Login onLogin={() => setAuth(true)} />}
    </div>
  );
}

