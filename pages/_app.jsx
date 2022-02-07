import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "@comp/utils/Layout";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "apollo/ApolloClient";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* favicon.ico */}
        <link rel="icon" href="/favicon.ico" />
        {/* apple-touch-icon.png */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
