
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-green-100 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">Preschool &amp; Kindergarten in New Jersey</p>
      </section>

      {/* Intro Text */}
      <section className="p-6 max-w-4xl mx-auto text-gray-700 mb-8">
        <p>
          At FlexiSchedule Preschool and Kindergarten, we are always happy to hear from you. Please send us a message with your inquiries.
          We will get back to you right away.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded p-6 mb-12">
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          {/* Child's Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-gray-700 font-semibold mb-2">
              Child's Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Question / Comment */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Question / Comment
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 w-full"
          >
            Submit
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
}