import Button from "@/components/Layout/Button/Button";
import styles from "@/styles/pages/NotFound.module.scss";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
    const router = useRouter();

    const handleRedirect = () => {
        router.push("/");
    };

    return (
        <section className={styles.not_found}>
            <div className={`${styles.not_found__container} ${styles.base_blurry_background}`}>
                <div className={styles.not_found__container__icon}>
                    <TbError404 />
                </div>
                <h1>OOPs!</h1>
                <h2>Page Not Found</h2>
                <p>
                    It seems like the page you are looking for does not exist!
                    <br />
                    <br />
                </p>
                <Button
                    onClick={handleRedirect}
                    style="primary">
                    <AiOutlineArrowLeft /> Take me back
                </Button>
            </div>
        </section>
    );
};

export default NotFound;
