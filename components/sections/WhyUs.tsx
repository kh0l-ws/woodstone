import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

import {
  HardHat,
  Trees,
  Truck,
  Clock3,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: HardHat,
    title: "25 let zkušeností",
    text: "Desítky let zkušeností ve stavebnictví.",
  },
  {
    icon: Truck,
    title: "Vlastní technika",
    text: "Disponujeme vlastní mechanizací i dopravou.",
  },
  {
    icon: Trees,
    title: "Kvalitní materiály",
    text: "Používáme pouze ověřené materiály.",
  },
  {
    icon: Clock3,
    title: "Dodržujeme termíny",
    text: "Zakázky předáváme v domluveném termínu.",
  },
  {
    icon: BadgeCheck,
    title: "Precizní práce",
    text: "Dbáme na každý detail realizace.",
  },
  {
    icon: ShieldCheck,
    title: "Záruka kvality",
    text: "Ručíme za kvalitu odvedené práce.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <SectionTitle
          eyebrow="Proč právě my"
          title="Spolehlivý partner pro vaši stavbu"
          description="Každý projekt realizujeme s důrazem na kvalitu, komunikaci a dlouhodobou spokojenost zákazníka."
        />

        <div className="grid gap-16 lg:grid-cols-2 items-center mt-18">
          {/* Fotka */}
          <FadeIn>
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/why-us.jpg"
                alt="Realizace stavby Wood&Stone"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </FadeIn>

          {/* Checklist */}
          <div className="flex flex-col divide-y divide-neutral-200">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <div className="flex gap-5 py-8 first:pt-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                      <Icon className="text-amber-700" size={22} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 leading-4">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}