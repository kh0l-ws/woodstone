import Container from "@/components/ui/Container";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      <Container>
      <FadeIn delay={0}>
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
              <h3 className="mb-6 text-xl font-semibold">WOOD&STONE s.r.o.</h3>
              <ul className="space-y-4 text-neutral-400">
              <li>Adolfovice 521, Česká republika</li>
              <li>IČO: 258 62 740</li>
              <li>DIČ: CZ25862740</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold">Firma</h3>
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
            <h3 className="mb-6 text-xl font-semibold">Kontakt</h3>
            <div className="space-y-2 text-neutral-400">
              <h5 className="mb-2 text-l font-bold">Karel Neugebauer</h5>
              <p>+420 774 888 959</p>
              <p>info@woodstone.cz</p>
            </div>
            <br/>
            <div className="space-y-2 text-neutral-400">
              <h5 className="mb-2 text-l font-bold">Jan Malý</h5>
              <p>+420 777 060 804</p>
              <p>info@woodstone.cz</p>
            </div>
          </div>
          {/* 
          <div>
            <h3 className="mb-6 text-xl font-semibold">Služby</h3>
            <ul className="space-y-4 text-neutral-400">
              <li>Rodinné domy</li>
              <li>Dřevostavby</li>
              <li>Pergoly</li>
              <li>Rekonstrukce</li>
              <li>Zemní práce</li>
            </ul>
          </div>
          */}
          
        </div>
        </FadeIn>
    <FadeIn delay={0}>

        {/* Mapa */}
<div className="overflow-hidden rounded-2xl border border-white/10">
  <iframe
    src="https://www.google.com/maps?q=WOOD%26STONE+s.r.o.+stavby&output=embed"
    width="100%"
    height="320"
    style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.85)" }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Mapa - WOOD&STONE s.r.o."
  />
</div>
</FadeIn>
<FadeIn delay={0}>
{/* Přidej mezeru mezi mapou a copyright sekcí samostatně */}
<div className="mt-16" />

<div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
  <p>© 2026 WOOD&STONE s.r.o. Všechna práva vyhrazena.</p>
  <p>Navrženo a vytvořeno s důrazem na kvalitu.</p>
</div>
</FadeIn>
      </Container>
    </footer>
  );
}