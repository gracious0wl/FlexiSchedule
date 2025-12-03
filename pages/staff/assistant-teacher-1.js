
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AssistantTeacher1() {
  return (
    <>
      <Header />

      {/* Profile Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded p-6 text-center">
          {/* Profile Image */}
          <img
            src="/images/assistant1.jpg"
            alt="Assistant Teacher"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">Taylor Smith</h1>
          <p className="text-green-600 font-medium mb-4">Assistant Teacher</p>

          {/* Bio */}
          <p className="text-gray-700 text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          {/* Contact Info */}
          <div className="space-y-2 text-gray-600">
            <p><strong>Email:</strong> taylor.smith@flexischedule.com</p>
            <p><strong>Phone:</strong> (555) 234-5678</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}