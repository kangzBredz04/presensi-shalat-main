import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "./utils.js";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get("/auth/get-data-login")
      .then((me) => {
        if (me) {
          setUser(me);
          console.log(me);
        } else {
          console.log("User tidak ada !!!");
          setUser(null);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Outlet />
    </UserContext.Provider>
  );
}
