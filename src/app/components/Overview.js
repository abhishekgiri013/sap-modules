export default function Overview({ title, description }) {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4">{description}</p>
    </section>
  );
}
