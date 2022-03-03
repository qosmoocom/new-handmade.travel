const defaultState = {
  users: [
    {
      user: "admin",
      password: "0",
      isUpdate: false,
      error: false,
    },
    {
      user: "shaxzod",
      password: "shaxzod123",
      isUpdate: false,
      error: false,
    },
    {
      user: "diyor",
      password: "diyor123",
      isUpdate: false,
      error: false,
    },
    {
      user: "farrux",
      password: "farrux123",
      isUpdate: false,
      error: false,
    },
    {
      user: "abdurahmon",
      password: "a",
      isUpdate: false,
      error: false,
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
    case "ADMIN_USER_UPDATE":
      return {
        ...state,
        users: state.users.map((item, index) =>
          index !== action.id ? item : action.user
        ),
      };
    case "ADMIN_USER_DELETE":
      return {
        ...state,
        users: state.users.filter((_, index) =>
          action.id === 0 ? true : action.id !== index
        ),
      };
    case "ADMIN_ADD_NEW_USER":
      return {
        ...state,
        users: [
          ...state.users,
          { user: "new admin", password: "new password", isUpdate: false },
        ],
      };

    default:
      return state;
  }
};
