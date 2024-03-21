import Loader from "@/components/Layout/Loader/Loader";
import "antd/dist/antd.css";
import "atropos/css";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        router.events.on("routeChangeStart", start);
        router.events.on("routeChangeComplete", end);
        router.events.on("routeChangeError", end);
        return () => {
            router.events.off("routeChangeStart", start);
            router.events.off("routeChangeComplete", end);
            router.events.off("routeChangeError", end);
        };
    }, [router]);

    return (
        <SessionProvider session={pageProps.session}>
            <Layout loading={loading}>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <Component {...pageProps} />
                    </>
                )}
            </Layout>
        </SessionProvider>
    );
}

export default MyApp;
