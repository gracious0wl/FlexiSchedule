import Link from 'next/link';
import { programs } from './curriculum'; // Keeps your centralized array data intact

export default function Programs() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
        <p className="text-gray-600 mb-8">
          Discover the many benefits that our programs can offer to you and your child.
        </p>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {programs.map((program) => (
            /* FIX: Route directly to the root file paths (e.g., /younger-preschoolers) */
            <Link key={program.key} href={program.route} passHref>
              <a className="block bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition text-left h-full flex flex-col justify-between decoration-none no-underline">
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${program.highlightColor || 'text-blue-600'}`}>
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{program.ageRange}</p>
                </div>
                
                {program.notes?.locationNote && (
                  <p className="text-orange-500 text-sm mt-2 font-medium">
                    {program.notes.locationNote}
                  </p>
                )}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}