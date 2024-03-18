import { Drawer, Tooltip } from "antd";
import { motion } from "framer-motion";
import { Fade as Hamburger } from "hamburger-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { Link as ReactScrollLink } from "react-scroll";
import Button from "../Button/Button";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    const router = useRouter();
    const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();

    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 5000, velocity: -200 },
            },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
    };

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${styles.base_blurry_background}`}>
            <motion.div
                className={styles.navbar__left}
                initial={{
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}>
                <Tooltip title="Visit my Github profile">
                    <a
                        href="https://github.com/fdasabino"
                        target="_blank"
                        rel="noreferrer">
                        <BsGithub />
                    </a>
                </Tooltip>
                <Tooltip title="Visit my LinkedIn profile">
                    <a
                        href="https://www.linkedin.com/in/francisco-sabino/"
                        target="_blank"
                        rel="noreferrer">
                        <BsLinkedin />
                    </a>
                </Tooltip>
                <Tooltip title="Download my CV">
                    <a
                        href="https://drive.google.com/file/d/1dBPQi0ldM98GB2MNRT5X4uNt5K0YZqUQ/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer">
                        <BsDownload />
                    </a>
                </Tooltip>
            </motion.div>
            <motion.div
                className={styles.navbar__right}
                initial={{
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}>
                <Hamburger
                    toggled={open}
                    toggle={showDrawer}
                    duration={0.8}
                    color={"#fff"}
                />
            </motion.div>
            <Drawer
                placement="right"
                onClose={onClose}
                open={open}
                width={isMobile ? "100%" : "fit-content"}
                bodyStyle={{ backgroundColor: "#000" }}
                headerStyle={{ backgroundColor: "#000", border: "none" }}
                maskStyle={{
                    backgroundColor: "rgba( 0, 0, 0, 0.65)",
                    backdropFilter: "blur( 16px )",
                }}>
                {router.pathname === "/" && (
                    <>
                        <div className={styles.navbar__menu}>
                            <div className={styles.navbar__menu__top}>
                                <motion.div
                                    className={styles.navbar__menu__top__item}
                                    variants={variants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <ReactScrollLink
                                        spy={true}
                                        isDynamic={true}
                                        to="hero"
                                        onClick={onClose}
                                        className="">
                                        Home
                                    </ReactScrollLink>
                                </motion.div>

                                <motion.div
                                    className={styles.navbar__menu__top__item}
                                    variants={variants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <ReactScrollLink
                                        spy={true}
                                        isDynamic={true}
                                        to="about"
                                        onClick={onClose}
                                        className="">
                                        About
                                    </ReactScrollLink>
                                </motion.div>

                                <motion.div
                                    className={styles.navbar__menu__top__item}
                                    variants={variants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <ReactScrollLink
                                        spy={true}
                                        isDynamic={true}
                                        to="timeline"
                                        onClick={onClose}
                                        className="">
                                        Timeline
                                    </ReactScrollLink>
                                </motion.div>

                                <motion.div
                                    className={styles.navbar__menu__top__item}
                                    variants={variants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <ReactScrollLink
                                        spy={true}
                                        isDynamic={true}
                                        to="projects"
                                        onClick={onClose}
                                        className="">
                                        Projects
                                    </ReactScrollLink>
                                </motion.div>

                                <motion.div
                                    className={styles.navbar__menu__top__item}
                                    variants={variants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <ReactScrollLink
                                        spy={true}
                                        isDynamic={true}
                                        to="testimonials"
                                        onClick={onClose}
                                        className="">
                                        References
                                    </ReactScrollLink>
                                </motion.div>

                                <motion.div
                                    className={styles.navbar__menu__top__item}
                                    variants={variants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <ReactScrollLink
                                        spy={true}
                                        isDynamic={true}
                                        to="contact"
                                        onClick={onClose}
                                        className="">
                                        Contact
                                    </ReactScrollLink>
                                </motion.div>
                            </div>

                            <div className={styles.navbar__menu__middle} />

                            <div className={styles.navbar__menu__bottom}>
                                {session ? (
                                    <>
                                        <motion.div
                                            className={styles.navbar__menu__bottom__item}
                                            variants={variants}
                                            whileHover={{ scale: 1.1 }}
                                            onClick={onClose}
                                            whileTap={{ scale: 0.95 }}>
                                            <Link href="/admin/dashboard">Dashboard</Link>
                                        </motion.div>
                                        <Button
                                            style="danger"
                                            onClick={() => {
                                                signOut();
                                                onClose();
                                            }}>
                                            Sign Out
                                        </Button>
                                    </>
                                ) : (
                                    <Button
                                        style="primary"
                                        onClick={() => {
                                            signIn();
                                            onClose();
                                        }}>
                                        Sign In
                                    </Button>
                                )}
                            </div>
                        </div>
                    </>
                )}

                {router.pathname !== "/" && (
                    <>
                        <div className={styles.navbar__menu}>
                            <div className={styles.navbar__menu__top}>
                                <motion.div
                                    className={styles.navbar__menu__top__item}
                                    variants={variants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/"
                                        onClick={onClose}>
                                        Home
                                    </Link>
                                </motion.div>
                                <Button
                                    style="danger"
                                    onClick={() => {
                                        signOut();
                                        onClose();
                                    }}>
                                    Sign Out
                                </Button>
                            </div>

                            <div className={styles.navbar__menu__middle} />
                            <div className={styles.navbar__menu__bottom}></div>
                        </div>
                    </>
                )}
            </Drawer>
        </nav>
    );
};

export default Navbar;
