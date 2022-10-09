export const defaultState = {
  isAdmin: true,
  isEdit: false,
  editText: {
    open: false,
    name: "",
    newText: "",
    isCreated: false,
  },
  editImage: {
    open: false,
    name: "",
    newUrl: "",
    newAlt:'',
    isCreated: false,
  },
  header: {
    title: "BlogName",
    smallText:
      "sdfsdfvsdfv sgsdfgrewgherhsd t trews rwerthsfg wt werg wer sdfsdfvsdfv sgsdfgrewgherhsd t trews rwerthsfg wt werg wer",
    discription:
      "sdfsdfvsdfv sgsdfgrewgherhsd t trews rwerthsfg wt werg wer lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    imgUrl: "/images/blogs/blog1.jpg",
    imgAlt: "nature",
  },
  data: [],
  content : `Текст блога`
};