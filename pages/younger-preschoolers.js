// pages/younger-preschoolers.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import { programByKey } from './curriculum';

export default function YoungerPreschoolersPage() {
  // Use your helper function to get the specific data
  const data = programByKey('younger-preschoolers');

  if (!data) return <p>Program not found.</p>;

  return (
    <>
      <Header />
      
      <main className="bg-gray-50 min-h-screen pb-20">
        {/* Hero Section */}
        <section className={`py-16 text-center bg-white border-b`}>
          <h1 className={`text-4xl md:text-5xl font-extrabold ${data.highlightColor}`}>
            {data.title}
          </h1>
          <p className="text-xl text-gray-600 mt-4">{data.ageRange}</p>
          <div className="mt-4 flex flex-col items-center gap-2">
            <span className="text-sm font-medium bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
              {data.notes.locationNote}
            </span>
            <p className="text-sm text-gray-500 italic">{data.notes.availabilityNote}</p>
          </div>
        </section>

        {/* Monthly Studies Grid */}
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Curriculum Calendar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.studies.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-orange-600 uppercase tracking-widest text-sm">
                    {item.month}
                  </span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Study</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.study}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Focus Questions</h4>
                    <ul className="text-sm text-gray-600 list-disc ml-4 mt-1">
                      {item.focusQuestions.map((q, i) => <li key={i}>{q}</li>)}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Concepts</h4>
                    <p className="text-sm text-gray-700">{item.concepts.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}