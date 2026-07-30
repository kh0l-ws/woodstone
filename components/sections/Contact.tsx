"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Phone, Mail, MapPin, User, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F5F2ED] py-28">
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
              Máte představu o svém projektu? Ozvěte se nám a společně
              najdeme nejlepší řešení.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                  <Phone className="text-amber-700" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <p className="text-neutral-600">+420 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                  <Mail className="text-amber-700" size={20} />
                </div>
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-neutral-600">info@woodstone.cz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                  <MapPin className="text-amber-700" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Sídlo</p>
                  <p className="text-neutral-600">
                    Adolfovice 521, Česká republika
                  </p>
                </div>
              </div>
            </div>

            {/* Volitelné doplnění prázdného prostoru dole */}
            <div className="mt-12 rounded-2xl border border-[#8A6748]/20 bg-white/50 p-6">
              <p className="font-semibold">Provozní doba</p>
              <p className="mt-1 text-neutral-600">Po–Pá: 7:00–15:00</p>
            </div>
          </div>

          <form className="rounded-[32px] border border-neutral-200 bg-white p-10 shadow-md">
            <div className="space-y-6">
              <div className="relative">
                <User
                  className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Jméno a příjmení *"
                  required
                  className="w-full rounded-xl border border-neutral-300 py-4 pl-12 pr-5 outline-none transition focus:border-[#8A6748] focus:ring-2 focus:ring-[#8A6748]/20"
                />
              </div>

              <div className="relative">
                <Phone
                  className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
                  size={18}
                />
                <input
                  type="tel"
                  placeholder="Telefon *"
                  required
                  className="w-full rounded-xl border border-neutral-300 py-4 pl-12 pr-5 outline-none transition focus:border-[#8A6748] focus:ring-2 focus:ring-[#8A6748]/20"
                />
              </div>

              <div className="relative">
                <Mail
                  className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="E-mail *"
                  required
                  className="w-full rounded-xl border border-neutral-300 py-4 pl-12 pr-5 outline-none transition focus:border-[#8A6748] focus:ring-2 focus:ring-[#8A6748]/20"
                />
              </div>

              <div className="relative">
                <MessageSquare
                  className="pointer-events-none absolute left-5 top-4 text-neutral-400"
                  size={18}
                />
                <textarea
                  rows={6}
                  placeholder="Popište váš projekt..."
                  className="w-full resize-none rounded-xl border border-neutral-300 py-4 pl-12 pr-5 outline-none transition focus:border-[#8A6748] focus:ring-2 focus:ring-[#8A6748]/20"
                />
              </div>
            </div>

            <div className="mt-8">
              <Button href="#" className="w-full justify-center">
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