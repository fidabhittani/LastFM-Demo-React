import React from "react";
import { shallow } from "enzyme";
import Event from "./index";

/** Event TEST */
describe("Event Root Component Tests", () => {
  const event = {
    id: 2,
    event_name: "Voyatouch",
    country: "Nigeria",
    city: "Shani",
    venue: "46209 Nelson Hill",
    date: "18-Aug-2019"
  };

  it("Event Component renders correctly", () => {
    const eventWrapper = shallow(<Event event={event} />);
    expect(eventWrapper).toMatchSnapshot();
  });
});
