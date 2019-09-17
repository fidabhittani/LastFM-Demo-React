import React from "react";
import { useTranslation } from "react-i18next";

import "./styles.scss";
export default () => {
  const { t } = useTranslation();

  return (
    <nav className="navigation">
      <a href="http://google.com/search?q=home">{t("nav.home")}</a>
      <a href="http://google.com/search?q=about">{t("nav.about")}</a>
      <a href="http://google.com/search?q=contact">{t("nav.contact")}</a>
    </nav>
  );
};
