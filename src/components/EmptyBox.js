import React, { useEffect }  from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./EmptyBox.css";

const Box = () => {
    return (
        <div
            className="empty-box"
        >
            <h1>Box</h1>
        </div>
    );
};

export default Box;