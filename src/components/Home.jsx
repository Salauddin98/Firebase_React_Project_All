import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const user = useContext(AuthContext);
  return <div>This is a home {user && <span>{user.displayName}</span>}</div>;
};

export default Home;
