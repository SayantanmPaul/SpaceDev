import '../styles/globals.css';
import Head from 'next/head';
import { DevProvider } from '../context/context';
import { Analytics } from '@vercel/analytics/react';
 
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SpaceDevs</title>
      </Head>
        <DevProvider>
            <Component {...pageProps} />
            <Analytics/>
        </DevProvider>
    </>
  );
}
