import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";
import Counter from "@/components/ui/Counter";

const stats = [
  {
    value: "25+",
    label: "let zkušeností",
  },
  {
    value: "700+",
    label: "realizací",
  },
  {
    value: "100 %",
    label: "individuální přístup",
  },
  {
    value: "Vlastní",
    label: "technika",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f7f7f5] py-28"
    >
      <Container>
        <SectionTitle
          eyebrow="O nás"
          title="Poctivé řemeslo. Moderní přístup."
          description="Wood&Stone spojuje zkušenosti, kvalitní materiály a vlastní techniku, díky čemuž realizujeme projekty od prvního výkopu až po poslední detail."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  <FadeIn delay={0}>
    <div className="rounded-3xl bg-white p-10 shadow-sm">
      <h3 className="text-5xl font-bold text-amber-700">
        <Counter end={25} suffix="+" />
      </h3>
      <p className="mt-4">let zkušeností</p>
    </div>
  </FadeIn>

  <FadeIn delay={0.1}>
    <div className="rounded-3xl bg-white p-10 shadow-sm">
      <h3 className="text-5xl font-bold text-amber-700">
        <Counter end={700} suffix="+" />
      </h3>
      <p className="mt-4">realizací</p>
    </div>
  </FadeIn>

  <FadeIn delay={0.2}>
    <div className="rounded-3xl bg-white p-10 shadow-sm">
      <h3 className="text-5xl font-bold text-amber-700">
        <Counter end={100} suffix=" %" />
      </h3>
      <p className="mt-4">spokojených zákazníků</p>
    </div>
  </FadeIn>

  <FadeIn delay={0.3}>
    <div className="rounded-3xl bg-white p-10 shadow-sm">
      <h3 className="text-5xl font-bold text-amber-700">
        24/7
      </h3>
      <p className="mt-4">podpora a komunikace</p>
    </div>
  </FadeIn>
</div>
      </Container>
    </section>
  );
}