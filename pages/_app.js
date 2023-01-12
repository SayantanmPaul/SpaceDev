import '../styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SpaceDev.</title>
      </Head>
      <ParallaxProvider scrollAxis="horizontal">
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}
