import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-green-100 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">Childcare Center in Fort Lee, New Jersey</p>
      </section>

      {/* Intro Quote */}
      <section className="bg-green-50 p-6 text-center max-w-4xl mx-auto my-8 rounded shadow">
        <p className="text-xl italic font-semibold">
          Welcome to FlexiSchedule Preschool and Kindergarten – “A place for growing and learning.”
        </p>
      </section>

      {/* Classroom Image Section */}
      <section className="max-w-4xl mx-auto my-8">
        <img
          src="/images/classroom.jpg"
          alt="Classroom environment"
          className="rounded shadow-md w-full object-cover"
        />
        <p className="mt-4 text-gray-700">
          Our bright and welcoming classrooms are child-friendly, creating an ideal environment for learning and growth.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto my-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img src="/images/gallery1.jpg" alt="Activity 1" className="rounded shadow-md object-cover w-full h-64" />
        </div>
      </section>

      <section className="p-6 max-w-4xl mx-auto space-y-8 text-gray-700">
        {/* Who We Are */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
          <p>
            At FlexiSchedule Preschool and Kindergarten, we strive to create a safe and nurturing environment
            where children can grow academically, socially, and emotionally. Our programs are designed to
            support early childhood development and prepare children for lifelong learning.
          </p>
        </div>

        {/* Our Philosophy */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Our Philosophy</h2>
          <p>
            We believe in the importance of respecting each child’s individuality and providing opportunities
            for exploration and creativity. Our goal is to foster independence, confidence, and a love for learning.
          </p>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Core Values</h2>
          <ul className="list-disc pl-6">
            <li>Encouraging social and emotional growth</li>
            <li>Promoting academic readiness</li>
            <li>Building strong family partnerships</li>
          </ul>
        </div>

        {/* Educational Philosophy */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Educational Philosophy</h2>
          <p>
            Our curriculum is designed to balance structured learning with creative play. We emphasize hands-on
            activities, problem-solving, and collaborative learning to help children develop critical thinking skills.
          </p>
        </div>

        {/* Mission Statement */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Mission Statement</h2>
          <p>
            FlexiSchedule is committed to supporting young children and their families by providing high-quality
            education and care. We aim to create a positive and inclusive environment where every child can thrive.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
