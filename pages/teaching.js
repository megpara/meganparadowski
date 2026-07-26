import Head from "next/head";
import Layout from "../components/Layout";
import { title } from "process";
import SecondaryFooter from "../components/SecondaryFooter";

const upcoming = [
    {
        title: "Empara X TTDC Pre-Professional Workshop",
        date: "Tuesday 5/13",
        time: "5:30-7pm",
        location: "TTDC Desert Studio",
        info: "https://www.paypal.com/ncp/payment/8PMCQ29J8TGNQ"
    },
    {
        title: "Empara Company Class",
        date: "Tuesday 5/13",
        time: "7-8:30pm",
        location: "TTDC Desert Studio",
        info: "https://www.paypal.com/ncp/payment/HZ455RS5X4XM4"
    },
]

const past = [
    {
        title: "Chapman University — Professor of Modern Dance",
        date: "2026 — Present"
    },
    {
        title: "South Pasadena High School — Contemporary Dance",
        date: "2023 — Present"
    },
    {
        title: "L.A. Dance Project Community Classes",
        date: "2026"
    },
    {
        title: "Colburn School Master Class",
        date: "September 2025",
    },
    {
        title: "Grand Arts High School Master Class",
        date: "May 2024",
    },
    {
        title: "Los Angeles Dance Festival",
        date: "2023 & 2024"
    },
    {
        title: "Genesis Studios",
        date: "2023"
    },
    {
        title: "Base Studios London",
        date: "2023"
    },
    {
        title: "The Hub Studios London",
        date: "2023"
    },
    {
        title: "The Space LA",
        date: "2023"
    },
    {
        title: "Arts on Site NYC",
        date: "2023"
    },
    {
        title: "University of Redlands — Professor of Modern Dance",
        date: "2022-2023"
    },
    {
        title: "Brockus Project Studios",
        date: "2023"
    },
    {
        title: "Stomping Ground LA",
        date: "2023"
    },
    {
        title: "Studio2 Berlin",
        date: "2022"
    }
]

export default function Teaching() {
    return (
        <Layout>
            <Head>
                <title>Megan Paradowski | Upcoming Classes and Teaching History</title>
                <meta
                name="description"
                content="Take class | Megan Paradowski Los Angeles Choreographer, Director, and Movement Director"
                />
            </Head>
            <div className="relative">
            <div className="text-white block md:flex justify-between pt-[24vh] px-4 md:px-8">
                <h1 className="basis-1/3 md:basis-1/2 pb-4 md:pb-0">Teaching Philosophy</h1>
                <div className="basis-1/2 italic text-[#bab5b1] text-sm">
                    Rooted in theatricality and risk-driven movement, Megan's class challenges dancers to twist, contort, and destabilize the familiar. Through layers of pedestrianism and storytelling, participants are encouraged to access raw expression while maintaining control and intention. Dancers are guided through freeform exploration to awaken sensation and deepen awareness, technical exercises that build strength and clarity, and dynamic phrasework.
                    <br />
                    <br />
                    With influences from Wim Vandekeybus and Pina Bausch, the movement shifts between raw, animalistic physicality, pedestrian gestures, and moments of clear technique. Participants are encouraged to bring their own thoughts, emotions, and lived experiences into the work. Together, we discover the transformative space we inhabit when we let go and surrender to the dance.
                </div>
            </div>
                <div className="text-white block md:flex justify-between pt-[12vh] px-4 md:px-8">
                    <h1 className="basis-1/3 md:basis-1/2 pb-4 md:pb-0">Upcoming Classes</h1>
                    <div className="basis-2/3 md:basis-1/2 text-[#bab5b1] text-sm italic">
                        <div className="pb-4">New dates coming soon.</div>
                    </div>
                </div>
                <div className="text-white block md:flex justify-between py-[12vh] px-4 md:px-8">
                    <h1 className="basis-1/3 md:basis-1/2 pb-4 md:pb-0">Teaching History</h1>
                    <div className="basis-2/3 md:basis-1/2 text-[#bab5b1] text-sm italic flex flex-col divide-y-[1px] divide-[#bab5b1]">
                    {past.map((workshop, index) => (
                        <div className={"flex justify-between pb-2"  + (index !== 0 ? " pt-2" : "")}>
                            <div>{workshop.title}</div>
                            <div>{workshop.date}</div>
                        </div>
                    ))}
                    </div>
                </div>
                <SecondaryFooter />
            </div>
        </Layout>
    )
}