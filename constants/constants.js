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
        image: "https://res.cloudinary.com/frank2021/image/upload/v1708267815/uo2erokjtazdn4lou5py.jpg",
        intro: "Hello, I'm ",
        title: "Francisco Sabino",
    },
];

export const AboutData = [
    {
        id: 0,
        image: "https://res.cloudinary.com/frank2021/image/upload/v1652788529/portfolio/me.ee24849d87fd96da986a_jqze0d.jpg",
        text: "Welcome to my page, where I showcase my latest endeavor: a significant career transition. After years in the Hospitality Business, I've decided to pursue my passion for frontend development. I've immersed myself in HTML, CSS, and JavaScript, constantly honing my skills to create visually stunning and interactive web experiences. This shift represents an exhilarating new chapter in my life. I'm thrilled to apply my creativity, problem-solving abilities, and attention to detail in crafting intuitive user interfaces and seamless experiences. Join me on this journey of growth and discovery as we push boundaries and create impactful digital solutions together. Let's embark on this exciting adventure!",
    },
];

export const ProjectsData = [
    {
        title: "ShoppyFlow - Eccomerce",
        description:
            "ShoppyFlow is an exemplary M-E-R-N (MongoDB, Express, React(next-js), and Node.js) full-stack project meticulously crafted to illustrate the implementation of a comprehensive front and back-end infrastructure. Developed from the ground up, this project showcases the seamless integration of React and Node, enabling a robust and efficient application. To expedite the development process, the implementation incorporates the utilization of SASS.",
        image: "https://res.cloudinary.com/frank2021/image/upload/v1704284815/portfolio/wire_e5rra1.png",
        tags: [
            <SiMongodb
                key={0}
                color="#4CAA3D"
                size={30}
            />,
            <SiExpress
                key={1}
                color="#ccc"
                size={30}
            />,
            <SiNextdotjs
                key={2}
                color="#5ED4F3"
                size={30}
            />,
            <SiNodedotjs
                key={3}
                color="#659B60"
                size={30}
            />,
        ],
        source: "https://github.com/fdasabino/next_ecommerce",
        visit: "https://shoppyflowsweden.vercel.app/",
        id: 0,
    },

    {
        title: "Let's Practice Maths! - Educational Game",
        description:
            "This educational game was thoughtfully developed using fundamental web technologies, including HTML, CSS, and JavaScript, with the primary aim of nurturing and enhancing children's math skills. Its creation stemmed from a project undertaken at the esteemed Code Institute, showcasing the practical application of acquired knowledge and expertise. By leveraging the simplicity and versatility of HTML, the visual appeal of CSS, and the interactive functionality of JavaScript, this game offers an engaging and effective platform for children to practice and develop their mathematical proficiency.",
        image: "https://res.cloudinary.com/frank2021/image/upload/v1664667107/portfolio/math_game_hjfg9j.png",
        tags: [
            <SiHtml5
                key={0}
                size={30}
                color="#E34C26"
            />,
            <SiCss3
                key={1}
                size={30}
                color="#264DE4"
            />,
            <SiJavascript
                key={2}
                size={30}
                color="#EFD81D"
            />,
        ],
        source: "https://github.com/fdasabino/Love-Maths",
        visit: "https://fdasabino.github.io/Love-Maths/",
        id: 2,
    },

    {
        title: "Rock, Paper, Scissors Game - Modern Adaptation",
        description:
            "The development of this game entailed utilizing essential web technologies such as HTML, CSS, and JavaScript. Notably, the game boasts a fully responsive design, adapting seamlessly to various screen sizes and devices. Serving as an enjoyable alternative to the traditional rock, paper, scissors game, it offers a captivating and interactive experience. With its intuitive interface and engaging gameplay, players can revel in a dynamic and entertaining pastime while exploring the unique twists and features incorporated into this modern adaptation",
        image: "https://res.cloudinary.com/frank2021/image/upload/v1642764842/portfolio/screencapture-fdasabino-github-io-rock-paper-scissor-game-2022-01-21-12_31_18_epvy4f.png",
        tags: [
            <SiHtml5
                key={0}
                size={30}
                color="#E34C26"
            />,
            <SiCss3
                key={1}
                size={30}
                color="#264DE4"
            />,
            <SiJavascript
                key={2}
                size={30}
                color="#EFD81D"
            />,
        ],
        source: "https://github.com/fdasabino/rock-paper-scissor_game",
        visit: "https://fdasabino.github.io/rock-paper-scissor_game/",
        id: 3,
    },

    {
        title: "Ayrton Senna - Tribute",
        description:
            "This meticulously crafted page was developed using fundamental web technologies such as HTML, CSS, and JavaScript. It serves as the inaugural project undertaken at Hyper Island Stockholm (FED24), symbolizing the beginning of a remarkable learning journey. By harnessing the power of HTML, the page structure is defined, while CSS brings forth captivating visual aesthetics. JavaScript, on the other hand, contributes interactive elements and enhanced functionality to elevate the user experience.",
        image: "https://res.cloudinary.com/frank2021/image/upload/v1665056001/portfolio/hyper_models_white_rjjyhu.png",
        tags: [
            <SiHtml5
                key={0}
                size={30}
                color="#E34C26"
            />,
            <SiCss3
                key={1}
                size={30}
                color="#264DE4"
            />,
            <SiJavascript
                key={2}
                size={30}
                color="#EFD81D"
            />,
        ],
        source: "https://github.com/fdasabino/90s_web_page",
        visit: "https://quiet-twilight-401223.netlify.app/",
        id: 4,
    },
];

