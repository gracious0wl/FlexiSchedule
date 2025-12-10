
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Calendars() {
  return ( 
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-green-100 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Calendars</h1>
        <p className="text-lg">Stay up-to-date with our school events and schedules.</p>
      </section>

      {/* Calendar Content */}
      <section className="p-6 max-w-4xl mx-auto space-y-8 text-gray-700">
        <p>
          Here you can find important dates, holidays, and upcoming events for FlexiSchedule programs.
        </p>

        <h2 className="text-2xl font-bold mb-4">School Year Calendar</h2>
        <div className="w-full h-96">
          <iframe
            title="School Year Calendar"
            src="https://calendar.google.com/calendar/embed?src=your-calendar-link"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-gray-600 mt-4">
          For more details or to sync with your personal calendar, please contact us at <strong>info@flexischedule.com</strong>.
        </p>
      </section>

      <Footer />
    </>
  );
}