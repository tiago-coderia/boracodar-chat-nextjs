import Head from "next/head";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>#BoraCodar - ChatApp #4</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container h-screen grid grid-rows-3 py-[2.4rem] px-[3.2rem] m-auto">
        <Header />
        <Chat />
        <Footer />
      </div>
    </>
  );
}
