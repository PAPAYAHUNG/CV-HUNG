import React from "react";
import "../style.css";

const Marquee = (props) => {
  return (
    <div className="marquee-w">
      <div className="marquee">
        <span className={props.className}>{props.text}</span>
      </div>
      {/* <div className="marquee ">
        <span>{props.text}</span>
      </div> */}
    </div>
  );
};

export default Marquee;
