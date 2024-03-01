import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { ReactNode } from "react";
import { ToastPosition, Toaster } from "react-hot-toast";

import Footer from "./Footer/Footer";
import GeminiEffect from "./GeminiEffect/GeminiEffect";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";

interface LayoutProps {
    children: ReactNode;
}

const toasterOptions = {
    position: "bottom-center" as ToastPosition,
    reverseOrder: true,
    gutter: 8,
    toastOptions: {
        duration: 5000,
        style: {
            background: "#363636",
            color: "#fff",
        },
        success: {
            duration: 3000,
            theme: {
                primary: "green",
                secondary: "black",
            },
        },
    },
};

export default function Layout({ children }: LayoutProps) {
    const { scrollYProgress } = useScroll();

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <motion.div
                className={styles.progress_bar}
                style={{ scaleX }}
            />
            <GeminiEffect
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]}
            />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster {...toasterOptions} />
        </>
    );
}
