import Head from "next/head";
import Axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import App from "../../app/blog";
import { loaderOff, loaderOn } from "./../../store/reducer/loaderReducer";
import Loader from "../../app/components/Loader";
import { useState } from "react";
import { types } from "../../store/types";
import { getMyTourStyle, setOneTour } from "../../store/reducer/toursReducer";
import { setOneBlog } from "../../store/reducer/blogReducer";
export default function Index() {
  const router = useRouter();
  const path = router.query;
  const dispatch = useDispatch();
  const [isItPath, setIsItPath] = useState(false);
  const [blogName, setBlogName] = useState('')
  const [contentBlog, setContentBlog] = useState('')
  
  const fetchData = async (id) => {
    const api = `/api/blog/${id}`;
    try {
      const res = await Axios.get(api);
      const data = await res.data;
      // dispatch(getMyTourStyle(data[0]._id));
      dispatch({ type: types.editBlog, data: data[0] });
      dispatch(setOneBlog(data[0]));
      dispatch({ type: types.editorOff });
      // const tour_id = data[0].tour_id;
      const isItActive = data[0].isItActive;
      const language = data[0].language;
      const address = data[0].address;
      dispatch(loaderOff());
      setIsItPath(
        [language,address].join("/") === path.all.join("/") && isItActive
      );
      setBlogName(data[0].blogName)
    } catch (error) {
      setTimeout(() => {
        router.push("/404");
      });
    }
  };

  if (path?.all?.join("/")) {
    console.log(path?.all?.join("/"))
    fetchData(path.all.join("/"));
    if (isItPath == "published") {
      return (
        <div>
          <Head>
            <title>{blogName}</title>
          </Head>
          <App editBlog={false}/>
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

  return (
    <div>
      <Head>
        <title>Loading..</title>
      </Head>
      <Loader />
    </div>
  );
}
