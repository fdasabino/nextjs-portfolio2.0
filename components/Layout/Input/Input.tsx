import { useField } from "formik";
import { BiMessageDots } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdPhone, MdSubject } from "react-icons/md";
import styles from "./Input.module.scss";

// Define iconMap outside of the Input component to avoid re-creating the object on each render
const iconMap: Record<string, JSX.Element> = {
    name: <FaUserAlt />,
    email: <MdEmail />,
    phone: <MdPhone />,
    subject: <MdSubject />,
    message: <BiMessageDots />,
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    icon?: keyof typeof iconMap;
    name: string; // Make 'name' a required field
    rows?: any;
    placeholder?: string;
    type?: "text" | "textarea" | "email" | "number" | "password" | "phone";
    label?: string;
    error?: string;
    touched?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = ({ icon, placeholder, ...props }: InputProps) => {
    const [field, meta] = useField(props.name);
    const isError = meta.touched && meta.error;

    // Create a base className once so it doesn't have to be repeated
    const wrapperClassName = `${styles.form_input} ${isError ? styles.wrapper_error : ""}`;
    const inputClassName = `${isError ? styles.input_error : ""}`;
    const resolvedPlaceholder = isError ? meta.error : placeholder;

    // Use a common function to return the icon element based on the icon prop
    const renderIcon = () => icon && iconMap[icon];

    // Conditional rendering for the text area or the input field
    const inputOrTextarea =
        props.type === "textarea" ? (
            <textarea
                {...field}
                {...props}
                className={inputClassName}
                placeholder={resolvedPlaceholder}
            />
        ) : (
            <input
                {...field}
                {...props}
                className={inputClassName}
                placeholder={resolvedPlaceholder}
            />
        );

    return (
        <div className={wrapperClassName}>
            {renderIcon()}
            {inputOrTextarea}
        </div>
    );
};

export default Input;
