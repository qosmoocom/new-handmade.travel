import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../store/reducer/usersReducer";

import Admin from "../../app/components/admin/Admin";
import Moderator from "./../../app/components/admin/Moderator";
import { useDispatch } from "react-redux";
import { getAllMyTours } from "../../store/reducer/toursReducer";
import Loader from "../../app/components/Loader";
import Bloger from "../../app/components/admin/Bloger";
import { getAllMyBlogs } from "../../store/reducer/blogReducer";
import { getAllCategorys } from "../../store/reducer/categoryReducer";

const Index = () => {
  const [logData, setLogData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    setLogData(JSON.parse(localStorage.getItem("isLoginMe")));
  }, []);
  if (logData && logData.role === "admin") {
    dispatch(getAllUsers());
    dispatch(getAllCategorys());
    return (
      <div>
        <Admin />
        <Loader />
      </div>
    );
  }
  if (logData && logData.role === "moderator") {
    dispatch(getAllMyTours());
    return (
      <div>
        <Moderator />
        <Loader />
      </div>
    );
  }
  if (logData && logData.role === "bloger") {
    dispatch(getAllMyBlogs());
    return (
      <div>
        <Bloger />
        <Loader />
      </div>
    );
  }

  return <div>Index</div>;
};

export default Index;
