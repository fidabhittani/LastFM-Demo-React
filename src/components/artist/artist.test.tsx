import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import Artist from "./index";
import store from "store";

const WrappedReduxArtist = () => (
  <Provider store={store}>
    <Artist />
  </Provider>
);

/** Artist TEST */
describe("Artist Root Component Tests", () => {
  it("Artist Component renders correctly", () => {
    const artist = shallow(<WrappedReduxArtist />);
    expect(artist).toMatchSnapshot();
  });
});
