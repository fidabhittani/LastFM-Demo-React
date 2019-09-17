import React from "react";
import { shallow } from "enzyme";
import Loader from "./index";

/** Loader TEST */
describe("Loader Root Component Tests", () => {
  it("Loader Component renders correctly", () => {
    const langWrapper = shallow(<Loader />);
    expect(langWrapper).toMatchSnapshot();
  });
});
