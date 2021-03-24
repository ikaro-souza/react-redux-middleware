import { CHANGE_AUTH } from "./types";

export const changeAuth = (isAuthenticated) => {
  return {
    type: CHANGE_AUTH,
    payload: isAuthenticated,
  };
};
