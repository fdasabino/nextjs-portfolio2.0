import {
    SiAngular,
    SiBootstrap,
    SiCss3,
    SiDocker,
    SiExpress,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRedux,
    SiSass,
    SiSelenium,
    SiTailwindcss,
} from "react-icons/si";

export const animationIcons = [
    <SiHtml5
        key={1}
        color="#E34F26"
    />,
    <SiSass
        key={2}
        color="#CC6699"
    />,
    <SiJavascript
        key={3}
        color="#F7DF1E"
    />,
    <SiReact
        key={4}
        color="#61DAFB"
    />,
    <SiRedux
        key={5}
        color="#764ABC"
    />,
    <SiNextdotjs
        key={6}
        color="#ffffff"
    />,
    <SiDocker
        key={7}
        color="#2496ED"
    />,
    <SiSelenium
        key={8}
        color="#43B02A"
    />,
    <SiAngular
        key={9}
        color="#DD0031"
    />,
    <SiMongodb
        key={10}
        color="#47A248"
    />,
    <SiBootstrap
        key={11}
        color="#563D7C"
    />,
    <SiMysql
        key={12}
        color="#4479A1"
    />,
    <SiCss3
        key={13}
        color="#1572B6"
    />,
];

export const TechArray = [
    {
        id: 0,
        title: "HTML",
        icon: (
            <SiHtml5
                color="#FF5733"
                size={"4rem"}
            />
        ),
        skill: 85,
        label: "85%",
    },
    {
        id: 1,
        title: "CSS",
        icon: (
            <SiCss3
                color="#1E90FF"
                size={"4rem"}
            />
        ),
        skill: 85,
        label: "85%",
    },
    {
        id: 2,
        title: "JavaScript",
        icon: (
            <SiJavascript
                color="#FFD700"
                size={"4rem"}
            />
        ),
        skill: 50,
        label: "50%",
    },
    {
        id: 3,
        title: "React",
        icon: (
            <SiReact
                color="#97c9fa"
                size={"4rem"}
            />
        ),
        skill: 50,
        label: "50%",
    },
    {
        id: 4,
        title: "NextJS",
        icon: (
            <SiNextdotjs
                color="#1E90FF"
                size={"4rem"}
            />
        ),
        skill: 50,
        label: "50%",
    },
    {
        id: 5,
        title: "Redux",
        icon: (
            <SiRedux
                color="#663399"
                size={"4rem"}
            />
        ),
        skill: 40,
        label: "40%",
    },
    {
        id: 6,
        title: "Tailwind",
        icon: (
            <SiTailwindcss
                color="#1E90FF"
                size={"4rem"}
            />
        ),
        skill: 60,
        label: "60%",
    },
    {
        id: 7,
        title: "Bootstrap",
        icon: (
            <SiBootstrap
                color="#663399"
                size={"4rem"}
            />
        ),
        skill: 60,
        label: "60%",
    },
];

export const HeroData = [
    {
        id: 0,
        image: "https://res.cloudinary.com/frank2021/image/upload/v1708267815/portfolio/uo2erokjtazdn4lou5py.jpg",
        intro: "Hello, I'm ",
        title: "Francisco Sabino",
    },
];

export const ContactData = [
    {
        id: 0,
        text: "🌟 Are you in need of a talented frontend developer to elevate your projects? Look no further! I'm eager to collaborate, showcase my skills, and learn along the way. Let's connect and discuss how we can bring your ideas to life! 💼💡",
    },
];
