"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F5F2ED] py-28"
    >
      <Container>

        <div className="grid gap-16 lg:grid-cols-2">

          <div>

            <p className="uppercase tracking-[5px] text-[#8A6748]">
              Kontakt
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight">
              Nezávazná poptávka
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Máte představu o svém projektu?
              Ozvěte se nám a společně najdeme nejlepší řešení.
            </p>

            <div className="mt-12 space-y-6">

              <div>
                <p className="font-semibold">
                  Telefon
                </p>

                <p className="text-neutral-600">
                  +420 123 456 789
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  E-mail
                </p>

                <p className="text-neutral-600">
                  info@woodstone.cz
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  Sídlo
                </p>

                <p className="text-neutral-600">
                  Brno, Česká republika
                </p>
              </div>

            </div>

          </div>

          <form className="rounded-[32px] bg-white p-10 shadow-xl">

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Jméno a příjmení"
                className="w-full rounded-xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#8A6748]"
              />

              <input
                type="tel"
                placeholder="Telefon"
                className="w-full rounded-xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#8A6748]"
              />

              <input
                type="email"
                placeholder="E-mail"
                className="w-full rounded-xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#8A6748]"
              />

              <textarea
                rows={6}
                placeholder="Popište váš projekt..."
                className="w-full rounded-xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#8A6748]"
              />

            </div>

            <div className="mt-8">

              <Button href="#">
                Odeslat nezávaznou poptávku
              </Button>

            </div>

            <p className="mt-6 text-sm text-neutral-500">
              Odpovídáme zpravidla do 24 hodin.
            </p>

          </form>

        </div>

      </Container>
    </section>
  );
}