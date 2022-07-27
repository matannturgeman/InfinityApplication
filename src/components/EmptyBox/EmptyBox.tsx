import * as React from "react";
import "./EmptyBox.scss";

const Box = ({ children, ...props }) => {
    return (
        <div
            className="empty-box"
            {...props}
        >
            {children}
        </div>
    );
};

export default Box;