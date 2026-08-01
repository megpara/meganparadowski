import Link from "next/link";

export default function MenuItem({ title, subtitleOne, subtitleTwo, link }) {
    return (
        <Link className="flex gap-4 items-center justify-between md:justify-center md:justify-normal group" href={link}>
            <div className="flex gap-2 text-xl items-center text-[#bab5b1]">
            <div className="hidden md:inline md:opacity-0 md:group-hover:opacity-100 duration-1000">[</div>
            <div className="italic lowercase text-left md:text-center text-xs relative font-display">{subtitleOne}<br/>{subtitleTwo}</div>
            <div className="opacity-0 md:group-hover:opacity-100 duration-1000">]</div>
            </div>
            <div className="text-xl md:text-3xl text-[#f7f5ee] menuItem">{title}</div>
        </Link>
    )
}