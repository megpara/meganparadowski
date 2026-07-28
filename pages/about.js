import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import SecondaryFooter from "../components/SecondaryFooter";

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About Megan Paradowski</title>
                <meta
                name="description"
                content="Megan Paradowski | Los Angeles Choreographer and Movement Director"
                />
            </Head>
                <div className="relative z-[-1]">
                    <div className="text-white flex flex-col md:flex-row gap-4 justify-between pt-[20vh] md:pt-[24vh] px-4 md:px-8 pb-20">
                        <h1 className="basis-1/2">About Megan Paradowski</h1>
                        <div className="basis-1/2 text-[#bab5b1] text-sm italic text-justify">
                            Megan Paradowski holds a BFA in Dance from Tisch School of the Arts at NYU. She has choreographed and performed in contemporary dance works across the US and Europe in venues such as Soho House, 2220 Arts + Archives, the Museum of Neon Art, the Institute for Art and Olfaction, NAVEL LA, and Hosek Contemporary Berlin. Her work has been reviewed by the LA Times, Autre Magazine, LA Dance Chronicle, and Fjord Review, amongst others. She is honored to have received grants from the German Consulate General in Los Angeles and the US Embassy in Cyprus, and was a finalist for LAUNCH, LA Dance Project's residency program in 2024. She has had the incredible opportunity to tour and perform her work over the past five years in places such as Berlin, London, and Cyprus.
                            <br />
                            <br />
                            Megan also works to bring avant-garde movement to the entertainment industry, where she has worked on commercial photo and video shoots including CloZee, Loren Stewart, and Undesigned LA. Megan is interested in collaborating with other artists and celebrating other forms, as well as transcendence through live performance. She currently teaches modern dance at Chapman University, as well as at schools across Los Angeles such as South Pasadena High School.
                            <Image src="/MeganParadowskiHeadshot2024.png" alt="Megan Paradowski" className="max-w-full md:max-w-[400px] object-cover pt-20" width={400} height={300}/>
                        </div>
                    </div>
                    <SecondaryFooter />
                </div>
        </Layout>
    )
}