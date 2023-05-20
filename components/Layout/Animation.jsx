import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export default function Animation() {
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    if (typeof window !== "undefined" && window.document) {
      window.onload = function () {
        gsap.set(".m1_stage", {
          x: "70%",
          y: "10%",
          opacity: 0.5,
          scale: 1,
          transformOrigin: "50% 50%",
        });
      };
    }

    gsap
      .timeline({ defaults: { duration: 10 } })
      .from(".main1", { duration: 1, ease: "power1.inOut" }, 0)
      .fromTo(".m1_cGroup", { opacity: 0 }, { duration: 0.3, opacity: 1, stagger: -0.1 }, 0)
      .from(
        ".m1_cGroup",
        {
          rotation: 180,
          duration: 2.5,
          transformOrigin: "50% 50%",
          stagger: -0.05,
          ease: "elastic",
        },
        0
      )
      .add("orbs", 1.2)

      .fromTo(
        ".orb1",
        { xPercent: -35, yPercent: -5 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line1", false)[0];
            },
            start: 1.03,
            end: 1.22,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )
      .fromTo(
        ".orb2",
        { xPercent: -45, yPercent: -10 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line2", false)[0];
            },
            start: 0.98,
            end: 1.2,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )
      .fromTo(
        ".orb3",
        { xPercent: -50, yPercent: -15 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
            },
            start: 1.06,
            end: 1.31,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )
      .fromTo(
        ".orb3b",
        { xPercent: -50, yPercent: -25 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
            },
            start: 1.49,
            end: 1.65,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )
      .fromTo(
        ".orb3c",
        { xPercent: -45, yPercent: -15 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
            },
            start: 0.95,
            end: 1.2,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )
      .fromTo(
        ".orb4",
        { xPercent: -50, yPercent: -25 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line4", false)[0];
            },
            start: 1.14,
            end: 1.26,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )
      .fromTo(
        ".orb4b",
        { xPercent: -50, yPercent: -25 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line4", false)[0];
            },
            start: 1.41,
            end: 1.6,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )
      .fromTo(
        ".m1Orb",
        { scale: 0, transformOrigin: "50% 50%" },
        {
          duration: 0.8,
          scale: 1.5,
          ease: "back.out(3)",
          stagger: 0.15,
          overwrite: "auto",
        },
        "orbs"
      )
      .fromTo(
        ".m1OrbBlank",
        { opacity: 0 },
        {
          duration: 0.8,
          opacity: function (i) {
            return 0.2 + i / 7;
          },
          stagger: 0.1,
          overwrite: "auto",
        },
        "orbs"
      )
      .fromTo(
        ".m1OrbBlank",
        {
          x: function (i) {
            return 620 - (i / 4) * 380;
          },
          transformOrigin: function (i) {
            return -(620 - (i / 4) * 380) + "px 0px";
          },
          rotation: function (i) {
            return [99, -10, 55, 110, 120][i];
          },
        },
        { rotation: "+=75", yoyo: true, repeat: -1 },
        "orbs"
      );
  }, []);

  return (
    <div className="absolute top-0 main1">
      <svg width="100vw" height="100vh">
        <defs>
          <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="10%" style={{ stopColor: "transparent", stopOpacity: "0.9" }} />
            <stop offset="99%" style={{ stopColor: "transparent", stopOpacity: "0.1" }} />
          </linearGradient>
          <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="25%" style={{ stopColor: "rgb(0,255,200)", stopOpacity: "0.1" }} />
            <stop offset="99%" style={{ stopColor: "rgb(200,255,0)", stopOpacity: "0.2" }} />
          </linearGradient>
        </defs>
        <g className="m1_stage" opacity={0}>
          <g className="m1_cGroup">
            <circle className="m1OrbBlank" cx={0} cy={50} r={50} fill="#1290ff" />
            <circle
              className="c1_line c1_line4"
              cx={0}
              cy={50}
              r={550}
              fill="none"
              strokeWidth={2}
              stroke="url(#grad1)"
              opacity="0.4"
            />
            <g className="m1Orb orb4b">
              <SiTailwindcss size={40} color="#00d6f7" />
            </g>
            <g className="m1Orb orb4">
              <SiReact size={40} color="#0199ff" />
            </g>
          </g>
          <g className="m1_cGroup">
            <circle className="m1OrbBlank" cx={0} cy={50} r={25} fill="#983334" />
            <circle
              className="c1_line c1_line3"
              cx={0}
              cy={50}
              r={450}
              fill="none"
              strokeWidth={2}
              stroke="url(#grad1)"
              opacity="0.4"
            />
            <g className="m1Orb orb3">
              <SiJavascript size={40} color="#eeff00" />
            </g>
            <g className="m1Orb orb3b">
              <SiReact size={40} color="#0199ff" />
            </g>
            <g className="m1Orb orb3c">
              <SiNextdotjs size={40} color="#fff" />
            </g>
          </g>
          <g className="m1_cGroup">
            <circle className="m1OrbBlank" cx={0} cy={50} r={15} fill="#653997" />
            <circle
              className="c1_line c1_line2"
              cx={0}
              cy={50}
              r={360}
              fill="none"
              strokeWidth={2}
              stroke="url(#grad1)"
              opacity="0.5"
            />
            <g className="m1Orb orb2">
              <SiHtml5 size={40} color="#ff0000" />
            </g>
          </g>
          <g className="m1_cGroup">
            <circle className="m1OrbBlank" cx={0} cy={50} r={20} fill="#653997" />
            <circle className="m1OrbBlank" cx={0} cy={50} r={40} fill="rgba(125,200,32,0.19)" />
            <circle className="c1_solid" cx={0} cy={50} r={280} fill="transparent" opacity="0.2" />
            <circle
              className="c1_line c1_line1"
              cx={0}
              cy={50}
              r={279}
              fill="none"
              strokeWidth={3}
              stroke="url(#grad1)"
              opacity="0.5"
            />
            <g className="m1Orb orb1">
              <SiCss3 size={40} color="#040fd7" />
            </g>
          </g>
          <g className="m1_cGroup">
            <circle className="c1_solid" cx={0} cy={50} r={220} fill="transparent" opacity="0.4" />
          </g>
          <g className="m1_cGroup">
            <circle className="c1_solid" cx={0} cy={50} r={150} fill="transparent" opacity="0.5" />
          </g>
          <g className="m1_cGroup">
            <circle className="c1_solid" cx={0} cy={50} r={80} fill="transparent" opacity="0.6" />
          </g>
        </g>
      </svg>
    </div>
  );
}
