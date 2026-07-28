import { use, useState } from "react";
import Layout from "../components/Layout";
import Teaser from "../components/Teaser";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import SecondaryFooter from "../components/SecondaryFooter";

const works = [
    {
        media: "/work/clozee.mp4",
        title: "CloZee - Courage (feat. ROZET) (Official Music Video)",
        type: "video",
        url: "/work/clozee",
    },
    {
        media: "/work/ritual/group.jpg",
        title: "Ritual",
        type: "image",
        url: "/work/ritual",
    },
    {
        media: "/work/bluemoon.jpg",
        title: "Blue Moon - Chromatics Music Video",
        type: "image",
        url: "/work/bluemoon",
    },
    {
        media: "/work/veja.mp4",
        title: "VEJA Sneakers",
        type: "video",
        url: "/work/veja",
    },
    {
        media: "wdtease.mov",
        title: "Well Done",
        type: "video",
        url: "/work/welldonefilm",
    },
    {
        media: "/work/siretok/running.jpg",
        title: "Sir Etok - Hatis Noit Music Video",
        type: "image",
        url: "/work/siretok",
    },
];

export default function Film() {
    const router = useRouter();
    const mockClick = () => {
    };

    return(
        <Layout>
            <Head>
                <title>Megan Paradowski | Director</title>
                <meta
                name="description"
                content="Film Work | Megan Paradowski | Los Angeles Director, Choreographer, and Movement Director"
                />
            </Head>
            <div className="w-full columns-1 md:columns-3 gap-8 md:gap-12 px-4 md:px-8 py-8 pt-[20vh] md:pt-[24vh] relative">
                {works.map((work) => (
                    <div className="mb-8 md:mb-16 group relative cursor-pointer break-inside-avoid-column w-full relative" onClick={work.url ? () => router.push(work.url) : mockClick}>
                        {(work.type) == "image" && <Image src={work.media} alt="Project image" className="opacity-80 group-hover:opacity-100 duration-300 aspect-video object-cover w-full" width={500} height={300} priority/>}
                        {(work.type) == "video" && <video loop autoPlay muted playsInline src={work.media} className="opacity-80 group-hover:opacity-100 duration-300 aspect-video"/>}
                        <div className="text-[#bab5b1] group-hover:text-[#f2ede2] duration-300 pt-6">
                            <div className="text-sm pb-1">{work.title}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="uppercase w-full pb-24 flex flex-col px-4 md:px-8 text-[8px] md:text-[10px] gap-4 text-center md:text-left">
                <p>Megan is 1/2 of director duo Colin & Meg</p> 
                <a href="https://www.colinandmeg.direct" target="_blank" className="underline">colinandmeg.direct</a>
            </div>
            <SecondaryFooter />
        </Layout>
    )
}
