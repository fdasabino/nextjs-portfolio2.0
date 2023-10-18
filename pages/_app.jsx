import "antd/dist/antd.min.css";
import "atropos/css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../components/Layout/Layout";
import "../styles/Planetarium.css";
import "../styles/ShakingMovement.css";
import "../styles/Swiper.css";
import "../styles/globals.css";

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
