import { AiOutlineConsoleSql } from "react-icons/ai";
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
    href: "",
    newHref: "",
    name: "",
    newName: "",
    isSave: false,
  },
  editImage: {
    open: false,
    isSave: false,
    href: "",
    newHref: "",
    alt: "",
    newAlt: "",
    title: "",
    newTitle: "",
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
  logofixed_img_src: { value: "/images/logonotext.webp" },
  logofixed_img_alt: { value: "logo" },
  logofixed_img_title: { value: "handmade.taravel logo" },
  logofixed_text: { value: "handmade.travel" },
  head_img_title: { value: "Узбекский плов" }, // name='head_img_title' group=undefined
  head_img_alt: { value: "Авторский узбекский плов" }, // name='head_img_alt' group=undefined
  head_img_url: { value: "/images/landing/gastro/header/back.webp" }, // name='head_img_url' group=undefined
  head_img_Mobile_url: { value: "/images/landing/gastro/header/backmobl.webp" }, // name='head_img_Mobile_url' group=undefined
  head_phone_href: { value: "tel:+78123095211" }, //  name='head_phone_href' group=undefined,
  head_phone_ru: { value: "+7 812 309 52 11" }, //  name='head_phone_ru' group=undefined,
  head_tg_href: { value: "https://t.me/handmadetravel_ru" }, //  name='head_phone_ru' group=undefined,
  head_wt_href: { value: "https://wa.me/998937201028" }, //  name='head_wt_href' group=undefined,
  head_fc_href: {
    value: "https://www.facebook.com/messages/t/581402519012804/",
  }, //  name='head_fc_href' group=undefined,
  bread_crumbs: { value: "Главная страница/ " }, //  name='bread_crumbs' group=undefined,
  bread_crumbs_gastro: { value: "Гастро-тур Узбекистан" }, //  name='bread_crumbs_gastro' group=undefined,
  first_utp: {
    data: [
      {
        id: 0,
        text1: "Все must-visit, must-do и must-eat в одной поездке",
        img: {
          src: "/images/landing/gastro/first-utp/like.webp",
          alt: "img 1",
          title: "title 1",
        },
      },
      {
        id: 1,
        text1: "Гурман-Party или праздник живота по-узбекски",
        img: {
          src: "/images/landing/gastro/first-utp/food.webp",
          alt: "",
          title: "",
        },
      },
      {
        id: 2,
        text1: "Топ 10 гастрономических брендов узбекской кухни",
        img: {
          src: "/images/landing/gastro/first-utp/star.webp",
          alt: "img 3",
          title: "title 3",
        },
      },
      {
        id: 3,
        text1: "100% авторская программа от локального travel-эксперта",
        img: {
          src: "/images/landing/gastro/first-utp/progres.webp",
          alt: "",
          title: "",
        },
      },
    ],
  },
  second_utp_title: { value: "Что увидим, узнаем и попробуем…" },
  second_utp_list: {
    data: [
      {
        id: 0,
        text1: "“Обжорные ряды” и узбекский стрит-фуд",
        text2:
          "Ни один восточный базар не обходится без “обжорных рядов”. Мы прогуляемся по самому колоритному базару Средней Азии и попробуем местную уличную еду. Узбекский стрит-фуд - это 100% гарантия поесть вкусно, сытно и почти полезно :)",
        img: {
          src: "/images/landing/gastro/second-utp/img1.webp",
          alt: "Дегустация узбекской самсы",
          title: "Узбекская самса",
        },
      },
      {
        id: 1,
        text1: "Базар, казан и дастархан",
        text2:
          "Поучаствуем в кулинарном квесте “Восточный Базар”, а потом устроим праздник живота ! Главным героем нашего празднования станет казан, мангал и щедро накрытый дастархан.",
        img: {
          src: "/images/landing/gastro/second-utp/img2.webp",
          alt: "Мастер-класс по приготовлению плов",
          title: "Мастер-класс по плову",
        },
      },
      {
        id: 2,
        text1: "Жидкий хлеб и масляный чай, такое бывает?",
        text2:
          "Да-да! Не пловом единым сыт узбек! Вся многоликость и разнообразие узбекской кухни в рамках одного гастрономического приключения!",
        img: {
          src: "/images/landing/gastro/second-utp/img3.webp",
          alt: "Национальная узбекская кухня",
          title: "Узбекская кухня",
        },
      },
      {
        id: 3,
        text1: "Шафрановый чай и любимая халва эмира",
        text2:
          "На Востоке, на Востоке, что за чай без чайханы? Заглянем вместе к известному бухарскому торговцу пряностей, насладимся шафрановым чаем и узнаем секрет любимой халвы последнего эмира.",
        img: {
          src: "/images/landing/gastro/second-utp/img4.webp",
          alt: "Чайная дегустация в Бухаре",
          title: "Шафрановый чай в Бухаре",
        },
      },
      {
        id: 4,
        text1: "Гурман Плов Party или “ночной доЖор”",
        text2:
          "Восточная мудрость гласит: “Бедный ест плов, богатый ест только плов!”. После нашего курса плововедения, вы научитесь готовить плов, который получается всегда!",
        img: {
          src: "/images/landing/gastro/second-utp/img5.webp",
          alt: "Дегустация плова в Самарканде",
          title: "Плов по-самаркандски",
        },
      },
      {
        id: 5,
        text1: "В кратере тандыра",
        text2:
          "Мастер-класс по “тандыропользованию”. Он вам обязательно пригодится! Ведь настоящие узбекские лепёшки и хрустящую слоёную самсу пекут исключительно в этой традиционной глиняной печи.",
        img: {
          src: "/images/landing/gastro/second-utp/img6.webp",
          alt: "Мастер-класс по выпечке лепёшек в тандыре",
          title: "Мастер-класс по выпечке в тандыре",
        },
      },
      {
        id: 6,
        text1: "Кто ты? Эмир, дервиш или суфий?",
        text2:
          "Костюмированная фотосессия на легендарной площади Регистан, где мы примерим на себя все образы из восточной сказки. Яркие эмоции и море впечатлений - гарантированы!",
        img: {
          src: "/images/landing/gastro/second-utp/img7.webp",
          alt: "Авторская фотосессия в Самарканде",
          title: "Фотосессия в Самарканде",
        },
      },
      {
        id: 7,
        text1: "Восток - дело тонкое!",
        text2:
          "Побывать на восточном рынке и не поторговаться - грех и преступление. Не умеете торговаться? Научим! Торг - дело тонкое, такое же тонкое, как и Восток. Между делом расскажем, как выбрать настоящую зиру, чем отличается урюк от кураги и кто такие “помогаторы”...",
        img: {
          src: "/images/landing/gastro/second-utp/img8.webp",
          alt: "Восточный базар в Самарканде",
          title: "Базар в Самарканде",
        },
      },
    ],
  },
  tour_program_title: 'программа авторского тура "вкусный узбекистан"',
  tour_program_list: {
    data: [],
  },
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.editText: {
      const { newText, isSave } = action.payload;
      const { name, group } = state.editText;
      if (isSave) {
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
              group: "",
              name: "",
              newText: "",
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
    // ---------------------------------
    case types.editImage: {
      const editImage = state.editImage;
      if (action.payload.isSave) {
        if (editImage.group) {
          console.log("action.payload:", action.payload);
          console.log("STATE in editImage:", editImage);
          return {
            ...state,
            [editImage.group]: {
              ...state[editImage.group],
              data: state[editImage.group].data.map((item, index) =>
                index !== editImage.id
                  ? item
                  : {
                      ...item,
                      img: {
                        src: action.payload.newHref || "",
                        alt: action.payload.newAlt || "",
                        title: action.payload.newTitle || "",
                      },
                    }
              ),
            },
            editImage: {
              open: false,
              isSave: false,
              href: "",
              newHref: "",
              alt: "",
              newAlt: "",
              title: "",
              newTitle: "",
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
            href: "",
            newHref: "",
            alt: "",
            newAlt: "",
            title: "",
            newTitle: "",
          },
        };
      }

      // click Image component
      // { type: types, payload: { open: true, alt, title, href } }
      return {
        ...state,
        editImage: {
          ...editImage,
          ...action.payload,
        },
      };
    }
    // ---------------------------------
    default:
      return state;
  }
};
