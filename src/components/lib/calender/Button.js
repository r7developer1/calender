import React from "react";

const Button = ({ props }) => {
    const { input: { type , name , value }, className} = props;
    return (
        <>
            <input
                type={type}
                id={"rent"}
                name={name}
                value={value}
                className={className}
            />
        </>
    );
};

export default Button;
