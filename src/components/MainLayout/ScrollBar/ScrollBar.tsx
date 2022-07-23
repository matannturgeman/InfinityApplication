import * as React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const ScrollBar = ({ children, ...props }) => {
    const renderView = ({ style, ...props }) => {
        const customStyle = {
            opacity: 1,
            backgroundColor: "black",
        };
        return (
            <div {...props} style={{ ...style, ...customStyle }}/>
        );
    }

    return (
        <Scrollbars
            renderView={renderView}
            {...props}
        >
            {children}
        </Scrollbars>
    );
};

export default ScrollBar;