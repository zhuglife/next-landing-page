const features = [
  { title: "Fast", desc: "Optimized for speed and performance" },
  { title: "Modern Design", desc: "Clean and aesthetic UI/UX" },
  { title: "SEO-Friendly", desc: "Helps you get found" },
];

export default function Features() {
  return (
    <section className="py-12 px-4" id="features">
      <h2 className="text-2xl font-bold mb-8 text-center">Features</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-6 w-full max-w-xs text-center"
          >
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
