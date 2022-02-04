import { types } from "../types";

const initialState = {
  editText: {
    open: false,
    group: "",
    name: "",
    newText: "",
  },
  editLink: {
    open: false,
    group: "",
    name: "",
    href: "",
    newHref: "",
    newName: "",
    isSave: false,
  },
  // head
  menu: {
    data: [
      { head_menu_title: "Даты и цены", head_menu_href: "#bron" },
      { head_menu_title: "ЧТО ВКЛЮЧЕНО", head_menu_href: "#text" },
      { head_menu_title: "ОТЗЫВЫ", head_menu_href: "#coment" },
      { head_menu_title: "КОНТАКТЫ", head_menu_href: "#contact" },
    ],
  }, // group='menu' {name='head_menu_href', name='head_menu_title'}
  head_btn_call: { value: "Заказать звонок" }, // name='head_btn_call' group=undefined
  head_btn_bron: { value: "БРОНИРОВАТЬ" }, // name='head_btn_bron' group=undefined
  head_text_1: {
    value: `ГАСТРОНОМИЧЕСКОЕ ПРИКЛЮЧЕНИЕ “РУССКих В УЗБЕКИСТАНЕ”`,
  }, // name='head_text_1' group=undefined
  head_text_2: { value: "Вкусный Узбекистан" }, // name='head_text_2' group=undefined
  head_text_3: {
    value:
      "Авторская программа вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий.  ",
  }, // name='head_text_3' group=undefined
  my_logo_text: { value: "my hand. I made. my travel" }, // name='my_logo_text' group=undefined
  to_book_btn: { value: "БРОНИРОВАТЬ" }, // name='my_logo_text' group=undefined
  my_logo_img_url: { value: "/images/logo.webp" }, // name='my_logo_img_url' group=undefined
  logofixed_img: { value: "/images/logonotext.webp" },
  logofixed_text: { value: "handmade.travel" },
  head_img_title: { value: "Узбекский плов" }, // name='head_img_title' group=undefined
  head_img_alt: { value: "Авторский узбекский плов" }, // name='head_img_alt' group=undefined
  head_img_url: { value: "/images/landing/gastro/header/back.webp" }, // name='head_img_url' group=undefined
  head_img_Mobile_url: { value: "/images/landing/gastro/header/backmobl.webp" }, // name='head_img_Mobile_url' group=undefined
  head_phone_href: { value: "+78123095211" }, //  name='head_phone_href' group=undefined,
  head_phone_ru: { value: "+7 812 309 52 11" }, //  name='head_phone_ru' group=undefined,
  head_tg_href: { value: "https://t.me/handmadetravel_ru" }, //  name='head_phone_ru' group=undefined,
  head_wt_href: { value: "https://wa.me/998937201028" }, //  name='head_wt_href' group=undefined,
  head_fc_href: {
    value: "https://www.facebook.com/messages/t/581402519012804/",
  }, //  name='head_fc_href' group=undefined,
  bread_crumbs: { value: "Главная страница/ " }, //  name='bread_crumbs' group=undefined,
  bread_crumbs_gastro: { value: "Гастро-тур Узбекистан" }, //  name='bread_crumbs_gastro' group=undefined,

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
    case types.editText: {
      const { newText, isSave } = action.payload;
      const { name, group } = state.editText;
      if (isSave) {
        if (!group && newText) {
          return {
            ...state,
            [name]: {
              ...state[name],
              value: newText,
            },
            editText: {
              open: false,
              group: "",
              name: "",
              newText: "",
            },
          };
        } else {
          return {
            ...state,
            editText: {
              open: false,
              group: "",
              name: "",
              newText: "",
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
    case types.editLink: {
      const editLink = state.editLink;
      if (editLink.isSave) {
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
              group: "",
              name: "",
              href: "",
              newHref: "",
              newName: "",
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
              group: "",
              name: "",
              href: "",
              newHref: "",
              newName: "",
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
    default:
      return state;
  }
};
