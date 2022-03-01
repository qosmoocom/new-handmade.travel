const defaultState = {
  isOpen: false,
  currentModal: null,
  actionModal: null,
};

export const modalReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "MODAL_OPEN": {
      return {
        ...state,
        ...payload,
        isOpen: true,
      };
    }

    case "MODAL_CLOSE": {
      return {
        ...state,
        isOpen: false,
        currentModal: null,
        actionModal: null,
      };
    }

    default:
      return state;
  }
};
