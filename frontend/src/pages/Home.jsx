import { Navigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(UserContext);
  console.log(user);
  // if (user.data) {
  //   return (
  //     <div>
  //       <h1>{user?.data?.username}</h1>
  //       <h1>Home</h1>
  //     </div>
  //   );
  // } else {
  //   return <Navigate to="/login" />;
  // }
}
