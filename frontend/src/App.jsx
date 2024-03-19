import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "./utils.js";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   api
  //     .get("/auth/get-data-login")
  //     .then((me) => {
  //       if (me || localStorage.getItem("token")) {
  //         setUser(me);
  //       } else {
  //         console.log("User tidak ada !!!");
  //         setUser(null);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3000/auth/get-data-login")
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Gagal mengatur cookie");
        }
        setUser(response);
        return response.text();
      })
      .then((data) => {
        console.log(data); // Output: Cookie berhasil diatur
      })
      .catch((error) => {
        console.error("Ada kesalahan:", error);
      });
  }, [user]);

  // const data = useLocation();
  // console.log(data.state);

  return (
    <UserContext.Provider value={user}>
      <Outlet />
    </UserContext.Provider>
  );
}
