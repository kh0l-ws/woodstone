"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { Phone, Mail, MapPin, User, MessageSquare, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#F5F2ED] py-28">
      <Container>
        <FadeIn delay={0}>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="uppercase tracking-[5px] text-[#8A6748]">Kontakt</p>
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

              <div className="mt-12 rounded-2xl border border-[#8A6748]/20 bg-white/50 p-6">
                <p className="font-semibold">Provozní doba</p>
                <p className="mt-1 text-neutral-600">Po–Pá: 7:00–15:00</p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[32px] border border-neutral-200 bg-white p-10 shadow-md"
            >
              <div className="space-y-6">
                <div className="relative">
                  <User
                    className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
                    size={18}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Popište váš projekt..."
                    className="w-full resize-none rounded-xl border border-neutral-300 py-4 pl-12 pr-5 outline-none transition focus:border-[#8A6748] focus:ring-2 focus:ring-[#8A6748]/20"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#A27B5C] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#8f6a4e] disabled:opacity-60"
                >
                  {status === "loading" && (
                    <Loader2 className="animate-spin" size={20} />
                  )}
                  {status === "loading" ? "Odesílám..." : "Odeslat nezávaznou poptávku"}
                </button>
              </div>

              {status === "success" && (
                <p className="mt-4 text-sm font-medium text-green-700">
                  Děkujeme, poptávka byla odeslána. Ozveme se vám co nejdříve.
                </p>
              )}

              {status === "error" && (
                <p className="mt-4 text-sm font-medium text-red-600">
                  Něco se nepovedlo. Zkuste to prosím znovu, nebo nám zavolejte.
                </p>
              )}

              <p className="mt-6 text-sm text-neutral-500">
                Odpovídáme zpravidla do 24 hodin.
              </p>
            </form>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}