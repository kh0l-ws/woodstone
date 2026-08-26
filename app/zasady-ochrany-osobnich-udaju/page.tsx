// app/zasady-ochrany-osobnich-udaju/page.tsx

export const metadata = {
  title: "Zásady ochrany osobních údajů | WOOD&STONE s.r.o.",
  description: "Informace o zpracování osobních údajů a používání cookies na webu WOOD&STONE s.r.o.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 md:py-24 prose prose-neutral">
      <h1>Zásady ochrany osobních údajů</h1>
      <p className="text-sm text-neutral-500">Účinnost od: 01.09.2026</p>

      <h2>1. Správce osobních údajů</h2>
      <p>
        Správcem osobních údajů je WOOD&amp;STONE s.r.o., se sídlem Adolfovice 521,
        790 01 Bělá pod Pradědem, IČO: 258 62 740, DIČ: CZ25862740 (dále jen „správce“).
      </p>
      <p>
        Kontakt: info@woodstone.cz, +420 774 888 959
      </p>

      <h2>2. Jaké údaje zpracováváme</h2>
      <p>
        Prostřednictvím kontaktního formuláře na tomto webu zpracováváme údaje,
        které nám sami poskytnete, zejména:
      </p>
      <ul>
        <li>jméno a příjmení</li>
        <li>e-mailovou adresu</li>
        <li>telefonní číslo</li>
        <li>obsah zprávy / popis poptávaného projektu</li>
      </ul>

      <h2>3. Účel a právní základ zpracování</h2>
      <p>
        Údaje zpracováváme za účelem vyřízení vaší poptávky a případné následné
        komunikace ohledně nabídky a realizace zakázky. Právním základem je
        plnění opatření přijatých před uzavřením smlouvy na vaši žádost
        (čl. 6 odst. 1 písm. b) GDPR), případně náš oprávněný zájem odpovědět
        na váš dotaz.
      </p>

      <h2>4. Doba uchování</h2>
      <p>
        Údaje z poptávkového formuláře uchováváme po dobu nezbytnou k vyřízení
        poptávky a případné realizaci zakázky, nejdéle však 2 roky
        od posledního kontaktu, pokud nevznikne smluvní vztah, u kterého platí
        další zákonné lhůty (např. účetní a daňové předpisy).
      </p>

      <h2>5. Předávání údajů třetím stranám</h2>
      <p>
        Pro odesílání e-mailů z kontaktního formuláře využíváme službu Resend
        (zpracovatel). Údaje nepředáváme žádným dalším třetím stranám, s výjimkou
        případů, kdy nám to ukládá zákon.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Náš web může používat cookies pro zajištění základní funkčnosti a
        (po vašem souhlasu) pro analytické či marketingové účely.
        Používání nezbytných technických cookies není podmíněno souhlasem,
        ostatní kategorie cookies aktivujeme až po vašem souhlasu prostřednictvím
        cookie lišty.
      </p>

      <h2>7. Vaše práva</h2>
      <p>V souladu s GDPR máte právo zejména na:</p>
      <ul>
        <li>přístup ke svým osobním údajům,</li>
        <li>opravu nepřesných údajů,</li>
        <li>výmaz údajů („právo být zapomenut“),</li>
        <li>omezení zpracování,</li>
        <li>přenositelnost údajů,</li>
        <li>vznesení námitky proti zpracování,</li>
        <li>podání stížnosti u Úřadu pro ochranu osobních údajů (uoou.cz).</li>
      </ul>

      <h2>8. Kontakt</h2>
      <p>
        V případě dotazů ohledně zpracování osobních údajů nás kontaktujte na
        info@woodstone.cz.
      </p>
    </main>
  );
}