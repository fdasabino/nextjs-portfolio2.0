import { DiReact, DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { SiRedux, SiNextdotjs, SiTailwindcss, SiBootstrap } from "react-icons/si";

export const TechArray = [
  {
    id: 0,
    title: "HTML",
    icon: <DiHtml5 color="#FF5733" size={"4rem"} />,
    skill: 85,
    label: "85%",
  },
  {
    id: 1,
    title: "CSS",
    icon: <DiCss3 color="#1E90FF" size={"4rem"} />,
    skill: 85,
    label: "85%",
  },
  {
    id: 2,
    title: "JavaScript",
    icon: <DiJavascript1 color="#FFD700" size={"4rem"} />,
    skill: 50,
    label: "50%",
  },
  {
    id: 3,
    title: "React",
    icon: <DiReact color="#97c9fa" size={"4rem"} />,
    skill: 50,
    label: "50%",
  },
  {
    id: 4,
    title: "NextJS",
    icon: <SiNextdotjs color="#1E90FF" size={"4rem"} />,
    skill: 50,
    label: "50%",
  },
  {
    id: 5,
    title: "Redux",
    icon: <SiRedux color="#663399" size={"4rem"} />,
    skill: 40,
    label: "40%",
  },
  {
    id: 6,
    title: "Tailwind",
    icon: <SiTailwindcss color="#1E90FF" size={"4rem"} />,
    skill: 60,
    label: "60%",
  },
  {
    id: 7,
    title: "Bootstrap",
    icon: <SiBootstrap color="#663399" size={"4rem"} />,
    skill: 60,
    label: "60%",
  },
];

export const HeroData = [
  {
    id: 0,
    image:
      "https://res.cloudinary.com/frank2021/image/upload/v1664808618/portfolio/IMG_0100_abrxzc.jpg",
    title: "Hi, I'm Francisco Sabino",
  },
];

export const AboutData = [
  {
    id: 0,
    image:
      "https://res.cloudinary.com/frank2021/image/upload/v1652788529/portfolio/me.ee24849d87fd96da986a_jqze0d.jpg",
    text: "I have put this page together to show you a little bit about my latest challenge - changing career paths. I have worked pretty much my entire adult life in the Hospitality Business: bars, hotels, restaurants, and clubs. It is fun!. But like everything in life - things come to an end and I have decided to become a developer. It is a completely different type of job, as you can imagine and I am thrilled to be taking this new step in my life.\n So follow me on my journey. ",
  },
];

export const ProjectsData = [
  {
    title: "STOREADO",
    description:
      "M-E-R-N - Fullstack project created using MongoDB, Express, React and Node.js. STOREADO demonstrates how to implement a front and back-end from scratch using React and Node. In this project I have used Tailwind css for faster development.",
    image:
      "https://res.cloudinary.com/frank2021/image/upload/v1679769452/portfolio/Storeado_rl7zeo.png",
    tags: ["Mongo ", "Express ", "React ", "Node"],
    source: "",
    visit: "https://storeado.herokuapp.com/",
    id: 0,
  },
  // {
  //   title: "Pro-Shop",
  //   description: "M-E-R-N - Fullstack project created using MongoDB, Express, React and Node.js.",
  //   image:
  //     "https://res.cloudinary.com/frank2021/image/upload/v1664664470/portfolio/devices-format_hsrpjm.png",
  //   tags: ["Mongo ", "Express ", "React ", "Node"],
  //   source: "https://github.com/fdasabino/proshopv2",
  //   visit: "https://proshoappudemy.herokuapp.com/",
  //   id: 1,
  // },
  {
    title: "Let's Practice Maths!!!",
    description:
      "This game was developed using basic HTML, CSS and JavaScript, to help kids when developing their math skills. This was created as part of a Code Institute project.",
    image:
      "https://res.cloudinary.com/frank2021/image/upload/v1664667107/portfolio/math_game_hjfg9j.png",
    tags: ["HTML ", "CSS ", "JavaScript"],
    source: "https://github.com/fdasabino/Love-Maths",
    visit: "https://fdasabino.github.io/Love-Maths/",
    id: 2,
  },
  {
    title: "Rock, Paper, Scissors Game",
    description:
      "This game was developed using basic HTML, CSS and JavaScript. It is fully responsive. It can be a fun alternative to the classic rock, paper, scissors game.",
    image:
      "https://res.cloudinary.com/frank2021/image/upload/v1642764842/portfolio/screencapture-fdasabino-github-io-rock-paper-scissor-game-2022-01-21-12_31_18_epvy4f.png",
    tags: ["HTML ", "CSS ", "JavaScript"],
    source: "https://github.com/fdasabino/rock-paper-scissor_game",
    visit: "https://fdasabino.github.io/rock-paper-scissor_game/",
    id: 3,
  },
  {
    title: "Ayrton Senna - Tribute",
    description:
      "This page was developed using basic HTML, CSS and JavaScript. This page was created as the first project at Hyper Island Stockholm (FED24).",
    image:
      "https://res.cloudinary.com/frank2021/image/upload/v1665056001/portfolio/hyper_models_white_rjjyhu.png",
    tags: ["HTML ", "CSS ", "JavaScript"],
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
