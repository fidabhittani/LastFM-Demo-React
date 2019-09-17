import appReducer, {
  initialState as appReducerInitialState
} from "reducers/app";

import { SET_LOADING } from "config/constants";

/**
 *  REDUCERS TEST SUITES
 */

describe("APP REDUCER TESTS", () => {
  /** Get app initial State */
  it("should return the initial state", () => {
    expect(appReducer(undefined, {})).toEqual(appReducerInitialState);
  });

  /** Get app initial State */
  it("should process SET_LOADING action", () => {
    const action = {
      type: SET_LOADING,
      payload: {
        status: true,
        context: "app",
        text: "Processing"
      }
    };
    const expectedResults = {
      loading: { app: { text: "Processing", status: true, context: "app" } },
      messages: []
    };

    expect(appReducer(appReducerInitialState, action)).toEqual(expectedResults);
  });
});
