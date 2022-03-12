import Axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import App from "../../app/app";
import { loaderOff, loaderOn } from "./../../store/reducer/loaderReducer";
import Loader from "../../app/components/Loader";
import { useEffect, useState } from "react";
import { types } from "../../store/types";
import { getMyTourStyle, setOneTour } from "../../store/reducer/toursReducer";
export default function Index() {
  const router = useRouter();
  const path = router.query;
  const dispatch = useDispatch();
  const [isItPath, setIsItPath] = useState(false);
  const fetchData = async (id) => {
    const api = `/api/tour/${id}`;
    try {
      const res = await Axios.get(api);
      const data = await res.data;
      dispatch({ type: types.editTour, data: data[0] });
      dispatch(setOneTour(data[0]));
      dispatch(getMyTourStyle(data[0]._id));
      dispatch({ type: types.editorOff });
      const tour_id = data[0].tour_id;
      const isItActive = data[0].isItActive;
      const language = data[0].language;
      setIsItPath(
        [tour_id, language].join("/") === path.all.join("/") && isItActive
      );
    } catch (error) {
      console.log("error data fetch", error);
    }
  };
  if (path?.all?.join("/")) {
    fetchData(path.all.join("/"));

    if (isItPath) {
      return (
        <div>
          <App />
          <Loader />
        </div>
      );
    }

    return <Loader />;
  }

  if (!path?.all?.join("/")) {
    dispatch(loaderOn());
    return <Loader />;
  }

  return <p>error</p>;
}
