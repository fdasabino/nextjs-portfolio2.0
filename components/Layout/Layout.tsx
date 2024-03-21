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

const Layout = ({ children, loading }: { children: ReactNode; loading: boolean }) => {
    const router = useRouter();
    const contentRef = useRef<HTMLDivElement>(null);

    console.log("loading: ", loading);
    return (
        <>
            <Toaster {...toasterOptions} />
            {!router.pathname.startsWith("/admin") && !router.pathname.startsWith("/auth") && (
                <SparklesComponent />
            )}
            {!loading && <Navbar />}
            <main ref={contentRef}>{children}</main>
            {!router.pathname.startsWith("/admin") && !loading && <Footer />}
        </>
    );
};

export default Layout;
