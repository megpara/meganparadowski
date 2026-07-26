import Head from "next/head";
import Layout from "../components/Layout";
import SecondaryFooter from "../components/SecondaryFooter";

export default function Ethos() {
    return(
        <Layout>
            <Head>
                <title>Megan Paradowski | Contact</title>
                <meta
                name="description"
                content="Reach out | Megan Paradowski Los Angeles Choreographer, Director, and Movement Director"
                />
            </Head>
            <div className="relative w-full h-full flex flex-col">
                <div className="h-full flex flex-col pt-[24vh] px-4 md:px-8">
                    <div className="flex">
                        <h1 className="basis-1/2">Contact</h1>
                        <div className="basis-1/2 italic text-[#bab5b1] text-sm">
                        Reach out — I'd love to connect
                        <br />
                        <br />
                        <a href="mailto:megan@emparadance.com" className="underline">megan@emparadance.com</a>
                        </div>
                    </div>
                </div>
                <SecondaryFooter />
            </div>
        </Layout>
    )
}
