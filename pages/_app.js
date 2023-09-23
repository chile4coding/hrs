import "@/styles/globals.css";
import Providers from "@/redux/Providers";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Providers>
    <Toaster />
      <Component {...pageProps} />
    </Providers>
  );
}
