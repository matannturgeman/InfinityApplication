import * as React from "react";
import "./EmptyBox.scss";

const Box = ({ children }) => {
    return (
        <div
            className="empty-box"
        >
            {children}
        </div>
    );
};

export default Box;