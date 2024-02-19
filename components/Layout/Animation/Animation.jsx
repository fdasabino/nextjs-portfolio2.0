import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { animationIcons } from "../../../constants/constants";
import styles from "./Animation.module.scss";

const Animation = ({ children }) => {
    const container = useRef();
    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });

    useEffect(() => {
        // Dynamic import of GSAP
        import("gsap")
            .then(async (gsapModule) => {
                const gsap = gsapModule.default;
                const motionPathPluginModule = await import("gsap/MotionPathPlugin");
                gsap.registerPlugin(motionPathPluginModule.MotionPathPlugin);
                const icons = container.current?.children || [];
                const totalIcons = icons.length;

                // Function to calculate the radius based on media query
                function getRadius() {
                    return isDesktop ? 360 : isMobile ? 180 : 360;
                }

                // Set initial position of icons
                const radius = getRadius();
                const angleIncrement = (2 * Math.PI) / totalIcons;

                gsap.set(icons, {
                    opacity: 1,
                    zIndex: 0,
                });

                // Animate icons along a circular path
                for (let i = 0; i < totalIcons; i++) {
                    const angle = i * angleIncrement;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    gsap.from(icons[i], {
                        duration: 5,
                        ease: "circ.out", // Linear easing for a smooth animation
                        x: x,
                        y: y,
                        opacity: 0,
                    });

                    gsap.to(icons[i], {
                        duration: 25,
                        ease: "circ", // Linear easing for a smooth animation
                        motionPath: {
                            path: [
                                { x: x, y: y },
                                { x: -y, y: x },
                                { x: -x, y: -y },
                                { x: y, y: -x },
                                { x: x, y: y },
                            ],
                            autoRotate: true,
                        },

                        repeat: -1, // Infinite repeat
                    });
                }
            })
            .catch((err) => console.error("Failed to load GSAP plugins:", err));
    }, [isDesktop, isMobile]); // Dependencies

    return (
        <>
            <div className={styles.content}>{children}</div>
            <div className={styles.animation_container}>
                <div
                    className={styles.animation}
                    ref={container}>
                    {animationIcons.map((icon, index) => (
                        <span
                            key={index}
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: `translate(-50%, -50%) rotate(${
                                    (360 / animationIcons.length) * index
                                }deg)`,
                            }}>
                            {icon}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Animation;
