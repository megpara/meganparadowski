import { use, useState } from "react";
import Layout from "../components/Layout";
import Teaser from "../components/Teaser";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import SecondaryFooter from "../components/SecondaryFooter";

const works = [
    {
        media: "/work/stills/keilan.jpg",
        title: "Levis",
        mediaOrientation: "horizontal",
    },
        {
        media: "/work/stills/meg.jpg",
        title: "Levis",
        mediaOrientation: "horizontal",
    },
    {
        media: "/work/stills/tods.jpg",
        title: "Tods",
        mediaOrientation: "horizontal",
    },
    {
        media: "/work/ritual/audrey.jpg",
        title: "",
        mediaOrientation: "vertical",
    },
    {
        media: "/work/stills/travis.jpg",
        title: "",
        mediaOrientation: "vertical",
    },
        {
        media: "/work/stills/tippy2.jpg",
        title: "Levis",
        mediaOrientation: "horizontal",
    },
    {
        media: "/work/legs.jpg",
        title: "",
        mediaOrientation: "horizontal",
    },
    {
        media: "/work/stills/sezanne2.jpg",
        title: "Sézane",
        mediaOrientation: "horizontal",
    },
    {
        media: "/work/ritual/group.jpg",
        title: "",
        mediaOrientation: "horizontal",
    },
    {
        media: "/work/ssor/4.png",
        title: "",
        mediaOrientation: "horizontal",
    },
    {
        media: "/work/welldone/Empara_IWR-8.jpg",
        title: "",
        mediaOrientation: "vertical",
    }
];

export default function Editorial() {

    return(
        <Layout>
            <Head>
                <title>Megan Paradowski | Editorial Movement Director</title>
                <meta
                name="description"
                content="Editorial Movement Direction | Megan Paradowski | Los Angeles Director, Choreographer, and Movement Director"
                />
            </Head>
            <div className="text-white w-full columns-1 md:columns-2 gap-8 md:gap-12 p-8 pt-[15vh] relative">
                {works.map((work) => (
                    <div className="mb-8 md:mb-16 group relative cursor-pointer break-inside-avoid-column w-full relative group">
                        <Image src={work.media} alt="Project image" className={"object-cover" + (work.title ? " opacity-1 group-hover:opacity-80 duration-300" : "") + (work.mediaOrientation == "horizontal" ? " aspect-[3/2]" : " aspect-[3/4]")} width={700} height={500} priority/>
                            {work.title && 
                                <div className="absolute text-sm top-0 left-0 w-full h-full flex flex-col items-center justify-center invisible group-hover:visible duration-300">
                                    {work.title}
                                </div>
                            }
                    </div>
                ))}
            </div>
            <SecondaryFooter />
        </Layout>
    )
}
