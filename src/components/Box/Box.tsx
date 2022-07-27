import * as React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Box.scss";

const boxVariant = {
    visible: { opacity: 1, transition: { duration: 0.9 } },
    hidden: { opacity: 0 },
}

const Box = ({ children }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="box"
        >
            {children}
        </motion.div>
    );
};

export default Box;