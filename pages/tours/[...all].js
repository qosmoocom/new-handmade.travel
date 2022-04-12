import Head from "next/head";
import Axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import App from "../../app/app";
import { loaderOn } from "./../../store/reducer/loaderReducer";
import Loader from "../../app/components/Loader";
import { useState } from "react";
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
      dispatch(getMyTourStyle(data[0]._id));
      dispatch({ type: types.editTour, data: data[0] });
      dispatch(setOneTour(data[0]));
      dispatch({ type: types.editorOff });
      const tour_id = data[0].tour_id;
      const isItActive = data[0].isItActive;
      const language = data[0].language;
      setIsItPath(
        [tour_id, language].join("/") === path.all.join("/") && isItActive
      );
      console.log([tour_id, language].join("/"));
      console.log(path.all.join("/"));
      console.log(isItActive);
    } catch (error) {
      setTimeout(() => {
        router.push("/404");
      });
    }
  };

  if (path?.all?.join("/")) {
    console.log("f1");
    fetchData(path.all.join("/"));

    if (isItPath) {
      console.log("f11");
      return (
        <div>
          <Head>
            <title>Loading...</title>
          </Head>
          <App />
          <Loader />
        </div>
      );
    }

    return (
      <div>
        <Head>
          <title>Loading..</title>
        </Head>
        <Loader />
      </div>
    );
  }

  if (!path?.all?.join("/")) {
    console.log("f2");
    dispatch(loaderOn());
    return (
      <div>
        <Head>
          <title>Loading..</title>
        </Head>
        <Loader />
      </div>
    );
  }
  console.log("f");

  return (
    <div>
      <Head>
        <title>Loading..</title>
      </Head>
      <Loader />
    </div>
  );
}
