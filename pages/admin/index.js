import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../store/reducer/usersReducer";

import Admin from "../../app/components/admin/Admin";
import Moderator from "./../../app/components/admin/Moderator";
import { useDispatch } from "react-redux";
import { getAllMyTours } from "../../store/reducer/toursReducer";

const Index = () => {
  const [logData, setLogData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    setLogData(JSON.parse(localStorage.getItem("isLoginMe")));
  }, []);
  if (logData && logData.role === "admin") {
    dispatch(getAllUsers());
    return <Admin />;
  }
  if (logData && logData.role === "moderator") {
    dispatch(getAllMyTours());
    return <Moderator />;
  }

  return <div>Index</div>;
};

export default Index;
