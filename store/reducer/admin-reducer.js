import { types } from '../types';
import { defaultState } from '../data/defaultData';
export const AdminReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.editText: {
      const { newText, isSave } = action.payload;
      const { name, group, list, parentId, childId } = state.editText;
      if (isSave) {
        if (list && parentId > -1 && !childId && childId !== 0) {
          return {
            ...state,
            [list]: {
              data: state[list].data.map((item, index) =>
                index !== parentId
                  ? item
                  : {
                      ...item,
                      [name]: newText || '',
                    }
              ),
            },
            editText: {
              open: false,
              group: '',
              name: '',
              newText: '',
              list: '',
            },
          };
        }
        if (list && parentId > -1 && childId > -1) {
          return {
            ...state,
            [list]: {
              data: state[list].data.map((item, index) =>
                index !== parentId
                  ? item
                  : {
                      ...item,
                      [name]: item[name].map((childItem, childIndex) =>
                        childIndex !== childId
                          ? childItem
                          : {
                              ...childItem,
                              value: newText,
                            }
                      ),
                    }
              ),
            },
            editText: {
              open: false,
              group: '',
              name: '',
              newText: '',
            },
          };
        }
        if (group) {
          return {
            ...state,
            [group]: {
              ...state[group],
              data: state[group].data.map((item, index) =>
                index != action.payload.id ? item : { ...item, [name]: newText }
              ),
            },
            editText: {
              open: false,
              group: '',
              name: '',
              newText: '',
            },
          };
        }
        if (!group && newText) {
          return {
            ...state,
            [name]: {
              ...state[name],
              value: newText,
            },
            editText: {
              open: false,
              group: '',
              name: '',
              newText: '',
            },
          };
        } else {
          return {
            ...state,
            editText: {
              open: false,
              group: '',
              name: '',
              newText: '',
            },
          };
        }
      }

      // TypographyForModal open
      return {
        ...state,
        editText: {
          ...state.editText,
          ...action.payload,
        },
      };
    }
    // ---------------------------------
    case types.editLink: {
      const editLink = state.editLink;
      if (action.payload.isSave) {
        if (editLink.group) {
          return {
            ...state,
            [editLink.group]: {
              data: state[editLink.group].data.map((i, index) =>
                index === editLink.index
                  ? {
                      head_menu_title: action.payload.newName
                        ? action.payload.newName
                        : i.head_menu_title,
                      head_menu_href: action.payload.newHref
                        ? action.payload.newHref
                        : i.head_menu_href,
                    }
                  : i
              ),
            },
            editLink: {
              open: false,
              group: '',
              name: '',
              href: '',
              newHref: '',
              newName: '',
              isSave: false,
            },
          };
        }
        if (!editLink.group) {
          return {
            ...state,
            [editLink?.name]: {
              ...state[editLink?.name],
              value: action.payload?.newName
                ? action.payload?.newName
                : state[editLink?.name]?.value,
            },
            [editLink.hrefName]: {
              ...state[editLink?.hrefName],
              value: action.payload?.newHref
                ? action.payload?.newHref
                : state[editLink?.hrefName]?.value,
            },
            editLink: {
              open: false,
              group: '',
              name: '',
              href: '',
              newHref: '',
              newName: '',
              isSave: false,
            },
          };
        }
      }

      // TypographyForModal open
      return {
        ...state,
        editLink: {
          ...state.editLink,
          ...action.payload,
        },
      };
    }
    // ---------------------------------
    case types.editImage: {
      const editImage = state.editImage;
      if (action.payload.isSave) {
        if (editImage.group) {
          return {
            ...state,
            [editImage.group]: {
              ...state[editImage.group],
              data: state[editImage.group].data.map((item, index) =>
                index != editImage.id
                  ? item
                  : {
                      ...item,
                      img: {
                        src: action.payload.newHref || '',
                        alt: action.payload.newAlt || '',
                        title: action.payload.newTitle || '',
                      },
                    }
              ),
            },
            editImage: {
              open: false,
              isSave: false,
              href: '',
              newHref: '',
              alt: '',
              newAlt: '',
              title: '',
              newTitle: '',
            },
          };
        }
        if (editImage.list) {
          const { name, parentId, childId, list } = editImage;
          return {
            ...state,
            [list]: {
              data: state[list].data.map((tour, index) =>
                index !== parentId
                  ? tour
                  : {
                      ...tour,
                      [name]: state[list].data[parentId][name].map(
                        (img, imgId) =>
                          imgId !== childId
                            ? img
                            : {
                                ...img,
                                src: action.payload.newHref || '',
                                alt: action.payload.newAlt || '',
                                title: action.payload.newTitle || '',
                              }
                      ),
                    }
              ),
            },
            editImage: {
              open: false,
              isSave: false,
              href: '',
              newHref: '',
              alt: '',
              newAlt: '',
              title: '',
              newTitle: '',
            },
          };
        }
        return {
          ...state,
          [editImage?.srcDataName]: {
            ...[editImage?.srcDataName],
            value: action.payload.newHref,
          },
          [editImage?.altDataName]: {
            ...[editImage?.altDataName],
            value: action.payload.newAlt,
          },
          [editImage?.titleDataName]: {
            ...[editImage?.titleDataName],
            value: action.payload.newTitle,
          },
          editImage: {
            open: false,
            isSave: false,
            href: '',
            newHref: '',
            alt: '',
            newAlt: '',
            title: '',
            newTitle: '',
          },
        };
      }
      return {
        ...state,
        editImage: {
          ...editImage,
          ...action.payload,
        },
      };
    }
    // ---------------------------------
    case types.deleteItem: {
      const { group, itemId } = action.payload;
      if (group && state[group].data.length > 1) {
        return {
          ...state,
          [group]: {
            ...state[group],
            data: state[group].data.filter((_, index) => index !== itemId),
          },
        };
      }
      return state;
    }
    // ---------------------------------
    case types.addedItem: {
      const { group, itemId } = action.payload;
      if (group) {
        const data = [...state[group].data];
        data.splice(itemId, 0, data[itemId]);
        return {
          ...state,
          [group]: {
            ...state[group],
            data,
          },
        };
      }
      return state;
    }
    // ---------------------------------

    case types.checkEdit: {
      if (action.payload.isSave) {
        const {
          index = '',
          name = '',
          group = '',
          id = '',
        } = state.checkedEdit;

        return {
          ...state,
          [group]: {
            data: state[group].data.map((item, itemIndex) =>
              itemIndex != index
                ? item
                : {
                    ...item,
                    [name]: item[name].map((childItem, childIndex) =>
                      childIndex != id ? childItem : action.payload.newChenck
                    ),
                  }
            ),
          },
          checkedEdit: {
            isOpen: false,
            index: null,
            id: null,
            group: '',
            name: '',
          },
        };
      }
      return {
        ...state,
        checkedEdit: {
          isOpen: true,
          ...action.payload,
        },
      };
    }

    case types.editTour: {
      return {
        ...state,
        ...JSON.parse(action.data.tourTexts),
        isEdit: true,
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

    case types.componentIsActive: {
      const { name, checkbox_value } = action.payload;

      return {
        ...state,
        app_sections_active: state.app_sections_active.map((item) =>
          item.name === name ? { ...item, isActive: checkbox_value } : item
        ),
      };
    }
    case types.editCheckedForModal3: {
      return {
        ...state,
        checkerForModal3:action.payload.newText
      }
      }
    default:
      return state;
  }
};
