import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
