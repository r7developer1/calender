import React from "react";

const AmountItemWrapper = (props) => (
    <div className="l-section l-section--rounded-bottom">
        <div className="l-section__content">
            {props.children}
        </div>
    </div>
);

export default AmountItemWrapper;
