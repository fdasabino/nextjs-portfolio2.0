import Atropos from "atropos/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { HeroData } from "../../../constants/constants";
import { scrollTo } from "../../../utils/globalFunctions";
import Button from "../../Layout/Button/Button";
import styles from "./Hero.module.scss";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    const [text] = useTypewriter({
        words: ["<Front End Developer at Iquest/>", "<Student at Hyper Island/>"],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <motion.div
            className={styles.hero}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.4,
                delay: 0.6,
            }}>
            <Atropos
                className={styles.hero__atropos}
                rotateXMax={10}
                rotateYMax={360}
                activeOffset={40}
                shadowOffset={40}
                shadow={false}
                highlight={false}
                scaleChildren={false}>
                {HeroData?.map((item) => (
                    <motion.div
                        initial={false}
                        animate={
                            isLoaded && isInView
                                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        }
                        transition={{ duration: 1, delay: 1 }}
                        whileInView={() => setIsInView(true)}
                        key={item.id}
                        className={styles.hero__wrapper}>
                        <div className={styles.hero__image}>
                            <Image
                                priority
                                height={600}
                                width={600}
                                key={item.id}
                                src={item.image}
                                alt={item.title}
                                onLoad={() => setIsLoaded(true)}
                            />
                        </div>
                        <div className={styles.hero__text}>
                            <h1>
                                <span>{item.intro}</span> {item.title}
                            </h1>
                            <h2>
                                <span>{text}</span>
                                <Cursor cursorColor="#14a085" />
                            </h2>
                            <Button onClick={() => scrollTo("contact")}>
                                Contact <MdOutlineAlternateEmail />
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </Atropos>
        </motion.div>
    );
};

export default Hero;
