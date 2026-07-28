import { use, useState } from "react";
import Layout from "../components/Layout";
import Teaser from "../components/Teaser";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import SecondaryFooter from "../components/SecondaryFooter";

const works = [
    {
        media: "/work/simulacra/simulacra1.jpg",
        mediaOrientation: "vertical",
        title: "L.A. Dance Project's LAUNCH:LA 2025 | Simulacra",
        type: "image",
        url: "/work/simulacra",
    },
    {
        media: "/work/babst.jpg",
        mediaOrientation: "horizontal",
        title: "Babst Gallery",
        type: "image",
        url: "/work/babst",
    },
    {
        media: "/work/soho/6.JPG",
        mediaOrientation: "horizontal",
        title: "Soho House",
        type: "image",
        url: "/work/sohohouse",
    },
    {
        media: "/work/bozomag/bozo.gif",
        mediaOrientation: "horizontal",
        title: "Contemporary Art Review LA X BOZOMAG",
        type: "image",
        url: "/work/bozomag"
    },
    {
        media: "/work/bloodlust/1.jpg",
        mediaOrientation: "vertical",
        title: "Bloodlust Wine Bar | The Aster LA",
        type: "image",
        url: "/work/bloodlust",
    },
    {
        media: "/work/ssor/2.png",
        mediaOrientation: "horizontal",
        title: "She Sprang Out Red",
        type: "image",
        url: "/work/ssor"
    },
    {
        media: "/work/welldone/Empara_IWR-8.jpg",
        mediaOrientation: "vertical",
        title: '"Well Done" the Show',
        type: "image",
        url: "/work/welldone",
    },
    {
        media: "/work/cloudLift.png",
        mediaOrientation: "vertical",
        title: "Sun Lover",
        type: "image",
        url: "/work/oracleegg"
    },
];

export default function Performance() {
    const router = useRouter();
    const mockClick = () => {
    };

    return(
        <Layout>
            <Head>
                <title>Megan Paradowski | Choreographer</title>
                <meta
                name="description"
                content="Choreography | Megan Paradowski | Los Angeles Director, Choreographer, and Movement Director"
                />
            </Head>
            <div className="text-white w-full columns-1 md:columns-3 gap-8 md:gap-12 px-4 md:px-8 pb-20 pt-[20vh] md:pt-[24vh] relative">
                {works.map((work) => (
                    <div className="mb-8 md:mb-16 group relative cursor-pointer break-inside-avoid-column w-full relative" onClick={work.url ? () => router.push(work.url) : mockClick}>
                        {(work.type) == "image" && <Image src={work.media} alt="Project image" className={"opacity-80 group-hover:opacity-100 duration-300 object-cover" + (work.mediaOrientation == "horizontal" ? " aspect-video" : " aspect-3/4")} width={500} height={300} priority/>}
                        {(work.type) == "video" && <video loop autoPlay muted playsInline src={work.media} className="opacity-80 group-hover:opacity-100 duration-300"/>}
                        <div className="text-[#bab5b1] group-hover:text-white duration-300 pt-6">
                            <div className="text-sm pb-1">{work.title}</div>
                        </div>
                    </div>
                ))}
            </div>
            <SecondaryFooter />
        </Layout>
    )
}