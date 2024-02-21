import { motion, useScroll, useSpring } from "framer-motion";
import React, { ReactNode } from "react";
import { ToastPosition, Toaster } from "react-hot-toast";
import Background from "./Background/Background";
import Footer from "./Footer/Footer";
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
            <Background />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster {...toasterOptions} />
        </>
    );
}
