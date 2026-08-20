import Link from "next/link";

export default function SecondaryFooter() {
    return (
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center md:items-end text-[8px] md:text-[10px] lowercase text-[#131313] bg-[#f2ede2] font-medium px-4 md:px-8 py-16">
            <div className="flex flex-col gap-4 uppercase items-center md:items-start md:basis-1/3">
                <div className="flex gap-4">
                    <a href="https://vimeo.com/user218114889" target="_blank">Vimeo</a>
                    <a href="https://www.instagram.com/megparadowski" target="_blank">Ig</a>
                </div>
                <a href="mailto:megan@emparadance.com">megan@emparadance.com</a>
            </div>
            <div className="footerLogo md:basis-1/3 text-center">MP</div>
            <div className="flex flex-col gap-4 uppercase items-center md:items-end md:basis-1/3">
                <div className="flex gap-4">
                    <Link href={"/film"}>Film</Link>
                    <Link href={"/editorial"}>Editorial</Link>
                    <Link href={"/performance"}>Performance</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact"}>Contact</Link>
                </div>
                <div>
                &copy; 2026 all rights reserved
                </div>
            </div>
        </div>
    )
}
