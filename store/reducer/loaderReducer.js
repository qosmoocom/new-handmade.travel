const defaultState = {
  loading: false,
};

export const loaderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOADER_ACTIVE":
      return {
        ...state,
        loading: true,
      };
    case "LOADER_NO_ACTIVE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export const loaderOn = () => ({ type: "LOADER_ACTIVE" });
export const loaderOff = () => ({ type: "LOADER_NO_ACTIVE" });
