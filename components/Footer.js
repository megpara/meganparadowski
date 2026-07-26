import Link from "next/link"

export default function Footer() {
    return (
        <div className="absolute bottom-0 h-[8vh] flex justify-between items-center text-[8px] md:text-xs lowercase text-[#bab5b1] border-t-[1px] border-[#69696b] border-opacity-20 footer">
            <div><a href="mailto:megan@emparadance.com">megan@emparadance.com</a></div>
            <div>&copy; 2026 all rights reserved</div>
        </div>
    )
}