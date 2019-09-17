import React from "react";
import { shallow } from "enzyme";
import CardBox from "./index";

/** CardBox TEST */
describe("CardBox Root Component Tests", () => {
  it("CardBox Component renders correctly", () => {
    const cardBox = shallow(<CardBox />);
    expect(cardBox).toMatchSnapshot();
  });
});
