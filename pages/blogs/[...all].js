import Head from "next/head";
import Axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import App from "../../app/blog";
import { loaderOff, loaderOn } from "./../../store/reducer/loaderReducer";
import Loader from "../../app/components/Loader";
import { useState, useEffect } from "react";
import { types } from "../../store/types";
import { setOneBlog } from "../../store/reducer/blogReducer";
import Header from '../../app/home/header'
import Footer from '../../app/home/footer'
import {home as homeRu} from '../../store/data/home/homeRu'
import {home as homeEn} from '../../store/data/home/homeEn'
import {home as homeEs} from '../../store/data/home/homeEs'
import {home as homeDe} from '../../store/data/home/homeDe'
import {home as homeIt} from '../../store/data/home/homeIt'
import {home as homeFr} from '../../store/data/home/homeFr'

export default function Index() {
  const router = useRouter();
  const path = router.query;
  const dispatch = useDispatch();
  const [isItPath, setIsItPath] = useState(false);
  const [blogName, setBlogName] = useState('')
  const [contentBlog, setContentBlog] = useState('')


  const [home, setHome] = useState(homeRu)

  useEffect(() => {
    let currentLang = localStorage.getItem('lang')
    switch (currentLang) {
        case "ru":
            setHome(homeRu)
            break
        case "de":
            setHome(homeDe)
        break
        case "en":
            setHome(homeEn)
        break
        case "es":
            setHome(homeEs)
        break
        case "it":
            setHome(homeIt)
        break
        case "fr":
            setHome(homeFr)
        break
        default:
            setHome(homeRu)
        // return;
    }
  },);
  
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
    fetchData(path.all.join("/"));
    if (isItPath == "published") {
      return (
        <div>
          <Head>
            <title>{blogName}</title>
          </Head>
          <Header data={home} showBanner={false}/>
          <App editBlog={false}/>
          <Footer data={home}/> 
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
