import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { animationIcons } from "../../../constants/constants";
import styles from "./Animation.module.scss";

interface AnimationProps {
    children: React.ReactNode;
}

const Animation: React.FC<AnimationProps> = ({ children }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Dynamic import of GSAP
        import("gsap")
            .then(async (gsapModule) => {
                const gsap = gsapModule.default;
                const motionPathPluginModule = await import("gsap/MotionPathPlugin");
                gsap.registerPlugin(motionPathPluginModule.MotionPathPlugin);

                // Ensure container.current is HTMLDivElement before accessing its children
                if (!container.current) return;
                const icons = Array.from(container.current.children);
                const totalIcons = icons.length;

                // Function to calculate the radius based on media query
                function getRadius() {
                    return isDesktop ? 360 - totalIcons * 0.6 : 360 - totalIcons * 0.2;
                }

                // Set initial position of icons
                const radius = getRadius();
                const angleIncrement = (2 * Math.PI) / totalIcons;

                gsap.set(icons, {
                    opacity: 1,
                    zIndex: 0,
                    rotate: 360,
                    repeat: -1,
                });

                // Animate icons along a circular path
                for (let i = 0; i < totalIcons; i++) {
                    const angle = i * angleIncrement;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    gsap.from(icons[i], {
                        duration: totalIcons * 0.5,
                        ease: "power4",
                        x: x,
                        y: y,
                        opacity: 0,
                    });

                    gsap.to(icons[i], {
                        duration: totalIcons * 2,
                        ease: "sine",
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
    }, [isDesktop, isMobile, container]); // Dependencies

    return (
        <>
            <div className={styles.content}>{children}</div>
            <div className={styles.animation_container}>
                {!isMobile && (
                    <div
                        ref={container}
                        className={styles.animation}>
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
                )}
            </div>
        </>
    );
};

export default Animation;
