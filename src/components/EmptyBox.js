import React, { useEffect }  from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Box.css";

const boxVariant = {
    visible: { opacity: 1, scale: 2, width: "100%" },
    hidden: { opacity: 0, scale: 0, width: "100%" },
}

const Box = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            // control.start("hidden");
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
            <h1>Box</h1>
        </motion.div>
    );
};

export default Box;