type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="mb-3 uppercase tracking-[5px] text-amber-700 font-semibold">
        {eyebrow}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {title}
      </h2>

      {description && (
        <p className="text-lg text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}