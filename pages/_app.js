import "../styles/globals.css";
import "../styles/auth/auth.css";

import Navigation from "../Layout/Navigation";
import Footer from "../Layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navigation /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
