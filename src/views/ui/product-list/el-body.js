import React from "react";

const ElBody = ({children}) => {
  return (
    <>
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="c-form-group">{children}</div>
      </div>
    </>
  );
};

export default ElBody;
