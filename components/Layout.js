import Head from "next/head";
import { useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

export default function Layout({ children }) {

    return (
        <div className="w-full h-full relative">
            <Head>
                <link id="icon" rel="icon" href="../../favicon.png" />
                <link rel="preload" href="https://www.paypal.com/sdk/js?client-id=AXgz5VqpoO23JzH90mNz2vBKiDRIRB7OREs-LmEYALGylPsTU9Q2d-jIKSWdBF5G9mxdB3iOVX4JjDFI&components=buttons,hosted-buttons" as="script"></link>
            </Head>
            <div className="child w-full h-full">
            {children}
            </div>
        </div>
    )
}