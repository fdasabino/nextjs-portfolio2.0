import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const Planetarium = () => {
  const planetsRef = useRef([]);

  // Function to handle planet rotation animation
  const rotatePlanet = useCallback((planet) => {
    gsap.to(planet, {
      rotation: 360,
      repeat: -1,
      duration: 1.5,
      ease: "easeInOut",
      transformOrigin: "50% 50%",
    });
  }, []);

  // Function to restart planet rotation animation
  const restartAnimation = useCallback((planet) => {
    gsap.to(planet, {
      rotation: 0,
      duration: 1.5,
      ease: "easeInOut",
      transformOrigin: "50% 50%",
    });
  }, []);

  // Function to pause planet rotation animation
  const pauseRotation = useCallback((planet) => {
    gsap.set(planet, { rotation: 0 });
  }, []);

  // Function to handle mouseover event
  const handleMouseOver = useCallback(
    (event) => {
      const planet = event.currentTarget;
      if (planet.classList.contains("activePlanet")) {
        planet.classList.remove("activePlanet");
        pauseRotation(planet);
      } else {
        planet.classList.add("activePlanet");
        restartAnimation(planet);
        rotatePlanet(planet);
      }
    },
    [pauseRotation, rotatePlanet, restartAnimation]
  );

  // Function to handle mouseleave event
  const handleMouseLeave = useCallback(
    (event) => {
      const planet = event.currentTarget;
      if (planet.classList.contains("activePlanet")) {
        planet.classList.remove("activePlanet");
        pauseRotation(planet);
      }
    },
    [pauseRotation]
  );

  useEffect(() => {
    const planets = planetsRef.current;

    // Attach event listeners and set initial rotation for each planet
    planets.forEach((planet) => {
      planet.addEventListener("mouseover", handleMouseOver);
      planet.addEventListener("mouseleave", handleMouseLeave);
      gsap.set(planet, { rotation: 0, scale: 1.1, stagger: 0.2 });
    });

    // Cleanup the event listeners when the component unmounts
    return () => {
      planets.forEach((planet) => {
        6;
        planet.removeEventListener("mouseover", handleMouseOver);
        planet.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [handleMouseLeave, handleMouseOver]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -300,
      }}
      transition={{
        duration: 1.8,
        delay: 0.5,
        ease: "backInOut",
        repeat: 0,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="planetarium"
    >
      <div className="planets">
        <div className="planet" ref={(el) => (planetsRef.current[0] = el)}>
          <span className="planet-icon">
            <SiJavascript color="#ebd302" />
          </span>
        </div>
        <div className="planet" ref={(el) => (planetsRef.current[1] = el)}>
          <span className="planet-icon">
            <SiReact color="#009ccc" />
          </span>
        </div>
        <div className="planet" ref={(el) => (planetsRef.current[2] = el)}>
          <span className="planet-icon">
            <SiNextdotjs color="#8b8b8b" />
          </span>
        </div>
        <div className="planet" ref={(el) => (planetsRef.current[3] = el)}>
          <span className="planet-icon">
            <SiHtml5 color="#cc4008" />
          </span>
        </div>
        <div className="planet" ref={(el) => (planetsRef.current[4] = el)}>
          <span className="planet-icon">
            <SiCss3 color="#1900fd" />
          </span>
        </div>
        <div className="planet" ref={(el) => (planetsRef.current[5] = el)}>
          <span className="planet-icon">
            <SiTailwindcss color="#13878f" />
          </span>
        </div>
        <div className="planet" ref={(el) => (planetsRef.current[6] = el)}>
          <span className="planet-icon">
            <SiRedux color="#5901ac" />
          </span>
        </div>
        <div className="planet" ref={(el) => (planetsRef.current[7] = el)}>
          <span className="planet-icon">
            <SiNodedotjs color="#00a030" />
          </span>
        </div>
        <div className="planet" ref={(el) => (planetsRef.current[8] = el)}>
          <span className="planet-icon">
            <SiExpress color="#53af08" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Planetarium;
