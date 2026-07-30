import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";
import FadeIn from "@/components/ui/FadeIn";

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-white"
    >
      <Container>
        <SectionTitle
          eyebrow="Naše služby"
          title="Komplexní služby pro váš projekt"
          description="Od prvního návrhu až po předání hotové stavby."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:border-amber-700 hover:shadow-2xl"
              ><FadeIn delay={index * 0.08}>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 transition group-hover:bg-amber-700">
                  <Icon
                    size={30}
                    className="text-amber-700 group-hover:text-white"
                  />
                </div></FadeIn>
<FadeIn delay={index * 0.08}>
                <h3 className="mb-4 text-2xl font-bold">
                  {service.title}
                </h3>
</FadeIn>
<FadeIn delay={index * 0.08}>
                <p className="leading-7 text-neutral-600">
                  {service.description}
                </p>
</FadeIn>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}