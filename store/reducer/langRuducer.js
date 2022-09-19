const defaultState = {
  currentLang: 'Ru',
};

export const langReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "SELECT_LANG":
      return {
        ...state,
        currentLang: payload,
      };
    default:
      return state;
  }
};


