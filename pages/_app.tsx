import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css'

import Layout from '../components/Layout'
import LoginModal from '../components/modals/LoginModal'
import RegisterModal from '../components/modals/RegisterModal'
import EditModal from '../components/modals/EditModal';

export default function App({ Component, pageProps }: AppProps) {
  return (

  <>
    <Head>
      <title>Tweetie</title>
      <meta name="description" content="Tweeeet" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
    </Head>

    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  </>
  )
}
