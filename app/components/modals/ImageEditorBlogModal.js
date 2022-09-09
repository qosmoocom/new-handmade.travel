import { AiOutlineClose } from "react-icons/ai";
import { MdChangeCircle } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../../store/types";
import axios from "axios";
import { useRouter } from "next/router";

function ImageEditorBlogModal() {
  const state = useSelector((state) => state.bloger);
  const input0 = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const router = useRouter();
  const [values, setValues] = useState({
    alt1: "",
    alt2: "",
    alt3: "",
    title1: "",
    title2: "",
    title3: "",
    name1: "",
    name2: "",
    name3: "",
  });
  const [selectFile, setSelectFile] = useState("");
  const dispatch = useDispatch();
  const { open, name, isCreated, header } = state.editImage;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const closeModal = () => {
    console.log('close bosildi')
    dispatch({
      type: types.editImageBlog,
      payload: {
        open: false,
        isCreated: false,
        header: false,
      },
    });
    setValues({
      alt1: "",
      alt2: "",
      alt3: "",
      title1: "",
      title2: "",
      title3: "",
      name1: "",
      name2: "",
      name3: "",
    });
    setSelectFile("");
  };

  useEffect(() => {
    if (header == "open") {

      setValues({ ...values, name1: state.header.imgUrl,alt1:state.header.imgAlt,title1:state.header.imgTitle });
    }
    if (isCreated) {
      let it, i;
      for (it in state.data) {
        i = state.data[it][0];
        if (it == name) {
          setValues({
            ...values,
            alt1: i.alt1,
            alt2: i.alt2,
            alt3: i.alt3,
            name1: i.url1,
            name2: i.url2,
            name3: i.url3,
            title1: i.title1,
            title2: i.title2,
            title3: i.title3,
          });
        }
      }
    }
  }, [state.editImage.open]);

  const onUpdateHandler = async () => {
    const { alt1, alt2, alt3, title1, title2, title3 } = values;
    if (!selectFile[0]) {
      dispatch({
        type: types.editImageBlog,
        payload: {
          isSave: true,
          type: "image",
          alt1,
          alt2,
          alt3,
          title1,
          title2,
          title3,
          open: false,
          isCreated: true,
          isUploaded: false,
          name,
        },
      });
      setValues({ alt1: "", alt2: "", alt3: "" });
      setSelectFile("");
    } else {
      const formData = new FormData();
      formData.append("blogName", router.query.id);
      selectFile.forEach((file) => {
        formData.append("image", file);
      });
      // formData.append("image", selectFile);

      try {
        const res = await axios({
          method: "post",
          url: "/api/blogImages/add",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        const { data, success } = await res.data;
        if (data.image2 && data.image3) {
          dispatch({
            type: types.editImageBlog,
            payload: {
              isSave: true,
              type: "image",
              url1: data.image1.replace("/public", ""),
              url2: data.image2.replace("/public", ""),
              url3: data.image3.replace("/public", ""),
              alt1,
              alt2,
              alt3,
              open: false,
              isCreated: true,
              isUploaded: true,
              name,
            },
          });

      

        } else if (data.image2 && !data.image3) {
          dispatch({
            type: types.editImageBlog,
            payload: {
              isSave: true,
              type: "image",
              url1: data.image1.replace("/public", ""),
              url2: data.image2.replace("/public", ""),
              alt1,
              alt2,
              open: false,
              isCreated: true,
              isUploaded: true,
              name,
            },
          });
        } else {
          dispatch({
            type: types.editImageBlog,
            payload: {
              isSave: true,
              type: "image",
              url1: data.image1.replace("/public", ""),
              alt1,
              open: false,
              isCreated: true,
              isUploaded: true,
              name,
            },
          });
        }

        // console.log("yangi img qushildi...");
        // router.reload(window.location.pathname);
      } catch (error) {}
    }
    setValues({
      alt1: "",
      alt2: "",
      alt3: "",
      title1: "",
      title2: "",
      title3: "",
      name1: "",
      name2: "",
      name3: "",
    });
    setSelectFile("");
  };

  const onSaveHandler = async () => {
    const { alt1, alt2, alt3, title1, title2, title3 } = values;
    const formData = new FormData();
    formData.append("blogName", router.query.id);
    selectFile.forEach((file) => {
      formData.append("image", file);
    });
    // formData.append("image", selectFile);

    try {
      const res = await axios({
        method: "post",
        url: "/api/blogImages/add",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const { data, success } = await res.data;
      if (data.image2 && data.image3) {
        dispatch({
          type: types.editImageBlog,
          payload: {
            isSave: true,
            type: "image",
            url1: data.image1.replace("/public", ""),
            url2: data.image2.replace("/public", ""),
            url3: data.image3.replace("/public", ""),
            alt1,
            alt2,
            alt3,
            title1,
            title2,
            title3,
            open: false,
            isCreated: false,
          },
        });
      } else if (data.image2 && !data.image3) {
        dispatch({
          type: types.editImageBlog,
          payload: {
            isSave: true,
            type: "image",
            url1: data.image1.replace("/public", ""),
            url2: data.image2.replace("/public", ""),
            alt1,
            alt2,
            title1,
            title2,
            open: false,
            isCreated: false,
          },
        });
      } else {
        dispatch({
          type: types.editImageBlog,
          payload: {
            isSave: true,
            type: "image",
            url1: data.image1.replace("/public", ""),
            alt1,
            title1,
            open: false,
            isCreated: false,
          },
        });
      }

      // console.log("yangi img qushildi...");
      // router.reload(window.location.pathname);
    } catch (error) {}
    setValues({
      alt1: "",
      alt2: "",
      alt3: "",
      title1: "",
      title2: "",
      title3: "",
      name1: "",
      name2: "",
      name3: "",
    });
    setSelectFile("");
  };

  const onUpdateHandlerHeader = async () => {
    const { alt1, alt2, alt3, title1 } = values;
    console.log(selectFile);
    if (!selectFile) {
      dispatch({
        type: types.editImageBlog,
        payload: {
          header: "saved",
          type: "image",
          imgAlt:alt1,
          imgTitle:title1,
          open: false,
        },
      });
      console.log('not select file')
    }
    if (selectFile) {
      const formData = new FormData();
      formData.append("blogName", router.query.id);
      // selectFile.forEach((file) => {
      //   formData.append("image", file);
      // });
      formData.append("image", selectFile[0]);
      console.log('saqlash boshlandi')
      try {
        const res = await axios({
          method: "post",
          url: "/api/blogImages/add",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });

        const { data, success } = await res.data;
        // console.log(data.image1.replace("/public", ""))

        console.log('ssss')
        
        dispatch({
          type: types.editImageBlog,
          payload: {
            header: "saved",
            type: "image",
            imgUrl: data.image1.replace("/public", ""),
            imgAlt:alt1,
            imgTitle:title1,
            open: false,
          },
        });

        // dispatch({
        //   type: types.editImageBlog,
        //   payload: {
        //     open: false,
        //     isCreated: false,
        //     header: false,
        //   },
        // });

        console.log("yangi img qushildi...");
        // router.reload(window.location.pathname);
      } catch (error) {}
    }
    
    
    setValues({
      alt1: "",
      alt2: "",
      alt3: "",
      title1: "",
      title2: "",
      title3: "",
      name1: "",
      name2: "",
      name3: "",
    });
    setSelectFile("");
  };

  if (header == "open") {
    return (
      <Section className={open ? "active" : ""}>
        <div className="modal-after-click" onClick={closeModal}></div>
        <div className="wrap-container">
          <AiOutlineClose className="close-btn" onClick={closeModal} />
          <div className="input">
            <div className="form">
              <div className="changer">
                <MdChangeCircle onClick={() => input0.current.click()} />
              </div>
              <input
                value={selectFile[0] ? selectFile[0].name : values.name1}
                readOnly
              />
              <input
                type="file"
                name="image1"
                id="fileInput"
                placeholder="Choose image"
                ref={input0}
                onChange={(event) => {
                  setSelectFile([...selectFile, event.target.files[0]]);
                }}
              />
              <input
                type="text"
                placeholder="Image-1 Alt"
                name="alt1"
                className="alt"
                value={values.alt1}
                onChange={onChangeHandler}
              />
              <input
                type="text"
                placeholder="Image-1 Title"
                name="title1"
                className="title"
                value={values.title1}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="btn-box">
            <button className="cansel" onClick={closeModal}>
              cancel
            </button>
            <button
              className={`${values.alt1 && selectFile ? "save" : "disable"}`}
              disabled={!(values.alt1)}
              onClick={onUpdateHandlerHeader}
            >
              save
            </button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className={open ? "active" : ""}>
      <div className="modal-after-click" onClick={closeModal}></div>
      <div className="wrap-container">
        <AiOutlineClose className="close-btn" onClick={closeModal} />
        <div className="input">
          <div className="form">
            <div className="changer">
              <MdChangeCircle onClick={() => input1.current.click()} />
            </div>
            <input
              value={selectFile[0] ? selectFile[0].name : values.name1}
              readOnly
            />
            <input
              type="file"
              name="image1"
              id="fileInput"
              placeholder="Choose image"
              ref={input1}
              onChange={(event) => {
                setSelectFile([...selectFile, event.target.files[0]]);
              }}
            />
            <input
              type="text"
              placeholder="Image-1 Alt"
              name="alt1"
              className="alt"
              value={values.alt1}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              placeholder="Image-1 Title"
              name="title1"
              className="title"
              value={values.title1}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form">
            <div className="changer">
              <MdChangeCircle onClick={() => input2.current.click()} />
            </div>
            <input
              value={selectFile[1] ? selectFile[1].name : values.name2}
              readOnly
            />
            <input
              type="file"
              name="image2"
              id="fileInput"
              placeholder="Choose image"
              ref={input2}
              onChange={(event) => {
                setSelectFile([...selectFile, event.target.files[0]]);
              }}
            />
            <input
              type="text"
              placeholder="Image-2 Alt"
              name="alt2"
              className="alt"
              value={values.alt2}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              placeholder="Image-2 Title"
              name="title2"
              className="title"
              value={values.title2}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form">
            <div className="changer">
              <MdChangeCircle onClick={() => input3.current.click()} />
            </div>
            <input
              value={selectFile[2] ? selectFile[2].name : values.name3}
              readOnly
            />
            <input
              type="file"
              name="image3"
              id="fileInput"
              placeholder="Choose image"
              ref={input3}
              onChange={(event) => {
                setSelectFile([...selectFile, event.target.files[0]]);
              }}
            />
            <input
              type="text"
              placeholder="Image-3 Alt"
              name="alt3"
              className="alt"
              value={values.alt3}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              placeholder="Image-3 Title"
              name="title3"
              className="title"
              value={values.title3}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="btn-box">
          <button className="cansel" onClick={closeModal}>
            cancel
          </button>
          <button
            className={`${values.alt1 ? "save" : "disable"}`}
            disabled={!values.alt1}
            onClick={isCreated ? onUpdateHandler : onSaveHandler}
          >
            save
          </button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  opacity: -4;
  z-index: -4;
  position: fixed;
  top: -100%;
  transition-duration: 0.5s;

  &.active {
    opacity: 1;
    top: 0;
    z-index: 999999;
  }
  .modal-after-click {
    width: 100vw;
    height: 100vh;
    /* background-color: yellow; */
    z-index: 4;
    opacity: 0.5;
  }
  .wrap-container {
    z-index: 5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #fff;
    width: 900px;
    min-width: 300px;
    border-radius: 5px;
    border: 2px solid black;
    .changer {
      height: 45px;
      width: 45px;
      font-size: 30px;
      transition-duration: 0.2s;
      svg {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .close-btn {
      position: relative;
      left: 95%;
      cursor: pointer;
    }
    .action-btns {
      select {
        width: 50px;
      }
      button {
        border: 1px solid black;
        width: 20px;
        height: 30px;
        text-align: center;
        padding: 0 1px;
        border-radius: 5px;
        margin: 0 5px;
      }
      .active {
        background-color: green;
        color: #fff;
      }
    }
    .input {
      width: 100%;
      padding: 20px 0;
      .form {
        display: flex;
        label {
          width: 500px;
          border: 2px solid black;
          padding: 5px;
          margin: 2px 0;
        }
        #fileInput {
          display: none;
        }
        input {
          width: 100%;
          border: 2px solid black;
          padding: 5px;
          margin: 5px;
          width: 300px;
        }
        label {
          margin: 5px;
        }
        /* .alt, .title {
          margin-top: 10px;
        } */
      }
    }
    .btn-box {
      display: flex;
      justify-content: flex-end;
      button {
        background-color: blue;
        color: #fff;
        margin: 0 5px;
        padding: 5px 10px;
        border-radius: 5px;
      }
      .cansel {
        background-color: red;
      }
      .disable {
        opacity: 0.5;
      }
    }
  }
`;

export default ImageEditorBlogModal;
