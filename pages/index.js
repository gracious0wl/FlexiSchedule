import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Professional Navigation Bar */}
      <h1 className="text-2xl font-bold"> Welcome to FlexiSchedule</h1>
      <nav className="bg-white border-b border-gray-200 py-4 px-8 flex justify-between items-center shadow-sm">

        <ul className="flex list-none gap-8 m-0 p-0 items-center">
          <li>
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/programs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Programs
            </Link>
          </li>
          <li>
            <Link href="/careers" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Careers
            </Link>
            <li>
            <Link href="/enrollment" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Enroll Now
            </Link>
          </li>
          </li>
        </ul>
      </nav>

      {/* 3. Main Body Content (Hero Section) */}
      <main className="flex flex-col items-center justify-center pt-20 px-6 text-center">
        
      <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Flexible Scheduling for Modern Families
        </h2>
        <div className="flex gap-4">
          <Link href="/contact" className="px-8 py-4 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50">
            Contact Support
          </Link>
        </div>
      </main>
    </div>
  );
}