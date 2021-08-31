import React from "react";

const Row = (props) => {
  return(
    <div className={"row"}>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        {props.children}
      </div>
    </div>
  );
}

export default Row;
