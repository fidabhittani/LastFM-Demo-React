import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";

import Root from "./index";
import store from "store";

/** ROOT TEST */
describe("App Root Component Tests", () => {
  const WrappedReduxRoot = () => (
    <BrowserRouter>
      <Provider store={store}>
        <Root key={"store"} />
      </Provider>
    </BrowserRouter>
  );

  it("Root Component renders correctly", () => {
    const root = shallow(<WrappedReduxRoot />);
    expect(root).toMatchSnapshot();

    const div = document.createElement("div");
    ReactDOM.render(<WrappedReduxRoot />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
