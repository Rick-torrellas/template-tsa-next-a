import 'bootswatch/dist/cyborg/bootstrap.min.css';
import './../styles/styles.css';
import Head from "next/head";
import config from "./../config";


export default function MyApp({ Component, pageProps }) {
  const icon = config.icon;
    return (
      <>
      <Head>
          <link rel="icon" href={icon} />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }