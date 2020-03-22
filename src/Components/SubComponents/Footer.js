import React from "react";

export default function Footer() {
  var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  };

  var phantom = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%",
    marginBotton: "10px"
  };
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <p className="lead text-dark">
          © 2020 Created By AKSHAY JADHAV | All right reserved.
        </p>
      </div>
    </div>
  );
}
