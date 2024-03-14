import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { HeroData } from "../../../constants/constants";
import { scrollTo } from "../../../utils/globalFunctions";
import Animation from "../../Layout/Animation/Animation";
import Button from "../../Layout/Button/Button";
import styles from "./Hero.module.scss";

const Hero = () => {
    const [text] = useTypewriter({
        words: ["<Front End Developer at Iquest/>", "<Student at Hyper Island/>", "<Freelancer/>"],
        loop: true,
        delaySpeed: 2000,
    });

    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100,
    };

    const animation = {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            duration: 1,
            ease: "easeInOut",
        },
    };

    return (
        <Animation>
            <motion.div
                transition={spring}
                animate={animation}>
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
                                <Cursor cursorColor="#00bbff" />
                            </h2>
                            <Button onClick={() => scrollTo("contact")}>
                                Contact <MdOutlineAlternateEmail />
                            </Button>
                        </div>
                    </div>
                ))}
            </motion.div>
        </Animation>
    );
};

export default Hero;
