import React, { useEffect } from "react";
import { SiReact, SiNextdotjs, SiCss3, SiHtml5, SiTailwindcss, SiJavascript } from "react-icons/si";
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function Animation() {
  useEffect(() => {
    window.onload = window.onload = function () {
      gsap.set(".m1_stage", { x: "50%", opacity: 1 });
    };

    gsap
      .timeline({ defaults: { duration: 5 } })
      .from(".main1", { duration: 1, autoAlpha: 1, ease: "power1.inOut" }, 0)
      .fromTo(".m1_cGroup", { opacity: 1 }, { duration: 1, opacity: 1, stagger: -0.1 }, 0)
      .fromTo(".m1_cGroup", { scale: 0.5 }, { duration: 1, scale: 1, stagger: -0.1 }, 0)
      .fromTo(".m1_cGroup", { x: 0 }, { duration: 1, x: 0, stagger: -0.1 }, 0)
      .fromTo(".m1_cGroup", { y: 0 }, { duration: 1, y: 0, stagger: -0.1 }, 0)
      .fromTo(".m1_cGroup", { rotation: 0 }, { duration: 1, rotation: 0, stagger: -0.1 }, 0)

      // orbit2
      .fromTo(
        ".orbit_2_a",
        { xPercent: -50, yPercent: -20 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line2", false)[0];
            },
            start: 1.1,
            end: 1.3,
          },
          ease: "auto",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )
      .fromTo(
        ".orbit_2_b",
        { xPercent: -50, yPercent: -65 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line2", false)[0];
            },
            start: 1.3,
            end: 1.1,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      //orbit3
      .fromTo(
        ".orbit_3_a",
        { xPercent: -50, yPercent: -55 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
            },
            start: 1.3,
            end: 1.1,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )
      .fromTo(
        ".orbit_3_b",
        { xPercent: -50, yPercent: -85 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
            },
            start: 1.1,
            end: 1.2,
          },
          ease: "auto",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )
      .fromTo(
        ".orbit_3_c",
        { xPercent: -45, yPercent: -35 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
            },
            start: 1.2,
            end: 1.3,
          },
          ease: "auto",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      );
  }, []);
  return (
    <div className="absolute z-0 w-screen h-screen">
      <svg className="main1" width="100%" height="100%">
        <defs>
          <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="10%" style={{ stopColor: "rgb(0, 255, 200)", stopOpacity: 0.9 }} />
            <stop offset="99%" style={{ stopColor: "rgb(0, 110, 255)", stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        <g className="m1_stage" opacity="0">
          {/* orbit_2 */}
          <g className="m1_cGroup">
            <circle
              className="c1_line c1_line4"
              cx="0"
              cy="50"
              r="550"
              fill="none"
              strokeWidth="2"
              stroke="url(#grad1)"
              opacity="0.4"
            />

            <g className="m1Orb orbit_2_a">
              <SiHtml5 size={50} color="#ff7f08" />
            </g>

            <g className="m1Orb orbit_2_b">
              <SiCss3 size={50} color="#006bca" />
            </g>
          </g>

          {/* orbit_3 */}
          <g className="m1_cGroup">
            <circle
              className="c1_line c1_line3"
              cx="0"
              cy="50"
              r="450"
              fill="none"
              strokeWidth="2"
              stroke="url(#grad1)"
              opacity="0.4"
            />

            <g className="m1Orb orbit_3_a">
              <SiJavascript size={50} color="#e6ff07" />
            </g>

            <g className="m1Orb orbit_3_b">
              <SiReact size={50} color="#02c4ff" />
            </g>

            <g className="m1Orb orbit_3_c">
              <SiNextdotjs size={50} color="#ffffff" />
            </g>
          </g>

          <g className="m1_cGroup">
            <circle
              className="c1_line c1_line2"
              cx="0"
              cy="50"
              r="360"
              fill="none"
              strokeWidth="2"
              stroke="url(#grad1)"
              opacity="0.5"
            />
          </g>

          {/* center circle */}
          <g className="m1_cGroup">
            <circle className="c1_solid" cx="0" cy="50" r="280" fill="url(#grad1)" opacity="0.4" />
            <circle
              className="c1_line c1_line1"
              cx="0"
              cy="50"
              r="279"
              fill="none"
              strokeWidth="3"
              stroke="url(#grad1)"
              opacity="0.5"
            />
            <g className="m1Orb orb1"></g>
          </g>
        </g>
      </svg>
    </div>
  );
}
