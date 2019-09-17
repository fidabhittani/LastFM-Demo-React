import React from "react";
import debounce from "lodash/debounce";
import { useTranslation } from "react-i18next";
import { IPropsSearch } from "config/types";
import searchIcon from "assets/svgs/search-solid.svg";
import "./styles.scss";

export default ({ getSearch }: IPropsSearch) => {
  const { t } = useTranslation();

  /** METHODS : Component methods for various operations */
  const debouncedChange = debounce((value: string) => getSearch(value), 500);

  return (
    <section className="search-bar">
      <div className="search-input">
        <input
          type="text"
          placeholder={t("search.placeholder")}
          onChange={({ target: { value } }) => debouncedChange(value)}
        />
        <span className="search-icon">
          <img alt={"Search"} src={searchIcon} />
        </span>
      </div>
    </section>
  );
};
