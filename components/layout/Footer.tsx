import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white">

      <Container>

        <div className="border-b border-white/10 py-20">

          <h2 className="text-5xl font-black tracking-wider md:text-7xl">
            WOOD&STONE
          </h2>

          <p className="mt-6 max-w-xl text-neutral-400 leading-8">
            Moderní stavební společnost zaměřená na kvalitní realizace,
            dřevostavby, rekonstrukce a zemní práce.
          </p>

        </div>

        <div className="grid gap-14 py-16 md:grid-cols-3">

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Služby
            </h3>

            <ul className="space-y-4 text-neutral-400">

              <li>Rodinné domy</li>
              <li>Dřevostavby</li>
              <li>Pergoly</li>
              <li>Rekonstrukce</li>
              <li>Zemní práce</li>

            </ul>

          </div>

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Firma
            </h3>

            <ul className="space-y-4">

              <li>
                <Link href="#about">O nás</Link>
              </li>

              <li>
                <Link href="#services">Služby</Link>
              </li>

              <li>
                <Link href="#gallery">Realizace</Link>
              </li>

              <li>
                <Link href="#contact">Kontakt</Link>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Kontakt
            </h3>

            <div className="space-y-4 text-neutral-400">

              <p>
                +420 123 456 789
              </p>

              <p>
                info@woodstone.cz
              </p>

              <p>
                Brno, Česká republika
              </p>

            </div>

          </div>

        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 WOOD&STONE. Všechna práva vyhrazena.
          </p>

          <p>
            Navrženo a vytvořeno s důrazem na kvalitu.
          </p>

        </div>

      </Container>

    </footer>
  );
}