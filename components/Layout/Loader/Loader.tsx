import styles from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.hypnotic} />
            <h2 className={styles.heading}>Loading...</h2>
        </div>
    );
};

export default Loader;
