import Head from "next/head";
import Layout from "../components/Layout";
import SecondaryFooter from "../components/SecondaryFooter";

export default function Ethos() {
    return(
        <Layout>
            <Head>
                <title>Megan Paradowski | Empara | A Movement Company</title>
                <meta
                name="description"
                content="Empara | A movement company founded & directed by Megan Paradowski"
                />
            </Head>
            <div className="relative w-full h-full flex flex-col">
                <div className="basis-1/3 flex justify-between pt-[24vh] px-4 md:px-8">
                    <h1 className="basis-1/2">Empara — A Movement Company</h1>
                    <div className="basis-1/2 italic text-[#bab5b1] text-sm">
                    Empara is a movement and choreography company focused on creating immersive, nontraditional contemporary dance experiences. The company celebrates other art forms and encourages all bodies to connect to their innate desire to move. Empara originates from the Latin word "emparer," meaning to take possession of something. In the work we take possession of the human form, the skin and what it holds, emotions, lineage, and the collective unconscious.
                    <br />
                    <br />
                    Founded by Meg in 2024, Empara brings together audiences that may not otherwise experience contemporary dance by hosting performances in unusual settings. Empara works with visceral, dynamic, and theatrical movement that celebrates the unique styles and qualities of each dancer. The company is driven by collaboration - between the dancers, other mediums, and spaces. 
                    <br />
                    <br />
                    Empara’s work has been presented at venues including L.A. Dance Project, The Aster, Soho House, Melody Wine Bar, and Bloodlust Wine Bar. In addition to live performance, Empara also produces dance films that have premiered at festivals such as Dance Camera West. The company has been selected for residencies including LAUNCH:LA and Oracle Egg, and the company has been  commissioned for events such as Contemporary Art Review LA’s Launch Party at BOZOMAG Gallery, an immersive dinner at Soho House, and curated lineups at The Aster and Studio A.
                    <br />
                    <br />
                    Empara’s work has been featured in Autre Magazine, LA Dance Chronicle, Boston Art Review, Curate LA, and Voyage LA, and the company continues to craft transformative experiences that blur the lines between dance, visual art, and performance.
                    <br />
                    <br />
                    <a href="https://www.emparadance.com" target="_blank" className="underline">emparadance.com</a>
                    </div>
                </div>
                <div className="basis-2/3 relative pb-[12vh]">
                </div>
                <SecondaryFooter />
            </div>
        </Layout>
    )
}