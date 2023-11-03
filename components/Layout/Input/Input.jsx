import { useField } from "formik";
import { BiMessageDots } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdPhone, MdSubject } from "react-icons/md";
import styles from "./Input.module.scss";

const iconMap = {
    name: <FaUserAlt />,
    email: <MdEmail />,
    phone: <MdPhone />,
    subject: <MdSubject />,
    message: <BiMessageDots />,
};

const Input = ({ icon, placeholder, ...props }) => {
    const [field, meta] = useField(props);

    if (props.type === "textarea") {
        return (
            <div
                className={`${styles.form_input} ${
                    meta.touched && meta.error ? styles.wrapper_error : ""
                }`}
            >
                {icon && iconMap[icon]}
                <textarea
                    className={`${meta.touched && meta.error ? styles.input_error : ""}`}
                    placeholder={`${meta.touched && meta.error ? meta.error : placeholder}`}
                    {...field}
                    {...props}
                />
            </div>
        );
    }

    return (
        <div
            className={`${styles.form_input} ${
                meta.touched && meta.error ? styles.wrapper_error : ""
            }`}
        >
            {icon && iconMap[icon]}
            <input
                className={`${meta.touched && meta.error ? styles.input_error : ""}`}
                placeholder={`${meta.touched && meta.error ? meta.error : placeholder}`}
                {...field}
                {...props}
            />
        </div>
    );
};

export default Input;
