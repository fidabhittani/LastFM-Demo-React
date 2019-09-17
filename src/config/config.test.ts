import * as constants from "config/constants";
import { API_HOSTS } from "config/api";
/**
 *  CONFIG TESTS
 */

describe("TEST CONSTANTS", () => {
  it("should match SET_LOADING", () => {
    expect(constants.SET_LOADING).toEqual("SET_LOADING");
  });
  it("should match SET_MESSAGE", () => {
    expect(constants.SET_MESSAGE).toEqual("SET_MESSAGE");
  });
  it("should match SET_ARTISTS", () => {
    expect(constants.SET_ARTISTS).toEqual("SET_ARTISTS");
  });
  it("should match RESET_MESSAGE", () => {
    expect(constants.RESET_MESSAGE).toEqual("RESET_MESSAGE");
  });
  it("should match RESET_LOADING", () => {
    expect(constants.RESET_LOADING).toEqual("RESET_LOADING");
  });
  it("should match REMOVE_MESSAGE", () => {
    expect(constants.REMOVE_MESSAGE).toEqual("REMOVE_MESSAGE");
  });
});

describe("TEST API CONFIGS", () => {
  it("should match API_HOST", () => {
    expect(API_HOSTS.APP).toEqual("//ws.audioscrobbler.com/2.0");
  });
});
