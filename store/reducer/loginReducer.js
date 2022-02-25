const defaultState = {
  users: [
    {
      user: "admin",
      password: "admin123",
    },
    {
      user: "admin2",
      password: "0000",
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
