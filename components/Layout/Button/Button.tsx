import styles from "./Button.module.scss";

interface ButtonProps {
    children: React.ReactNode;
    style?: "primary" | "secondary" | "tertiary" | "danger" | "google";
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void;
}

const buttonStyles = {
    primary: styles.btnPrimary,
    secondary: styles.btnSecondary,
    tertiary: styles.btnTertiary,
    danger: styles.btnDanger,
    google: styles.btnGoogle,
};

const Button: React.FC<ButtonProps> = ({
    children,
    style = "primary",
    className = "",
    ...rest
}) => {
    const buttonClass = buttonStyles[style] ?? buttonStyles.primary;

    return (
        <button
            className={`${buttonClass} ${className}`}
            {...rest}>
            {children}
        </button>
    );
};

export default Button;
