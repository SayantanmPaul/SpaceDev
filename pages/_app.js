import '../styles/globals.css';
import Head from 'next/head';
import { DevProvider } from '../context/context';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SpaceDev.</title>
      </Head>
        <DevProvider>
            <Component {...pageProps} />
        </DevProvider>
    </>
  );
}
