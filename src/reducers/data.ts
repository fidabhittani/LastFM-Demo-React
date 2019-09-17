import { SET_ARTISTS } from "config/constants";
import { IAction, IDataState } from "config/types";
/**
 *
 *  SERVER DATA REDUCER
 *
 */

const initialState = {
  artists: []
};

export default (state: IDataState = initialState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ARTISTS:
      return {
        ...state,
        artists: payload
      };

    default:
      return state;
  }
};
