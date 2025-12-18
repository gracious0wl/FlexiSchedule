
import Link from 'next/link';

export default function Programs() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
        <p className="text-gray-600 mb-8">
          Discover the many benefits that our programs can offer to you and your child.
        </p>

{/* Program Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {/* Younger Preschoolers */}
  <Link href="/younger-preschoolers">
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
      <h3 className="text-xl font-bold text-orange-600 mb-2">Younger Preschoolers</h3>
      <p className="text-gray-600 mb-2">18 months to 2½ years old</p>
      <p className="text-orange-500 text-sm mb-4">Ridgefield Location Only</p> 
    </div>
  </Link>

  {/* Preschool */}
  <Link href="/preschool">
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
      <h3 className="text-xl font-bold text-yellow-600 mb-2">Preschool</h3>
      <p className="text-gray-600 mb-2">3½ to 4½ years old</p>
      <p className="text-yellow-500 text-sm mb-4">Full Time & Part Time Classes</p>
    </div>
  </Link>

  {/* Pre-Kindergarten */}
  <Link href="/pre-kindergarten">
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
      <h3 className="text-xl font-bold text-blue-600 mb-2">Pre-Kindergarten</h3>
      <p className="text-gray-600 mb-2">4 to 5 years old</p>
      <p className="text-blue-500 text-sm mb-4">Full Time Class Only</p> 
    </div>
  </Link>

  {/* Kindergarten */}
  <Link href="/kindergarten">
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
      <h3 className="text-xl font-bold text-purple-600 mb-2">Kindergarten</h3>
      <p className="text-gray-600 mb-2">5 to 6 years old</p>
      <p className="text-purple-500 text-sm mb-4">Full Time Class Only</p>
    </div>
  </Link>
</div>
          </div>
        </section>
      );
    }
