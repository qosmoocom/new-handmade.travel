import { defaultState } from "../data/DefaultBlog";
import { types } from "../types";

export const Bloger = (state = defaultState, action) => {
  switch (action.type) {

    case types.editTextBlog: {
      const {
        isSave,
        newText,
        typeText,
        center,
        u,
        i,
        b,
        isCreated,
        name,
        open,
        header,
        val,
        saveContent,
        content
      } = action.payload;
      if (header == "saved") {
        return {
          ...state,
          header: {
            ...state.header,
            [val]: newText,
          },
          editText: {
            ...state.editText,
            ...action.payload,
          },
        };
      }
      if (isSave) {
        if (isCreated) {
          let object = {
            name,
            type: action.payload.type,
            content: newText,
            typeText,
            center,
            u,
            i,
            b,
          };
          return {
            ...state,
            data: {
              ...state.data,
              [name]: [object],
            },
            editText: {
              ...state.editText,
              open,
              name: "",
              isCreated: false,
              newText: "",
            },
          };
        }
        let length = 0,
          I;
        for (I in state.data) {
          length++;
        }
        return {
          ...state,
          data: {
            ...state.data,
            ["text-name-" + (length + 1)]: [
              {
                name: "text-name-" + (length + 1),
                type: action.payload.type,
                content: newText,
                typeText,
                center,
                u,
                i,
                b,
              },
            ],
          },
          editText: {
            ...state.editText,
            open: action.payload.open,
          },
        };
      }
      if (saveContent) {
        return {
          ...state,
          content
        };
      }
      return {
        ...state,
        editText: {
          ...state.editText,
          ...action.payload,
        },
      };
    }

    case types.editImageBlog: {

      const {
        alt1,
        alt2,
        alt3,
        url1,
        url2,
        url3,
        title1,
        title2,
        title3,
        isSave,
        open,
        isCreated,
        isUploaded,
        name,
        header,
      } = action.payload;

      if (header == "saved") {
        return {
          ...state,
          header: {
            ...state.header,
            ...action.payload,
          },
          editImage: {
            ...state.editImage,
            open: false,
            name: "",
            isCreated: false,
            header: false,
          },
        };
      }
      if (isSave) {
        if (isCreated) {
          if (isUploaded) {
            return {
              ...state,
              data: {
                ...state.data,
                [name]: [
                  {
                    name,
                    type: action.payload.type,
                    url1,
                    url2,
                    url3,
                    alt1,
                    alt2,
                    alt3,
                    title1,
                    title2,
                    title3,
                  },
                ],
              },
              editImage: {
                ...state.editImage,
                open: false,
                name: "",
                isCreated: false,
              },
            };
          }
          return {
            ...state,
            data: {
              ...state.data,
              [name]: [
                {
                  name,
                  type: action.payload.type,
                  url1: state.data[name][0].url1,
                  url2: state.data[name][0].url2,
                  url3: state.data[name][0].url3,
                  alt1,
                  alt2,
                  alt3,
                  title1,
                  title2,
                  title3,
                },
              ],
            },
            editImage: {
              ...state.editImage,
              open: false,
              name: "",
              isCreated: false,
            },
          };
        }
        let length = 0,
          I;
        for (I in state.data) {
          length++;
        }
        return {
          ...state,
          data: {
            ...state.data,
            ["image-name-" + (length + 1)]: [
              {
                name: "image-name-" + (length + 1),
                type: action.payload.type,
                url1,
                url2,
                url3,
                alt1,
                alt2,
                alt3,
                title1,
                title2,
                title3,
              },
            ],
          },
          editImage: {
            ...state.editImage,
            open: action.payload.open,
            name: "",
            isCreated: false,
          },
        };
      }
      return {
        ...state,
        editImage: {
          ...state.editImage,
          ...action.payload,
        },
      };
    }

    case types.editBlog: {
      // console.log('Edir blog', JSON.parse(action.data.blogTexts).content)
      return {
        ...state,
        content : JSON.parse(action.data.blogTexts).content,
        ...JSON.parse(action.data.blogTexts),
        isEdit: true,
      };
    }

    case types.deleteBlog: {
      const { name } = action.payload;
      return {
        ...state,
      };
    }

    case types.editorOff: {
      return {
        ...state,
        isEdit: false,
      };
    }

    case types.editorOn: {
      return {
        ...state,
        isEdit: true,
      };
    }

    default:
      return { ...state };
  }
};
