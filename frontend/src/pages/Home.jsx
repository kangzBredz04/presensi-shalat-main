import { useContext, useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import { DataContext } from "../App";

export default function Home() {
  const user = useOutletContext()[0];
  console.log(user);
  if (user) {
    return (
      <div>
        {/* <h1>{user[0].data}</h1> */}
        <h1>Home</h1>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
}
