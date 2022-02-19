import { AiOutlineConsoleSql } from "react-icons/ai";
import { types } from "../types";

const initialState = {
  isAdmin: true,
  checkedEdit: {
    isOpen: false,
    index: "",
    id: "",
    group: "",
    name: "",
  },
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
  tour_program_title: {
    value: 'программа авторского тура "вкусный узбекистан"',
  },
  tour_program_list: {
    data: [
      {
        id: 0,
        titleLabel: "День 1.",
        title: "Ну что, поедем, поедим!",
        textList: [
          {
            id: 0,
            value: "Вылет в Ташкент.",
          },
        ],
      },
      {
        id: 1,
        titleLabel: "День 2.",
        title:
          "Добро пожаловать в Ташкент - город контрастов и неожиданностей! Жорные ряды, “помогаторы” и “музей под землёй”.",
        textList: [
          {
            id: 0,
            value: "“Эски-шахар” и радуга специй легендарного базара Чорсу.",
          },
          {
            id: 1,
            value:
              "Ташкентский “норин” - гастрономический взрыв, необычный вкус домашней лапши в сочетании с кониной.",
          },
          {
            id: 2,
            value:
              "Дегустация узбекского стрит-фуда: самса, гумма, ханум, “узбекский бургер” и много всего другогo!",
          },
        ],
        imageList: [
          {
            id: 0,
            src: "/images/landing/gastro/tour-program/day-2-1.webp",
            alt: "Продавец специй на базаре Чорсу",
            title: "Базар Чорсу в Ташкент",
          },
          {
            id: 1,
            src: "/images/landing/gastro/tour-program/day-2-2.webp",
            alt: `Станция метро "Пахтакор" в Ташкенте`,
            title: `Станция метро "Пахтакор"`,
          },
          {
            id: 2,
            src: "/images/landing/gastro/tour-program/day-2-3.webp",
            alt: "Узбекский лагман",
            title: "Узбекский лагман",
          },
        ],
        footerTextLabel: "Совет от travel-эксперта:",
        footerText:
          "посетите ташкентское метро и насладитесь нереальным великолепием и роскошью каждой станции.",
      },
      {
        id: 2,
        titleLabel: "День 3.",
        title: `Голубые купола Самарканда. Рожки да ножки. Вино - запрещено, но есть четыре “но”...`,
        textList: [
          {
            id: 0,
            value:
              "Эйфелевая башня во Франции, Тадж-Махал в Индии, Великая стена в Китае… Так и площадь Регистан – “визитная карточка” Узбекистана.",
          },
          {
            id: 1,
            value:
              "“Калла Поча” и “Хасип” - блаженство истинного гурмана, настоящий деликатес, узбекский ответ сальтисону.",
          },
          {
            id: 2,
            value:
              "Дегустация локальных вин вместе с гуру виноделия Сергеем Даниловым - это знакомство с калейдоскопом вкусов, ароматов и уникальных рецептур локальных вин.",
          },
        ],
        imageList: [
          {
            id: 0,
            src: "/images/landing/gastro/tour-program/day-3-1.webp",
            alt: "Купол мечети Пои-Калон в Бухаре",
            title: "Мечеть Пои-Калон в Бухаре",
          },
          {
            id: 1,
            src: "/images/landing/gastro/tour-program/day-3-2.webp",
            alt: "Узбекские фермеры",
            title: "Узбекские фермеры",
          },
          {
            id: 2,
            src: "/images/landing/gastro/tour-program/day-3-3.webp",
            alt: "Ансамбль Шахи-Зинда в Самарканде",
            title: "Некрополь Шахи-Зинда",
          },
        ],
        footerTextLabel: "Совет от travel-эксперта:",
        footerText:
          "прогуляйтесь по ночному Самарканду и вдохните магию ночного города.",
      },
      {
        id: 3,
        titleLabel: "День 4.",
        title:
          "Личная жизнь Тамерлана и влюблённый архитектор. Базар, казан и дастархан.",
        textList: [
          {
            id: 0,
            value:
              "Шедевр среднеазиатского зодчества - соборная мечеть Биби Ханум, возведённая в честь любимой жены Тамерлана.",
          },
          {
            id: 1,
            value:
              "О нём слагают легенды, снимают фильмы, пишут книги… Царь восточной кухни, главная достопримечательность Узбекистана, его величество… Плов!",
          },
          {
            id: 2,
            value:
              "Гурман Party: плов, шурпа и парварда - будет праздник живота! Голодным никто не останется!",
          },
        ],
        imageList: [
          {
            id: 0,
            src: "/images/landing/gastro/tour-program/day-4-1.webp",
            alt: "Мечеть Биби-Ханум в Самарканде",
            title: "Мечеть Биби-Ханум",
          },
          {
            id: 1,
            src: "/images/landing/gastro/tour-program/day-4-2.webp",
            alt: `Узбекский плов по-самаркандски`,
            title: `Узбекский плов`,
          },
          {
            id: 2,
            src: "/images/landing/gastro/tour-program/day-4-3.webp",
            alt: "Настоящая узбечка",
            title: "Узбечка",
          },
        ],
        footerTextLabel: "Совет от travel-эксперта:",
        footerText:
          "посетите старинную фабрику по ручному изготовлению шёлковой бумаги и примите участие в полировке или технике мраморирования бумаги.",
      },
      {
        id: 4,
        titleLabel: "День 5.",
        title:
          "Священная и благородная Бухара. Загадочный средневековый колорит и самые атмосферные места города.",
        textList: [
          {
            id: 0,
            value:
              "Уникальный архитектурный ансамбль Пои-Калян, который вправе претендовать на статус “Восьмого чуда света”.",
          },
          {
            id: 1,
            value:
              "“Кузача Кебаб”, дословно “кебаб в горшочке” - сытное блюдо бухарской кухни, сочетающее в себе сразу и первое и второе. ",
          },
          {
            id: 2,
            value:
              "На Востоке, на Востоке, что за жизнь без чайханы? Посещение национальной чайной известного бухарского торговца пряностей. В меню: травяной чай, чай с гвоздикой, зелёный и знаменитый шафрановый чай!",
          },
        ],
        imageList: [
          {
            id: 0,
            src: "/images/landing/gastro/tour-program/day-5-1.webp",
            alt: "Ансамбль Пои-Калон в Бухаре",
            title: "Площадь Пои-Калян в Бухаре",
          },
          {
            id: 1,
            src: "/images/landing/gastro/tour-program/day-5-2.webp",
            alt: `Бухарские специи`,
            title: `Бухарские специи`,
          },
          {
            id: 2,
            src: "/images/landing/gastro/tour-program/day-5-3.webp",
            alt: "Узбекские куклы-марионетки",
            title: "Бухарские куклы-марионетки",
          },
        ],
        footerTextLabel: "Совет от travel-эксперта:",
        footerText:
          "загляните в музей-мастерскую национальных кукол-марионеток и среди сотен персонажей узбекского фольклора попробуйте разглядеть себя, родственника или соседа.",
      },
      {
        id: 5,
        titleLabel: "День 6.",
        title:
          "Золото эмира бухарского, посох исполнения желаний и “четыре Бакра”.",
        textList: [
          {
            id: 0,
            value:
              "Некрополь Чор Бакр - “город мёртвых”, священное место для мусульман, занесённое в список мирового наследия Юнеско.",
          },
          {
            id: 1,
            value:
              "“Джиззз-биззз”  - это не просто жужжание пчёл, а название настоящего мужского блюда. “Джиззз-биззз” по-бухарски - это нежнейший барашек в сочетании с тонко нарезанными кольцами лука. Ммм...",
          },
          {
            id: 2,
            value:
              "Мастер-класс по приготовлению узбекских мант - изысканное блюдо родом из Поднебесной, которое готовится на пару из тончайшего теста и сочной мясной начинки.",
          },
        ],
        imageList: [
          {
            id: 0,
            src: "/images/landing/gastro/tour-program/day-6-1.webp",
            alt: "Узбекские женщины",
            title: "Узбекские женщины",
          },
          {
            id: 1,
            src: "/images/landing/gastro/tour-program/day-6-2.webp",
            alt: `Узбекские манты`,
            title: `Узбекские манты`,
          },
          {
            id: 2,
            src: "/images/landing/gastro/tour-program/day-6-3.webp",
            alt: "Медресе Чор-Минор в Бухаре",
            title: "Чор-Минор в Бухаре",
          },
        ],
        footerTextLabel: "Совет от travel-эксперта:",
        footerText:
          "посетите небольшую фотогалерею известного бухарского фотографа Шавката Болтаева, где представлена уникальная экспозиция портретной фотографии.",
      },
      {
        id: 6,
        titleLabel: "День 7.",
        title: "Домой? Уже? Мы же только приехали…",
        textList: [
          {
            id: 0,
            value:
              "Упаковываем чемодан эмоций и улетаем с багажом ярких впечатлений и… парой лишних килограммов :)",
          },
        ],
      },
    ],
  },
  action_detail_title: {
    value: "Есть вопросы? Мы готовы рассказать все подробности!",
  },
  action_detail_info: {
    value:
      "Задайте вопрос, напишите в удобный мессенджер или отправьте заявку нашему творческому travel-эксперту и получите детальную программу тура в формате PDF.",
  },
  action_detail_btn: {
    value: "Хочу подробнее",
  },
  prices_title: {
    value: "ГАРАНТИРОВАННЫЕ ТУРЫ “ВКУСНЫЙ УЗБЕКИСТАН” 2021-2022",
  },
  prices_info: {
    value:
      "Мини группы от 4 человек. Гарантированный тур без доплат. 100% Авторская программа.",
  },
  prices_top_btn: {
    value: "НАВЕРХ",
  },
  prices_footer: {
    value:
      "Цена действительна для группового заезда. Цена указана на человека при двухместном размещении. Цена без учета стоимости международного авиабилета.",
  },
  prices_data: {
    data: [
      {
        plice: "(осталось 13 мест из 15)",
        date: "04-10 марта 2022",
      },
      {
        plice: "(осталось 11 мест из 15)",
        date: "29 апреля-05 мая 2022",
      },
      {
        plice: "(осталось 11 мест из 15)",
        date: "02-08 мая 2022",
      },
    ],
  },
  rate_footer_head: {
    value:
      "У НАС АБСОЛЮТНО ПРОЗРАЧНАЯ СТОИМОСТЬ БЕЗ СЮРПРИЗОВ И СКРЫТЫХ ДОПЛАТ НА МЕСТЕ.",
  },
  rate_footer_title: {
    value: "А ВОТ ЧТО МЫ ОСТАВЛЯЕМ НА ВАШЕ УСМОТРЕНИЕ:",
  },
  prices_top: {
    value: "НАВЕРХ",
  },
  prices_footer: {
    value:
      "Цена действительна для группового заезда. Цена указана на человека при двухместном размещении. Цена без учета стоимости международного авиабилета.",
  },
  rate_footer_list: {
    data: [
      {
        text: "Международный перелет, ведь вы у нас из разных городов и стран",
      },
      {
        text: "Чаевые гиду и водителю, так как мы считаем, что это личное дело каждого",
      },
      {
        text: "Доплата за фото- и видеосъемку на местах достопримечательностей, если потребуется",
      },
      {
        text: "Алкогольные напитки - это обычная практика",
      },
    ],
  },
  rateData: {
    data: [
      {
        rate_head: "Проживание в отелях",
        rate_title:
          "Мы будем жить в проверенных гостиницах и уютных бутик-отелях 3*. Отели в исторических центрах. Размещение на базе одного места в двухместном номере с вкусными завтраками. Доплата за одноместное размещение $ 136.",
        actives: [true, true, true],
      },
      {
        rate_head: "Трансфер из/в аэропорт",
        rate_title:
          "Комфортабельные трансферы: с аэропорта в отель по прилету и обратно в аэропорт в день вылета.",
        actives: [true, true, true],
      },
      {
        rate_head: "Встречи/проводы",
        rate_title:
          "Встреча/проводы в международном аэропорту Ташкента к любому рейсу в день прилета.",
        actives: [true, true, true],
      },
      {
        rate_head: "Транспорт в течение тур",
        rate_title:
          "Все наземные переезды по Узбекистану. Топливо. Дорожные сборы. Профессиональные и лицензированные водители.",
        actives: [true, true, true],
      },
      {
        rate_head: "Гид на весь тур и экскурсии",
        rate_title:
          "Лицензированный  русскоговорящий гид и на весь тур и экскурсии по городам.",
        actives: [true, true, true],
      },
      {
        rate_head: "Полный пансион",
        rate_title:
          "Сытные завтраки в отелях, остальное - по программе! От местного стрит-фуда до гастрономических деликатесов, мы попробуем всю местную кухню во всем её разнообразии.",
        actives: [true, true, true],
      },
      {
        rate_head: "Билеты на скоростные поезда",
        rate_title:
          "Два переезда на фирменном высокоскоростном поезде от испанского производителя из Ташкента в Самарканд и из Самарканда в Бухару (эконом-класс) Мы ценим ваше время в путешествии!",
        actives: [true, true, true],
      },
      {
        rate_head: "Мастер-классы и дегустации",
        rate_title:
          "Все гастрономические активности. Кулинарные мастер-классы. Дегустации.  Гурман Плов Party. Всё включено. Никаких скрытых доплат.",
        actives: [true, true, true],
      },
      {
        rate_head: "Банальные неожиданности",
        rate_title:
          "Бутилированная вода каждый день. Приятные сюрпризы. Подарки для каждого.",
        actives: [true, true, true],
      },
      {
        rate_head: "Входные билеты в музеи и памятники",
        rate_title:
          "Все входные билеты. Достопримечательности и памятники. Музеи. Фабрики. Доплата за них не нужна.",
        actives: [false, true, true],
      },
      {
        rate_head: "Сим-карта и пакет Интернета 12 ГБ",
        rate_title:
          "SIM-карта местного оператора и пакет Интернета 12 000 МГ на каждого участника.",
        actives: [false, false, true],
      },
      {
        rate_head: "Медицинская страховка",
        rate_title:
          "Медицинская туристическая страховка для максимально безопасного путешествия в условиях пандемии.",
        actives: [false, false, true],
      },
      {
        rate_head: "VIP-зал по прибытию",
        rate_title:
          "VIP-зал в повышенной комфортности по прибытию для ускоренного прохождения паспортного и таможенного контроля отдельно от пассажиров эконом-класса.",
        actives: [false, false, true],
      },
      {
        rate_head: "Поддержка 24/7",
        rate_title:
          "Онлайн связь с автором тура и настоящим buddy-приятелем 24/7.",
        actives: [true, true, true],
      },
    ],
  },
  rate_name: {
    value: "ЧТО ВКЛЮЧЕНО",
  },
  rate_ot: {
    value: "от",
  },
  included_btn: {
    value: "БРОНИРОВАТЬ",
  },
  rate_name_data: {
    data: [
      { rate_name_head: '"КОМФОРТ"', rate_money: "$ 770" },
      { rate_name_head: '"КОМФОРТ+"', rate_money: "$ 812" },
      { rate_name_head: '"ЛЮКС"', rate_money: "$ 1229" },
    ],
  },
  action_picture_head: { value: "Хотите нырнуть в восточную сказку?" },
  action_picture_text: {
    value:
      "Лучше один раз увидеть, чем 1001 раз кликать и скролить. Айда с нами!",
  },
  action_picture_imgAlt: {
    value: "Майолика из ансамбля Шахи-Зинда",
  },
  action_picture_imgTitle: {
    value: "Самаркандская майолика",
  },
  action_picture_imgSrc: {
    value: "/images/landing/gastro/action-picture/btn.webp",
  },
  action_picture_btn_bron: { value: "БРОНИРОВАТЬ" },
  gallery: {
    data: [
      {
        img: {
          src: "/images/landing/gastro/gallery/1.webp",
          alt: "Верблюд в пустыне Кызылкум",
          title: "Сафари на верблюдах",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/2.webp",
          alt: "Выпечка лепёшек тандыре",
          title: "Лепёшки из тандыра",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/3.webp",
          alt: "Ансамбль Шахи-Зинда в Самарканде",
          title: "Ансамбль Шахи-Зинда",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/4.webp",
          alt: "Настоящий узбекский плов",
          title: "Узбекский плов",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/5.webp",
          alt: "Мавзолей Шахи-Зинда в Самарканде",
          title: "Мавзолей Шахи-Зинда",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/6.webp",
          alt: "Слоёная узбекская самса",
          title: "Узбекская самса",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/7.webp",
          alt: "Купол медресе на Регистане",
          title: "Купол медресе Шер-Дор",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/8.webp",
          alt: "Празднование Навруза в Узбекистане",
          title: "Девочка на празднике Навруз",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/9.webp",
          alt: "Специи на базаре Чорсу",
          title: "Восточные специи",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/10.webp",
          alt: "Лагман узбекский",
          title: "Узбекский лагман",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/11.webp",
          alt: "Узбекский шашлык из говядины",
          title: "УУзбекский шашлык",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/12.webp",
          alt: "Комплекс Шахи-Зинда в Самарканде",
          title: "Прогулка по Шахи-Зинде",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/13.webp",
          alt: "Узбекские манты с говядиной",
          title: "Узбекские манты",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/14.webp",
          alt: "Традиционные узбекские лепёшки",
          title: "Самаркандские лепёшки",
        },
      },
      {
        img: {
          src: "/images/landing/gastro/gallery/15.webp",
          alt: "Каракалпакская девушка",
          title: "Девушка из Нукуса",
        },
      },
    ],
  },
  gallery_title: {
    value:
      "Яркие эмоции и впечатления, которые не влезут в объектив! Листайте фотографии и предвкушайте!",
  },
  gallery_more_btn: {
    value: "показать еще ...",
  },
};

export const AdminReducer = (state = initialState, action) => {
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
                      [name]: newText || "",
                    }
              ),
            },
            editText: {
              open: false,
              group: "",
              name: "",
              newText: "",
              list: "",
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
              group: "",
              name: "",
              newText: "",
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
                                src: action.payload.newHref || "",
                                alt: action.payload.newAlt || "",
                                title: action.payload.newTitle || "",
                              }
                      ),
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
          index = "",
          name = "",
          group = "",
          id = "",
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
            group: "",
            name: "",
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
    default:
      return state;
  }
};
