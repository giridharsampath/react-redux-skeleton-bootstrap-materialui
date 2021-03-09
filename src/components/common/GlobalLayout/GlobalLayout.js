import React from "react";
import Alert from "#components/common/Alert";
import "#styles/App.scss";

function GlobalLayout({ children }) {
  return (
    <React.Fragment>
      <Alert />
      {children}
    </React.Fragment>
  );
}
export default GlobalLayout;
