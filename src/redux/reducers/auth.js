import { CHANGE_AUTH } from "../actions/types";

const initalState = {
  authenticated: false,
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return { authenticated: action.payload };

    default:
      return state;
  }
};
