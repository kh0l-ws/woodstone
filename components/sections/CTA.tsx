import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function CTA() {
  return (
    <section className="bg-[#2A2A2A] py-18">
      <Container>
        <FadeIn delay={0}>
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 uppercase tracking-[5px] text-[#A27B5C]">
            Pojďme spolupracovat
          </p>

          <h2 className="text-5xl font-bold leading-tight text-white md:text-6xl">
            Máte projekt?
            <br />
            Proměníme vaši představu ve skutečnost.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
            Ať už plánujete stavbu domu, pergolu, rekonstrukci nebo
            zemní práce, rádi si s vámi nezávazně sedneme a navrhneme
            nejlepší řešení.
          </p>

    

        </div>  
        </FadeIn>
      </Container>
    </section>
  );
}