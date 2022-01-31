import { types } from "../types";

const initialState = {
  // head
  menu: {
    data: [
      { head_menu_title: "Даты и цены", head_menu_href: "#bron" },
      { head_menu_title: "ЧТО ВКЛЮЧЕНО", head_menu_href: "#text" },
      { head_menu_title: "ОТЗЫВЫ", head_menu_href: "#coment" },
      { head_menu_title: "КОНТАКТЫ", head_menu_href: "#contact" },
    ],
  }, // group='menu' {name='head_menu_href', name='head_menu_title'}
  head_btn_call: { value: "", styles: {} }, // name='head_btn_call' group=undefined
  head_btn_bron: { value: "", styles: {} }, // name='head_btn_bron' group=undefined
  head_text_1: { value: "", styles: {} }, // name='head_text_1' group=undefined
  head_text_2: { value: "", styles: {} }, // name='head_text_2' group=undefined
  head_text_3: { value: "", styles: {} }, // name='head_text_3' group=undefined
  my_logo_text: { value: "", styles: {} }, // name='my_logo_text' group=undefined
  my_logo_img_url: { value: "" }, // name='my_logo_img_url' group=undefined
  head_img_title: { value: "" }, // name='head_img_title' group=undefined
  head_img_alt: { value: "" }, // name='head_img_alt' group=undefined
  head_img_url: { value: "" }, // name='head_img_url' group=undefined
  head_img_Mobile_url: { value: "" }, // name='head_img_Mobile_url' group=undefined
  head_phone_href: { value: "" }, //  name='head_phone_href' group=undefined,
  head_phone_ru: { value: "" }, //  name='head_phone_ru' group=undefined,
  head_tg_href: { value: "" }, //  name='head_phone_ru' group=undefined,
  head_wt_href: { value: "" }, //  name='head_wt_href' group=undefined,
  head_fc_href: { value: "" }, //  name='head_fc_href' group=undefined,
  bread_crumbs: { value: "" }, //  name='bread_crumbs' group=undefined,
  bread_crumbs_gastro: { value: "" }, //  name='bread_crumbs_gastro' group=undefined,

  // first utp
  first_utp_1: { value: "", styles: {} },
  first_utp_01: { value: "" },
  first_utp_2: { value: "" },
  first_utp_02: { value: "" },
  first_utp_3: { value: "" },
  first_utp_03: { value: "" },
  first_utp_4: { value: "" },
  first_utp_04: { value: "" },

  // second utp
  second_utp_title: { value: "", styles: {} },
  secontData: {
    data: [{ img_url: "", title: "", info: "", alt: "", img_title: "" }],
    styles: {
      title: {},
      info: {},
      img_url: {},
    },
  },

  // tour program
  // tour_program_title: { value: "", styles },
  // tour_program_data: {
  //   data: [

  //   ]
  // }
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.clearText: {
      const { name, group, index } = action.payload;
      let newState;

      if (!group) {
        newState = {
          ...state,
          [name]: {
            value: "",
          },
        };
      } else {
        let newData = [...state[group]?.data];

        if (newData.length >= index) {
          newData[index][name] = "";
        }
        newState = {
          ...state,
          [group]: {
            data: newData,
          },
        };
      }
      return newState;
    }
    case types.changeText: {
      const { name, group, value, index } = action.payload;
      let newState;
      if (!group) {
        newState = {
          ...state,
          [name]: {
            value,
          },
        };
      } else {
        let newData = [...state[group].data];
        if (newData.length >= index) {
          newData[index][name] = value;
        }
        newState = {
          ...state,
          [group]: {
            ...state[group],
            data: newData,
          },
        };
      }

      return newState;
    }
    case types.changeStyle: {
      const { name, styles, group, list, id } = action.payload;
      if (list && id) {
        return {
          ...state,
          [list]: {
            ...state[list],
            styles: {
              ...state[list].styles,
              [id]: styles,
            },
          },
        };
      }

      if (!group) {
        return { ...state, [name]: { ...state[name], styles } };
      }

      return { ...state, [group]: { ...state[group], styles } };
    }
    case types.addElements: {
      const { group } = action.payload;
      let newData = [...state[group].data];
      let firstItem = newData[0];
      let newObject = {};
      const keys = Object.keys(firstItem);
      keys.forEach((element) => {
        newObject[element] = "";
      });
      newData.push(newObject);
      let newState = {
        ...state,
        [group]: {
          ...state[group],
          data: newData,
        },
      };
      return newState;
    }
    case types.deleteItem: {
      const { group, index } = action.payload;
      return {
        ...state,
        [group]: {
          ...state[group],
          data: state[group].data.filter((_, idx) => idx !== index),
        },
      };
    }
    default:
      return state;
  }
};
