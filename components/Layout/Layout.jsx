import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";
import { Toaster } from "react-hot-toast";
import Background from "./Background/Background";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
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

            <Toaster
                position="top-center"
                reverseOrder={true}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    className: "",
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
                }}
            />
        </>
    );
}
