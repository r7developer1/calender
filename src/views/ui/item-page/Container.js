import React from "react";

const Container = ({children}) => {
    return (
        <>
            <div className="c-card c-card--no-padding u-text-center">
                {children}
            </div>
        </>
    );
}

export default Container;
