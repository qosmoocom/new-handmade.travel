import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteUserId,
  createUser,
  openCreateUserModal,
  closeCreateUserModal,
  updateUserModal,
  updateUserId,
} from "../../../store/reducer/usersReducer";

import CategoryCreateAndUpdate from "./CategoryCreateAndUpdate";
import {
  closeCreatecategoryModal,
  createCategory,
  deleteCategoryId,
  openCreatecategoryModal,
  updateCategoryId,
  updateCategoryModal,
} from "../../../store/reducer/categoryReducer";
export default function Categorys() {
  const globalState = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    name: "",
    russianName: "",
    englishName: "",
    espanolName: "",
    italiyName: "",
    frenchName: "",
    deutschName: "",
  });
  const createCategoryHandler = () => {
    dispatch(openCreatecategoryModal());
    setCategory({
      name: "",
      russianName: "",
      englishName: "",
      espanolName: "",
      italiyName: "",
      frenchName: "",
      deutschName: "",
    });
  };
  const onCloseModal = () => {
    dispatch(closeCreatecategoryModal());
    setCategory({
      name: "",
      russianName: "",
      englishName: "",
      espanolName: "",
      italiyName: "",
      frenchName: "",
      deutschName: "",
    });
  };

  const deleteHandler = (category) => {
    const { _id } = category;
      if (confirm("Haqiqatdan ham o'chirilsinmi ?")) {
         dispatch(deleteCategoryId(_id));
      }     
  };

  const onSaveNewCategoryHandler = () => {
    const newCategory = { ...category };
    dispatch(createCategory(newCategory));
  };
  const onSaveUpdateCategory = () => {
    const {
      name,
      russianName,
      englishName,
      espanolName,
      italiyName,
      frenchName,
      deutschName,
    } = category;
    const updateCategory = {
      name,
      russianName,
      englishName,
      espanolName,
      italiyName,
      frenchName,
      deutschName,
    };
    const _id = category._id;
    dispatch(updateCategoryId(updateCategory, _id));
  };
  const onUpdateCategoryHandler = (oldCategory) => {
    dispatch(updateCategoryModal());
    const {
      name,
      russianName,
      englishName,
      espanolName,
      italiyName,
      frenchName,
      deutschName,
    } = oldCategory;
    setCategory((ou) => ({
      ...ou,
      _id: oldCategory._id,
      name,
      russianName,
      englishName,
      espanolName,
      italiyName,
      frenchName,
      deutschName,
    }));
  };

  return (
    <>
      <CategoryCreateAndUpdate
        category={category}
        setCategory={setCategory}
        onSave={onSaveNewCategoryHandler}
        isItCreate={globalState.isCreateCategory}
        onClose={onCloseModal}
        onUpdate={onSaveUpdateCategory}
        isItUpdate={globalState.isUpdateCategory}
      />
      <Wrapper>
        <div className="admin-section" id="super-admin">
          <div className="container">
            <h3>Categorys</h3>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Categoryname</th>
                  <th scope="col">
                    <span>Controlls</span>
                    <AiOutlineUserAdd
                      className="add-user_icon"
                      onClick={createCategoryHandler}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {globalState?.categorys.map((category, index) => {
                  return (
                    <tr key={category._id}>
                      <th scope="row">{index + 1}</th>
                      <td className="item-w-t">{category.name}</td>
                      <td className="item-w-t">
                        <span className="w-50 d-inline-block">
                          <button
                            className={"btn btn-info"}
                            onClick={onUpdateCategoryHandler.bind(
                              this,
                              category
                            )}
                          >
                            edit
                          </button>
                        </span>
                        <span className="w-50">
                          <button
                            className="btn btn-danger"
                            onClick={deleteHandler.bind(this, category)}
                          >
                            delete
                          </button>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  .user-input {
    background: none !important;
    transition: 300ms;
    &.error {
      border: 2px solid red !important;
    }
  }
  .item-w-t {
    width: 30%;
  }
  .add-user_icon {
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 0.2rem;
    margin-left: 3rem;
    transition: 400ms;
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
`;
