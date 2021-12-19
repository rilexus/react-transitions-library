import React, { FC } from "react";
import { navbarLeftWidth, navbarLeftZIndex } from "../consts";

const NavbarLeft: FC = ({ children }) => {
  return (
    <nav
      style={{
        paddingTop: "1.5rem",
        paddingLeft: "1.5rem",
        zIndex: navbarLeftZIndex,
        position: "fixed",
        top: 0,
        left: 0,
        overflowX: "hidden",
        height: "100vh",
        width: `${navbarLeftWidth}px`,
      }}
    >
      {children}
    </nav>
  );
};
export { NavbarLeft };
