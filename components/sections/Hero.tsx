import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Wood&Stone"
        fill
        priority
        className="object-cover scale-105"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">

        <p className="mb-6 uppercase tracking-[6px] text-[#ae7c54]">
          WOOD • STONE • QUALITY
        </p>

        <h1 className="max-w-4xl text-6xl font-black leading-none text-white md:text-8xl">
          Stavíme s jistotou.
          <br />
          Tvoříme s precizností.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-300">
          Rodinné domy, dřevostavby, rekonstrukce,
          pergoly i zemní práce.
        </p>

        <div className="mt-12 flex flex-wrap gap-5">
          <Button href="#contact">
            Nezávazná poptávka
          </Button>

          <Button
            href="#gallery"
            variant="secondary"
          >
            Realizace
          </Button>
        </div>
      </div>
    </section>
  );
}