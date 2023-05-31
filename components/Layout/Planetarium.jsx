import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { TechArray } from "../../constants/constants";

const Planetarium = () => {
  const planetsRef = useRef([]);

  // Function to handle planet rotation animation
  const rotatePlanet = useCallback((planet) => {
    gsap.to(planet, {
      rotation: 360,
      repeat: -1,
      scale: 1.5,
      duration: 1.5,
      ease: "ease",
      transformOrigin: "50% 50%",
    });
  }, []);

  // Function to restart planet rotation animation
  const restartAnimation = useCallback((planet) => {
    gsap.to(planet, {
      rotation: 0,
      duration: 1.5,
      ease: "ease",
      transformOrigin: "50% 50%",
    });
  }, []);

  // Function to pause planet rotation animation
  const pauseRotation = useCallback((planet) => {
    gsap.set(planet, { rotation: 0, ease: "ease", transformOrigin: "50% 50%", scale: 1.1 });
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
  }, [handleMouseLeave, handleMouseOver, rotatePlanet]);

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
        {TechArray.map((tech, index) => (
          <div key={tech.id} className="planet" ref={(el) => (planetsRef.current[index] = el)}>
            <span className="planet-icon">{tech.icon}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Planetarium;
