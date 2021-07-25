import React from "react";

const Header = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        style={{ margin: "auto", marginTop: -20 }}
        src="/assets/celebwish.png"
        alt="celebwish logo"
        height="170"
        width="170"
      />
      <div className="App">{props.children}</div>
    </div>
  );
};

export default Header;
