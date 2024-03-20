import { toasterOptions } from "@/utils/globalFunctions";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRouter } from "next/router";
import React, { ReactNode, useRef } from "react";
import { Toaster } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";
import { SparklesComponent } from "./Sparkles/SparklesComponent";
interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();
    const isMobile = useMediaQuery({ maxWidth: "768px" });
    const contentRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <Toaster {...toasterOptions} />
            <motion.div
                className={styles.progress_bar}
                style={{ scaleX }}
            />
            {!router.pathname.startsWith("/admin") && !router.pathname.startsWith("/auth") && (
                <SparklesComponent />
            )}
            <Navbar />
            <main ref={contentRef}>{children}</main>
            {!router.pathname.startsWith("/admin") && <Footer />}
        </>
    );
};

export default Layout;
