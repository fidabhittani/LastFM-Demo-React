import React from "react";
import { shallow } from "enzyme";
import ToMenus from "./index";

/** ToMenus TEST */
describe("ToMenus Root Component Tests", () => {
  it("ToMenus Component renders correctly", () => {
    const menusWrapper = shallow(<ToMenus />);
    expect(menusWrapper).toMatchSnapshot();
  });
});
