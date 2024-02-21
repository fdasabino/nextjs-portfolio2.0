import "antd/dist/antd.min.css";
import "atropos/css";
import { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
