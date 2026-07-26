import Layout from "../components/Layout";
import SecondaryFooter from "../components/SecondaryFooter";

export default function Home() {
    return (
        <Layout>
            <div className="w-screen h-screen relative">
            <video loop autoPlay muted playsInline className="absolute w-screen h-screen top-0 left-0 object-cover" src="choreoreel.mp4" poster="/sezanne2.jpg" />
            <div className="absolute bottom-16 w-full h-[12vh] flex items-end text-[8px] md:text-[10px] tracking-widest px-8">
                <div className="basis-1/3">
                    <div className="uppercase cursor-default">
                    Choreographer, director, movement director
                    </div>
                </div>
                <div className="basis-1/3 flex flex-col items-center">
                    <div className="max-w-[75px] md:max-w-[100px] uppercase">
                        <a href="mailto:megan@emparadance.com">
                        megan@emparadance.com
                        </a>
                    </div>
                </div>
                <div className="basis-1/3" />
            </div>
            </div>
            <SecondaryFooter />
        </Layout>
    )
}