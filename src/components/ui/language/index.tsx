import React, { useContext } from "react";
import AppContext from "contexts/app";
import keys from "lodash/keys";
import languages from "locales";
import languageIcon from "assets/svgs/language-solid.svg";
import Message from "components/ui/message";
import toast from "toasted-notes";
import "./styles.scss";

export default () => {
  const { language, setLanguage }: any = useContext(AppContext);

  return (
    <nav className="language">
      <div className="title">
        {language.toUpperCase()} &nbsp; <img alt="Lang" src={languageIcon} />
      </div>
      <div className="languages-list">
        {keys(languages).map((lang: string) => (
          <div
            className="lang-item"
            key={lang}
            onClick={() => {
              if (lang.toLocaleLowerCase() !== language.toLocaleLowerCase()) {
                toast.notify(
                  ({ onClose }) => (
                    <Message className="sucess" onClose={onClose}>
                      Language has been set to {lang}
                    </Message>
                  ),
                  { position: "top-left" }
                );
                setLanguage(lang.toLocaleLowerCase());
              }
            }}
          >
            {lang}
          </div>
        ))}
      </div>
    </nav>
  );
};
