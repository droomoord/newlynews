import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navigation/Navbar";
import { Container } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
