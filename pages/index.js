import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProgramCard from '../components/ProgramCard';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection
        title="Welcome to FlexiSchedule"
        subtitle="Your flexible scheduling solution for education programs"
        buttonText="Learn More"
      />

      {/* Programs */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <ProgramCard title="Pre-K" description="Building strong foundations for lifelong learning." />
          <ProgramCard title="Kindergarten" description="Encouraging creativity and curiosity." />
          <ProgramCard title="After School" description="Fun and educational activities after class." />
        </div>
      </section>

      {/* Meet Our Staff */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          <Link href="/staff">Meet Our Staff</Link>
        </h2>
      </section>

      <Footer />
    </>
  );
}
