import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./index";

/** SearchBar TEST */
describe("SearchBar Root Component Tests", () => {
  it("SearchBar Component renders correctly", () => {
    const resultWrapper = shallow(
      <SearchBar getSearch={(search: string) => console.log("Searching...")} />
    );
    expect(resultWrapper).toMatchSnapshot();
  });
});
