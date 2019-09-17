import React from "react";
import { shallow } from "enzyme";
import { EventsResultContainer, ArtistsResultContainer } from "./index";

/** Results TEST */
describe("Results Root Component Tests", () => {
  it("Results Component EventsResultContainer renders correctly", () => {
    const eventConntainerWrapper = shallow(<EventsResultContainer />);
    expect(eventConntainerWrapper).toMatchSnapshot();
  });

  it("Results Component ArtistsResultContainer renders correctly", () => {
    const artistsContainerWrapper = shallow(<ArtistsResultContainer />);
    expect(artistsContainerWrapper).toMatchSnapshot();
  });
});
