import * as React from "react";
import "./EmptyBox.css";

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