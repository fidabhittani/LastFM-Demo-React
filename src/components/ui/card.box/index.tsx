import React from "react";

import "./styles.scss";

/** CARD ITEM CONTAINER */

export default ({ children, className, ...props }: any) => (
  <section className={`card-item ${className}`} {...props}>
    {children}
  </section>
);
