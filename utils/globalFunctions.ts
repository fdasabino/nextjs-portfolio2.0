import axios from "axios";
import { ToastPosition } from "react-hot-toast";

// Constants
export const toasterOptions = {
    position: "bottom-center" as ToastPosition,
    reverseOrder: true,
    gutter: 8,
    toastOptions: {
        duration: 5000,
        style: {
            background: "#363636",
            color: "#fff",
        },
        success: {
            duration: 3000,
            theme: {
                primary: "green",
                secondary: "black",
            },
        },
    },
};

// Functions
export const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "center", // Ensure the element is scrolled to the center of the viewport
            inline: "center", // Ensure the element is horizontally centered in the viewport
        });
    }
};

export const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
};

export const validateEmail = (email: string) => {
    const regexSt =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexSt.test(email);
};

// post requests
export const createAbout = (about: object) => {
    const res = axios.post("/api/admin/about", about);
    return res;
};

export const createProject = (project: object) => {
    const res = axios.post("/api/admin/project", project);
    return res;
};

export const createTestimonial = (testimonial: object) => {
    const res = axios.post("/api/admin/testimonial", testimonial);
    return res;
};

export const createTimeline = (timeline: object) => {
    const res = axios.post("/api/admin/timeline", timeline);
    return res;
};

// delete requests
export const deleteProject = (id: string) => {
    const res = axios.put("/api/admin/project", { id });
    return res;
};
