
// pages/index.js
import Link from 'next/link';

export default function Home() {
  // You can add/edit cards here without touching JSX structure.
  const cards = [
    {
      href: '/preschool',
      title: 'Preschool',
      titleClass: 'text-yellow-600',
      note: 'Ridgefield Location Only',
      noteClass: 'text-orange-500',
      description:
        'Explore our preschool program designed to nurture early learners.',
    },
    {
      href: '/elementary',
      title: 'Elementary',
      titleClass: 'text-blue-600',
      note: 'Open at all locations',
      noteClass: 'text-gray-600',
      description:
        'Discover our elementary curriculum focused on core skills and growth.',
    },
    {
      href: '/middle-school',
      title: 'Middle School',
      titleClass: 'text-indigo-600',
      note: 'New curriculum available',
      noteClass: 'text-gray-600',
      description:
        'Engaging courses that bridge foundational learning with advanced topics.',
    },
    {
      href: '/high-school',
      title: 'High School',
      titleClass: 'text-red-600',
      note: 'Applications open',
      noteClass: 'text-gray-600',
      description:
        'College-prep tracks and electives tailored to student interests.',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page header */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Programs & Admissions
        </h1>
        <p className="mt-3 text-gray-700">
          Choose a program to learn more and begin your application.
        </p>
      </section>

      {/* Cards grid */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <Link key={card.href} href={card.href}>
              {/* In the Pages Router, wrapping an <a> inside Link is the most compatible approach across Next versions */}
              <a className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer block">
                <h3
                  className={`text-xl font-bold mb-2 ${card.titleClass}`}
                >
                  {card.title}
                </h3>
                {card.note && (
                  <p className={`${card.noteClass} text-sm mb-4`}>
                    {card.note}
                  </p>
                )}
                <p className="text-gray-700">{card.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}