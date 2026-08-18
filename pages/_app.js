import Header from "../components/Header";
import "../styles/globals.css";
import Head from "next/head";
import localFont from '@next/font/local';

const optimanova = localFont({
  src: [
    { path: "../public/fonts/OptimaNovaLTProLight.otf", weight: "100" },
    { path: "../public/fonts/OptimaNovaLTProRegular.otf", weight: "400" }
  ],
  variable: '--font-optima-nova'
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Megan Paradowski | Choreographer, Director, Movement Director</title>
        <meta
          name="description"
          content="Megan Paradowski is an LA-based choreographer, director, and movement director."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="stylesheet" href="https://use.typekit.net/oev0dtt.css" />
        <link rel="stylesheet" href="https://use.typekit.net/uao4cwk.css" />
        <meta property="og:title" content="Megan Paradowski | Choreographer, Movement Director, Director" key="ogtitle" />
        <meta property="og:description" content="Choreographer, Movement Director, Director" key="ogdesc" />
        <meta property="og:image" content="/work/stills/sezanne2.jpg" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <div className={`${optimanova.variable} font-paragraph w-full h-full`}>
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
