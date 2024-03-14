import "antd/dist/antd.min.css";
import "atropos/css";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    );
}

export default MyApp;
