// components/ProgramTemplate.js
import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import { programs, programByKey } from '../pages/curriculum';

export default function ProgramTemplate({ programKey }) {
  const data = programByKey(programKey);
  
  // Find the next program for the button at the bottom
  const currentIndex = programs.findIndex(p => p.key === programKey);
  const nextProgram = programs[currentIndex + 1];

  if (!data) return <div className="p-20 text-center">Program data not found.</div>;

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen pb-20">
        {/* Hero Section */}
        <section className="py-16 text-center bg-white border-b">
          <h1 className={`text-4xl md:text-5xl font-extrabold ${data.highlightColor}`}>
            {data.title}
          </h1>
          <p className="text-xl text-gray-600 mt-2">{data.ageRange}</p>
        </section>

        {/* Monthly Grid */}
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.studies.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <span className={`font-bold text-xs uppercase tracking-widest ${data.badgeColor}`}>
                  {item.month}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.study}</h3>
                <div className="text-sm text-gray-600 space-y-3">
                  <p><strong>Focus:</strong> {item.focusQuestions[0]}</p>
                  <p className="text-gray-500 italic">{item.concepts.join(' • ')}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Program Button */}
          {nextProgram && (
            <div className="mt-16 text-center">
              <p className="text-gray-500 mb-4">Interested in the next age level?</p>
              <Link href={nextProgram.route} legacyBehavior>
                <a className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-700 transition">
                  Explore {nextProgram.title} →
                </a>
              </Link>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}