"use client"

import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <>
        <Link href="/">Rental<span>Car</span></Link>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Catalog</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Header;