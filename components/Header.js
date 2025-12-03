
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-accent text-white p-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">FlexiSchedule</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/calendars">Calendars</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}