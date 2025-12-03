export default function HeroSection({ title, subtitle, buttonText }) {
  return (
    <section className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center text-white py-24 text-center">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg inline-block">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-6">{subtitle}</p>
        <button className="bg-accent text-black px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition">
          {buttonText}
        </button>
      </div>
    </section>
  );
}