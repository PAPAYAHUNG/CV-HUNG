import React from "react";

import "./style.css";

const SectionTitle = (props) => {
  return (
    <>
      <div style={{width:"100%"}}>
        <h1 className="section-title" style={{ fontSize: props.fontSize }}>
          {props.title}
        </h1>
      </div>
    </>
  );
};

export default SectionTitle;