export const TimeLineData = [
    {
        year: "2020",
        text: "Started my journey, with youtube tutorials.",
    },
    {
        year: "2021",
        text: "Code Institute Bootcamp. As well as some online courses such as Udemy.",
    },
    {
        year: "2022/24",
        text: "Studying at Hyper Island Stockholm, Front End Developer Course.",
    },
    {
        year: "2023",
        text: "Frontend developer at Iquest Stockholm.",
    },
];

export const TestimonialsData = [
    {
        id: 0,
        name: "Jessica Norgren",
        position: "General Manager",
        company: "Haymarket by Scandic",
        img: "https://res.cloudinary.com/frank2021/image/upload/v1652792468/portfolio/jessica.15b9d7aeb955fdc3771b_dcu5yf.jpg",
        text: "Since 2018, I have the pleasure of having Mr Francisco Sabino in my hotel team, Haymarket, Stockholm. He holds the position of professional bartender at the cocktail bar Americain. Mr Sabino is a very appreciated colleague and he is considered one of our top employees. He is known for providing our guests with professional and caring five star service, and he shares positive energy with the team mates and the guests at the bar. He is punctual and his appearance is always professional, neat and tidy. I have followed Francisco's studying with interest and I feel proud of how he takes on his life as a dedicated student, while still holding a job at the hotel. With his disciplined hard work and commitment, I am sure Mr Sabino will be appreciated also in his new career as a Fullstack Web Developer.",
    },
    {
        id: 1,
        name: "Linda Molin",
        position: "Media Manager",
        company: "Arla Foods",
        img: "https://res.cloudinary.com/frank2021/image/upload/v1652792468/portfolio/linda.ba3c7e269a0b60095db4_za9dny.jpg",
        text: "I know Francisco Sabino personally since a few years back. Francisco is hard working, great at project management and has the ability of planning ahead. He is reliable, service minded, sociable, positive and always takes on a challenge with a smile on his face. I have been impressed with the dedication and drive Francisco has shown in regards to his career change. Francisco has always had a natural interest for IT and tech, and based on his talents I believe he will have a bright future as a Full stack developer. I can give Francisco Sabino my warmest recommendations.",
    },
];
