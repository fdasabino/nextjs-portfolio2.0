"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styles from "./TracingBeam.module.scss";

const TracingBeam = ({ contentRef }: { contentRef: React.RefObject<HTMLDivElement> }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const [svgHeight, setSvgHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.offsetHeight);
        }
    }, [contentRef]);

    const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [10, svgHeight - 10]), {
        stiffness: 100,
        damping: 20,
    });
    const y2 = useSpring(useTransform(scrollYProgress, [0, 0.5], [10, svgHeight - 10]), {
        stiffness: 100,
        damping: 20,
    });

    return (
        <motion.div
            ref={ref}
            className={styles.tracing_beam}>
            <svg
                viewBox={`0 0 20 ${svgHeight}`}
                width="20"
                height={svgHeight} // Set the SVG height
                className="ml-4 block"
                aria-hidden="true">
                <motion.path
                    d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                    fill="none"
                    stroke="#9091A0"
                    strokeOpacity="0.16"
                    transition={{
                        duration: 10,
                    }}></motion.path>
                <motion.path
                    d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="1.25"
                    className="motion-reduce:hidden"
                    transition={{
                        duration: 10,
                    }}></motion.path>
                <defs>
                    <motion.linearGradient
                        id="gradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0"
                        x2="0"
                        y1={y1} // set y1 for gradient
                        y2={y2} // set y2 for gradient
                    >
                        <stop
                            stopColor="#18CCFC"
                            stopOpacity="0"></stop>
                        <stop stopColor="#18CCFC"></stop>
                        <stop
                            offset="0.325"
                            stopColor="#2e00fb"></stop>
                        <stop
                            offset="1"
                            stopColor="#8c00ff"
                            stopOpacity="0"></stop>
                    </motion.linearGradient>
                </defs>
            </svg>
        </motion.div>
    );
};

export default TracingBeam;
