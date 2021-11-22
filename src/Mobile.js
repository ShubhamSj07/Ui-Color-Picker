import React from "react";
import img from "./ui-color-picker-banner.svg";

const Mobile = () => {
  return (
    <div className="mobile_responsive_fallback">
      <img src={img} alt="" className="banner" />
    </div>
  );
};

export default Mobile;
