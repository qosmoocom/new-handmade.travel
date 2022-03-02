const defaultState = {
  users: [
    {
      user: "admin",
      password: "0",
    },
    {
      user: "shaxzod",
      password: "shaxzod123",
    },
    {
      user: "diyor",
      password: "diyor123",
    },
    {
      user: "farrux",
      password: "farrux123",
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
    default:
      return state;
  }
};
