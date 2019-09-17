/**
 *  MESSAGES
 *
 */

import React from "react";
import "./styles.scss";
export default ({ className, children }: any) => (
  <div className={`message ${className}`}>{children}</div>
);
