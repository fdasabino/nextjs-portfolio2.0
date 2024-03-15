import { ToastPosition } from "react-hot-toast";

export const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
        });
    }
};

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

export const validateEmail = (email: string) => {
    const regexSt =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexSt.test(email);
};
