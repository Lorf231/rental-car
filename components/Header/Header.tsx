"use client"

import Link from "next/link";
import React from "react";
import Icon from "@/components/Icon/Icon";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const getLinkClass = (path: string) => {
        return pathname === path ? "text-[#0b44cd]" : "";
    }

    return (
        <div className="flex items-center justify-between py-6 px-[120px] bg-[#f2f4f7] w-full">
        <Link href="/" className="">
            <Icon name="icon-logo" width={104} height={16} />
        </Link>
        <nav className="">
            <ul className="flex gap-8">
                <li>
                    <Link href="/" className={`button ${getLinkClass("/")}`}>Home</Link>
                </li>
                <li>
                    <Link href="/catalog" className={`button ${getLinkClass("/catalog")}`}>Catalog</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Header;