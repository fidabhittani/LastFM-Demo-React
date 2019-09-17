import * as appActions from "actions";

import * as dataActions from "actions/data";

import * as actionTypes from "config/constants";

describe("Actions Tests", () => {
  /** SET LOADING */
  it("should set loader", () => {
    const payload = {
      status: true,
      text: "Loading"
    };
    expect(appActions.setLoading(payload, "app")).toEqual({
      type: actionTypes.SET_LOADING,
      payload: {
        ...payload,
        context: "app"
      }
    });
  });
  /** UNSET LOADING */

  it("should unset loader", () => {
    expect(appActions.resetLoading("app")).toEqual({
      type: actionTypes.RESET_LOADING,
      payload: {
        context: "app"
      }
    });
  });

  /** SET ARTISTS */

  it("should unset artists", () => {
    const payload = {
      id: 1,
      name: "Mike"
    };
    expect(dataActions.setArtists(payload)).toEqual({
      type: actionTypes.SET_ARTISTS,
      payload
    });
  });
});
