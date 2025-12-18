
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function YoungerPreschoolers() {
  return (
    <React.Fragment>
      <Header />
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-orange-600">Younger Preschoolers Curriculum</h1>
        <p className="text-gray-600 mb-6">
          Designed for children aged 18 months to 2½ years old. This program focuses on early development through play and exploration.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Develop fine and gross motor skills</li>
          <li>Encourage social interaction and sharing</li>
          <li>Introduce basic language and communication skills</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Sample Daily Schedule</h2>
        <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Time</th>
              <th className="border p-2">Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">8:00 AM</td><td className="border p-2">Arrival & Free Play</td></tr>
            <tr><td className="border p-2">9:00 AM</td><td className="border p-2">Circle Time & Songs</td></tr>
            <tr><td className="border p-2">10:00 AM</td><td className="border p-2">Snack & Story Time</td></tr>
            <tr><td className="border p-2">11:00 AM</td><td className="border p-2">Outdoor Play</td></tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mb-4">Sample Activities</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Finger painting and sensory play</li>
          <li>Building blocks and puzzles</li>
          <li>Music and movement games</li>
        </ul>

        <div className="text-center mt-8">
          <a href="/enroll" className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700">Enroll Now</a>
        </div>
      </section>
    </React.Fragment>
  );
}
