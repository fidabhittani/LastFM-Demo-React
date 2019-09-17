import React, { useState, useEffect, Suspense } from "react";
import i18n from "i18n";
import { useTranslation } from "react-i18next";
import { Switch, Route, Redirect } from "react-router-dom";
import Language from "components/ui/language";
import TopMenus from "components/ui/top.menus";
import { AppProvider } from "contexts/app";
import Loader from "components/ui/loader";
import ArtistContainer from "components/artist";
import EventsContainer from "components/events";

import "./style.scss";
/**
 *  Async Loading of Containers
 */

const Root = () => {
  /** HOOKS : React default hooks declarations and assignments */
  const [language, setLanguage] = useState("en");
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <AppProvider value={{ language, setLanguage }}>
      <div className="main">
        <header>
          <h3>{t("title")}</h3>
          <div className="right-side-content">
            <TopMenus />
            <Language />
          </div>
        </header>

        <div className="content">
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/artists" render={() => <ArtistContainer />} />
              <Route
                path="/artist/:id/events/"
                render={() => <EventsContainer />}
              />
              <Redirect from="/" to="/artists" />
            </Switch>
          </Suspense>
        </div>
      </div>
    </AppProvider>
  );
};

export default Root;
