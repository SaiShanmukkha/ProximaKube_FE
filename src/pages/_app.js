import '../../styles/globals.css';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <NavBar router={router}/>
      <Component {...pageProps} router={router} />
      <Footer />
    </>
  );
}

export default MyApp
