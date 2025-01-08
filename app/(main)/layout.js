import React from "react";

const Layout = ({ children }) => {
  return <div className="container mx-auto mt-5 px-4">{children}</div>;
};

export default Layout;

//this layout will be used for main folder pages like project, sprint, issue, etc.