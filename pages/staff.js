
// pages/staff.js
import Header from '../components/Header';
import Footer from '../components/Footer';

// One small reusable card component (NO default export here)
function StaffCard({ name, role, img, email, phone, bio }) {
  const src = img || '/images/image.png';
  return (
    <div className="bg-white shadow-md rounded p-6 text-center">
      <img
        src={src}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-green-600 font-medium mb-4">{role}</p>
      <p className="text-gray-700 text-lg mb-6">{bio}</p>
      <div className="space-y-2 text-gray-600">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
    </div>
  );
}


// ✅ Only ONE default export in this file
export default function StaffPage() {
  return (
    <>
      <Header />

      {/* Title */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold">Meet Our Staff</h1>
        <p className="text-gray-600 mt-2">Dedicated educators supporting every child.</p>
      </section>

      {/* Staff Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StaffCard
          name="Alex Johnson"
          role="Lead Teacher"
          img="/images/pfp.jpg"
          email="alex.johnson@flexischedule.com"
          phone="(555) 123-4567"
          bio="Experienced educator passionate about early childhood development."
        />
        <StaffCard
          name="Taylor Smith"
          role="Assistant Teacher"
          img="/images/pfp.jpg"
          email="taylor.smith@flexischedule.com"
          phone="(555) 234-5678"
          bio="Supports classroom activities and individualized learning."
        />
        <StaffCard
          name="Jordan Lee"
          role="Assistant Teacher"
          img="/images/pfp.jpg"
          email="jordan.lee@flexischedule.com"
          phone="(555) 345-6789"
          bio="Focused on social-emotional growth through play-based learning."
        />
      </section>

      <Footer />
    </>
  );
}
