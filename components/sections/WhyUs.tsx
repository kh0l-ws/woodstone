import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

import {
  BadgeCheck,
  HardHat,
  Trees,
  Truck,
  Clock3,
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
      
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <FadeIn delay={index * 0.08}>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 transition group-hover:bg-amber-700">
                  <Icon
                    className="text-amber-700 group-hover:text-white"
                    size={30}
                  />
                </div></FadeIn>
                <FadeIn delay={index * 0.08}>
                <h3 className="mb-3 text-2xl font-bold">
                  {item.title}
                </h3>
                </FadeIn>
                <FadeIn delay={index * 0.08}>
                <p className="text-neutral-600 leading-7">
                  {item.text}
                </p>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}