"use client"

import Link from "next/link";
import React from "react";
import Icon from "@/components/Icon/Icon";

const Header = () => {
    return (
        <div>
        <Link href="/" className="">
            <Icon name="icon-logo" />
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/catalog">Catalog</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Header;