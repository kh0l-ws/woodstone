// app/galerie/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Category = "Vše" | "Domy" | "Pergoly" | "Rekonstrukce" | "Zemní práce" | "Truhlářství";

const categories: Category[] = ["Vše", "Domy", "Pergoly", "Rekonstrukce", "Zemní práce", "Truhlářství"];

const projects = [
  { id: 1, src: "/gallery/house-1.jpg", category: "Domy", title: "Moderní rodinný dům" },
  { id: 2, src: "/gallery/pergola-1.jpg", category: "Pergoly", title: "Dřevěná pergola" },
  { id: 3, src: "/gallery/interior-1.jpg", category: "Rekonstrukce", title: "Rekonstrukce interiéru" },
  { id: 4, src: "/gallery/earth-1.jpg", category: "Zemní práce", title: "Zemní práce" },
  { id: 5, src: "/gallery/carpentry-1.jpg", category: "Truhlářství", title: "Truhlářská výroba" },
  { id: 6, src: "/gallery/terrace-1.jpg", category: "Domy", title: "Terasa" },
  { id: 7, src: "/gallery/terrace-1.jpg", category: "Domy", title: "Terasa" },
  { id: 8, src: "/gallery/terrace-1.jpg", category: "Domy", title: "Terasa" },
  { id: 9, src: "/gallery/terrace-1.jpg", category: "Domy", title: "Terasa" },
  { id: 10, src: "/gallery/terrace-1.jpg", category: "Domy", title: "Terasa" },
  { id: 11, src: "/gallery/terrace-1.jpg", category: "Domy", title: "Terasa" },
  { id: 12, src: "/gallery/terrace-1.jpg", category: "Domy", title: "Terasa" },
  { id: 13, src: "/gallery/terrace-1.jpg", category: "Domy", title: "Terasa" },
  // doplnit dalšími projekty...
];

export default function GaleriePage() {
  const [active, setActive] = useState<Category>("Vše");
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);

  const filtered =
    active === "Vše" ? projects : projects.filter((p) => p.category === active);

  const currentIndex = selected ? filtered.findIndex((p) => p.id === selected.id) : -1;

  const showNext = () => {
    if (currentIndex === -1) return;
    const next = filtered[(currentIndex + 1) % filtered.length];
    setSelected(next);
  };

  const showPrev = () => {
    if (currentIndex === -1) return;
    const prev = filtered[(currentIndex - 1 + filtered.length) % filtered.length];
    setSelected(prev);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-900 text-neutral-900 font-medium hover:bg-neutral-900 hover:text-white transition cursor-pointer mb-8"
      >
    <span aria-hidden="true">←</span>
       Zpět na hlavní stránku
    </Link>
      <p className="text-sm uppercase tracking-wide text-neutral-500 mb-2">
        Realizace
      </p>
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">
        Naše projekty
      </h1>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm border transition cursor-pointer ${
              active === cat
                ? "bg-neutral-900 text-white border-neutral-900"
                : "border-neutral-300 hover:border-neutral-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p)}
            className="relative aspect-[4/3] overflow-hidden rounded-xl group text-left cursor-pointer"
          >
            <Image
              src={p.src}
              alt={p.title}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-end p-4">
              <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                {p.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white text-3xl leading-none hover:opacity-70 cursor-pointer"
            aria-label="Zavřít"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 md:left-8 text-white text-6xl leading-none hover:opacity-70 p-2 cursor-pointer"
            aria-label="Předchozí"
          >
            ‹
          </button>

          <div
            className="relative w-full max-w-4xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.title}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <p className="absolute -bottom-8 left-0 text-white text-sm">
              {selected.title}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 md:right-8 text-white text-6xl leading-none hover:opacity-70 p-2 cursor-pointer"
            aria-label="Další"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}