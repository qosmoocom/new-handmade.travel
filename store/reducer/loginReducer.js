const defaultState = {
  users: [
    {
      user: "admin",
      password: "0",
      isUpdate: false,
    },
    {
      user: "shaxzod",
      password: "shaxzod123",
      isUpdate: false,
    },
    {
      user: "diyor",
      password: "diyor123",
      isUpdate: false,
    },
    {
      user: "farrux",
      password: "farrux123",
      isUpdate: false,
    },
  ],
  isAdmin: false,
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "THIS_IS_ADMIN":
      return {
        ...state,
        isAdmin: true,
      };
    case "ADMIN_USER_UPDATE": {
      return {
        ...state,
        users: state.users.map((item, index) =>
          index !== action.id ? item : action.user
        ),
      };
    }

    default:
      return state;
  }
};
