
import { Layout } from "../components/layout";
import 'bootstrap/dist/css/bootstrap.css'

import '../styles/animate.min.css'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
