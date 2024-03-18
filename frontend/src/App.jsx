import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "./utils";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

export const DataContext = createContext();

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("auth/get-data-login")
      .then((me) => {
        if (!me) {
          console.log("User tidak ada !!!");
          setUser(null);
          // console.log(me);
        } else {
          // console.log(me);
          setUser(me);
          // console.log(user);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(user);

  return (
    <>
      {/* <Navbar /> */}
      {/* <DataContext.Provider value={{ user, setUser }}> */}
      <Outlet context={[user, setUser]} />
      {/* </DataContext.Provider> */}
      {/* <Footer /> */}
    </>
  );
}
