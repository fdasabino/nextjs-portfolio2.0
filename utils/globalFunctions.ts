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
export const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
        });
    }
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
