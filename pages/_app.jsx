import Layout from "../components/Layout/Layout";
import "antd/dist/antd.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/globals.css";
import "../styles/Swiper.css";
import "../styles/ShakingMovement.css";
import "../styles/Planetarium.css";
import "atropos/css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
