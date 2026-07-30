import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { gallery } from "@/data/gallery";
import FadeIn from "@/components/ui/FadeIn";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 bg-[#f7f7f5]"
    >
      <Container>
        <SectionTitle
          eyebrow="Realizace"
          title="Naše práce mluví za nás"
          description="Každý projekt je výsledkem precizní práce, kvalitních materiálů a zkušeností."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <FadeIn delay={index * 0.05}><div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div></FadeIn>

              <div className="p-8">
                <p className="text-sm uppercase tracking-[3px] text-amber-700">
                  {item.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}