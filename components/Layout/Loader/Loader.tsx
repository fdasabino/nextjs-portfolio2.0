import styles from "./Loader.module.scss";
import ReactLogo from "./ReactLogo";
const Loader = () => {
    return (
        <div className={styles.loader}>
            <ReactLogo className={styles.reactLogo} />
            <h2 className={styles.heading}>Loading...</h2>
        </div>
    );
};

export default Loader;
