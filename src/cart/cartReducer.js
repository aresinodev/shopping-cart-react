import { types } from "../types/types";

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case types.add:
      break;

    case types.update:
      break;

    case types.delete:
      break;

    case types.list:
      break;

    default:
      return state;
  }
};
