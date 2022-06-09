/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { getConfig } from "../../../store/reducer/usersReducer";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  //   get All tour
  const getAllBlogs = async () => {
    const api = `/api/blog/all`;
    setLoading(true);
    try {
      const res = await Axios.get(api, getConfig());
      const data = await res.data;
      if (data) setBlogs(data);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    } catch (error) {}
  };

  //   delete tour
  const deleteBlog = async (blog) => {
    const api = `/api/blog/${blog._id}`;
    if (confirm("Haqiqatdan o'chirilsinmi")) {
      try {
        const res = await Axios.delete(api, getConfig());
        const data = await res.data;
        if (data) {
          await getAllBlogs();
        }
      } catch (error) {}
      
    }
  };

  //   componentDidMount
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <Wrapper>
      <div className="title">
        <p>AllBlogs</p>{" "}
        <div className="update-btn">
          <GrUpdate
            className="icon"
            onClick={getAllBlogs}
            style={{
              transform: loading ? `rotate(45deg)` : null,
            }}
          />
        </div>
      </div>
      {/* tours */}
      <table className="table table-sm table-danger table-hover">
        <thead>
          <tr>
            <th scope="col" style={{ width: "5%" }}>
              #
            </th>
            <th scope="col" style={{ width: "30%" }}>
              Blog name
            </th>
            <th scope="col" style={{ width: "30%" }}>
              Created date
            </th>
            <th scope="col" style={{ width: "30%" }}>
              Blog category
            </th>
            <th scope="col" style={{ width: "5%" }}>
              control
            </th>
          </tr>
        </thead>
        {!loading && (
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <tr key={blog._id}>
                  <td scope="row" style={{ width: "5%" }}>
                    {index + 1}
                  </td>
                  <td scope="row" style={{ width: "30%" }}>
                    {blog.blogName}
                  </td>
                  <td scope="row" style={{ width: "30%" }}>
                    {blog.date}
                  </td>
                  <td scope="row" style={{ width: "30%" }}>
                    {blog.category}
                  </td>
                  <td scope="row" style={{ width: "5%" }}>
                    <button
                      disabled={blog.isItActive != "garbage"}
                      onClick={async () => await deleteBlog(blog)}
                    >
                      <AiFillDelete className="delete-tour" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
        {loading && (
          <div className="loading">
            <p>Loading...</p>
          </div>
        )}
      </table>
    </Wrapper>
  );
}

export default AllBlogs;

const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
  }
  .update-btn {
    padding-bottom: 17px;
    padding-left: 20px;
    .icon {
      cursor: pointer;
    }
  }
  tbody {
    border-top: none !important;
  }
  .loading {
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none !important;
  }

  
`;
