"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { label: "Domů", href: "#" },
  { label: "O nás", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "Realizace", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-black/75 backdrop-blur-xl py-4 shadow-xl"
          : "py-7"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold tracking-widest text-white"
        >
          WOOD&STONE
        </Link>

        <nav className="hidden gap-10 text-white lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+420123456789"
          className="hidden items-center gap-2 rounded-full bg-[#A27B5C] px-6 py-3 text-white lg:flex"
        >
          <Phone size={18} />
          +420 123 456 789
        </a>
      </div>
    </header>
  );
}