import Atropos from "atropos/react";
import { motion } from "framer-motion";
import Image from "next/image";
import toast from "react-hot-toast";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { HeroData } from "../../../constants/constants";
import { scrollTo } from "../../../utils/globalFunctions";
import Button from "../../Layout/Button/Button";
import styles from "./Hero.module.scss";

const Hero = () => {
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
                    <div
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
                    </div>
                ))}
            </Atropos>
        </motion.div>
    );
};

export default Hero;
