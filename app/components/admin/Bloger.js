import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { FaEdit, FaRegClone } from "react-icons/fa";
import styled from "styled-components";
import CyrillicToTranslit from "cyrillic-to-translit-js";


import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { defaultState } from "../../../store/data/DefaultBlog";
import {
  closeCreatTourModal,
  newTourCreatModal,
} from "../../../store/reducer/toursReducer";
import BlogCreateAndUpdate from "./BlogCreateAndUpdate";
import {
  createNewBlog,
  getAllMyBlogs,
  newBlogrCreatModal,
  updateBlogModal,
  updateMyBlogs,
} from "../../../store/reducer/blogReducer";
import { getAllCategorys } from "../../../store/reducer/categoryReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Bloger() {
  const blogsState = useSelector((state) => state.blogs);
  const categorysState = useSelector((state) => state.category);
  const router = useRouter();
  const defaultTexts = JSON.stringify(defaultState);
  const isLoginMe = JSON.parse(localStorage.getItem("isLoginMe"));
  const dispatch = useDispatch();
  const cyrillicToTranslit = new CyrillicToTranslit()
  const defaultBlog = {
    blogName: "",
    blogTexts: defaultTexts,
    blogAuthor: isLoginMe._id,
    category: "",
    date: "",
    address: "",
    language:isLoginMe.language,
  };
  const [blog, setBlog] = useState(defaultBlog);

  const createNewBlogHandler = () => {
    dispatch(newBlogrCreatModal());
  };
  const closeModalCreatorHandler = (event) => {
    dispatch(closeCreatTourModal());
    setBlog(defaultBlog);
  };
  const onChangeHandler = (event) => {
    if (event.target.name == 'blogName') {
      const { name, value } = event.target;
      const address = cyrillicToTranslit.transform(value, "_");
      setBlog((oldBlog) => ({ ...oldBlog, [name]: value, address })); 
    } else {
      const { name, value } = event.target;
      setBlog((oldBlog) => ({ ...oldBlog, [name]: value }));
    }
  };
  const onSaveHandler = () => {
    setTimeout(() => {
      dispatch(createNewBlog(blog));
    }, 500);
  };
  const onSaveUpdateBlog = () => {
    const {
      blogName,
      blogTexts,
      blogAuthor,
      category,
      _id,
      isItActive,
      address,
      language,
    } = blog;
    const updateBlog = {
      blogName,
      blogTexts,
      blogAuthor,
      category,
      isItActive,
      address,
      language,
    };
    dispatch(updateMyBlogs(_id, updateBlog));
  };
  const blogActiveOrNoActive = (blog, event) => {
    dispatch(getAllMyBlogs());
    const {
      blogName,
      blogTexts,
      blogAuthor,
      category,
      _id,
      isItActive,
      address,
      language
    } = blog;
    const updateBlog = {
      blogName,
      blogTexts,
      blogAuthor,
      category,
      isItActive: event.target.value,
      address,
      language,
    };
    dispatch(updateMyBlogs(_id, updateBlog));
    dispatch(getAllMyBlogs());
  };

  const tourPagePath = (path) => {
    router.push(path);
  };
  const openUpdateBlogModal = (check_blog) => {
    dispatch(updateBlogModal());
    setBlog(check_blog);
  };

  return (
    <>
      <BlogCreateAndUpdate
        blog={blog}
        onChange={onChangeHandler}
        onSave={onSaveHandler}
        onSaveUpdate={onSaveUpdateBlog}
        onCreateClose={closeModalCreatorHandler}
        categorys={categorysState.categorys}
      />
      <Wrapper>
        <div className="admin-section" id="super-admin">
          <div className="container">
            <h4>Hello {isLoginMe?.username}</h4>
            <h3>
              blogs
              <span
                className="log-out"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                <Link href={"/login"}>log out</Link>
              </span>
            </h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Blog Name</th>
                  <th scope="col">Blog Lang</th>
                  <th scope="col">Blog Created</th>
                  <th scope="col">
                    <div className="control-section d-flex">
                      <span>Controlls</span>
                      <div className="section-icon">
                        <HiOutlineDocumentAdd
                          className="add-user_icon"
                          onClick={createNewBlogHandler}
                        />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogsState.blogs.map((blog, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td className="item-w-t">
                      <span
                        className="tour-page-path"
                        onClick={() =>
                          tourPagePath(`/update/blog/${blog.address}`)
                        }
                      >
                        {blog.blogName}
                      </span>
                    </td>
                    <td className="item-w-t">{blog.category}</td>
                    <td className="item-w-t">{blog.date}</td>
                    <td className="item-w-t">
                      <div className="btn btn-group">
                        <button
                          className={"btn btn-info btn-sm mx-1"}
                          onClick={openUpdateBlogModal.bind(this,blog)}
                        >
                          <FaEdit />
                        </button>
                        <select
                          name="isitActive"
                          defaultValue={blog.isItActive}
                          onChange={blogActiveOrNoActive.bind(this, blog)}
                          className={`${
                            blog.isItActive == "published"
                              ? "blue"
                              : blog.isItActive == "noactive"
                              ? "yellow"
                              : "red"
                          }`}
                        >
                          <option
                            value="published"
                            style={{
                              background: "#4FA845",
                              color: "#fff",
                            }}
                          >
                            Published
                          </option>
                          <option
                            value="noactive"
                            style={{ background: "	#ffcc00", color: "#fff" }}
                          >
                            Noactive
                          </option>
                          <option
                            value="garbage"
                            style={{
                              background: "rgb(255,14,14)",
                              color: "#fff",
                            }}
                          >
                            Garbage
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .item-w-t {
    width: 30%;
  }
  .red {
    background-color: red;
    color: #fff;
    height: 30px;
  }
  .blue {
    background-color: #4fa845;
    color: #fff;
    height: 30px;
  }
  .yellow {
    background-color: #ffcc00;
    height: 30px;
    /* color: #fff; */
  }
  .control-section {
    position: relative;

    .section-icon {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-left: 10px;
    }
  }
  .add-user_icon {
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 0.2rem;
    margin-left: 3rem;
    transition: 400ms;
    position: absolute;
    right: 0;
    z-index: 1;
    &:hover {
      color: #696565;
    }
  }
  .log-out {
    font-size: 1rem;
    float: right;
    clear: both;
    margin-top: 0.2rem;
  }
  .tour-page-path {
    color: blue;
    font-size: 16px;
    cursor: pointer;
    transition: 300ms;
    &:hover {
      text-decoration: underline;
    }
  }

  .clone-tour-page {
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    z-index: -212;
    opacity: 0;
    .form {
      background-color: #000;
      padding: 20px;
      border-radius: 5px;
    }
    &.active {
      transition: opacity 1s;
      z-index: 22;
      opacity: 1;
    }
    p {
      text-align: center;
      color: #fff;
      text-transform: uppercase;
      font-size: 2rem;
    }
    ul {
      height: 200px;
      overflow: hidden;
      overflow-y: auto;

      &::-webkit-scrollbar {
        display: none;
      }

      li {
        display: flex;
        align-items: center;
        list-style-type: none;
        color: #eee;
        text-decoration: underline;

        min-width: 300px;
        justify-content: space-between;
        input {
          margin-left: 10px;
          margin-top: 4px;
        }
      }
    }

    .exit-btn {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .icon {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
`;

export default Bloger;
