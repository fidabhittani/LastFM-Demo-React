import React from "react";
import { shallow } from "enzyme";
import Language from "./index";
import { AppProvider } from "contexts/app";
/** Language TEST */
describe("Language Root Component Tests", () => {
  const WrappedLanguage = () => (
    <AppProvider
      value={{
        language: "en",
        setLanguage: (lang: string) => console.log(lang)
      }}
    >
      <Language />
    </AppProvider>
  );
  it("Language Component renders correctly", () => {
    const langWrapper = shallow(<WrappedLanguage />);
    expect(langWrapper).toMatchSnapshot();
  });
});
