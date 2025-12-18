
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Careers() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-green-100 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Careers</h1>
        <p className="text-lg">Join our team and make a difference in early childhood education.</p>
      </section>

      {/* Careers Content */}
      <section className="p-6 max-w-4xl mx-auto space-y-8 text-gray-700">
        <p>
          At FlexiSchedule, we believe in creating a nurturing environment not only for children but also for our staff.
          We are always looking for passionate educators and support staff to join our growing team.
        </p>

        <h2 className="text-2xl font-bold mb-2">Current Openings</h2>
        <ul className="list-disc pl-6">
          <li>Lead Teacher – Full Time</li>
          <li>Assistant Teacher – Part Time</li>
          <li>Program Coordinator – Full Time</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Apply Now</h2>
        <form className="bg-white shadow-md rounded p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div>
            <label htmlFor="resume" className="block text-gray-700 font-semibold mb-2">Upload Resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Cover Letter</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 w-full"
          >
            Submit Application
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
}
