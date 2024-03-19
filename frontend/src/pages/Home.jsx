import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext, useEffect } from "react";

export default function Home() {
  const user = useContext(UserContext);

  // useEffect(() => {
  console.log(user);
  // }, [user]);

  if (user) {
    return (
      <div>
        <h1>{user.data?.username}</h1>
        <h1>Home</h1>
        <Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Logout
          </button>
        </Link>
      </div>
    );
  } else {
    console.log("Gagal");
    return <Navigate to="/login" />;
  }
}
