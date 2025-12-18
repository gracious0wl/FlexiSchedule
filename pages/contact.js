import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [today, setToday] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Date Function: Sets date on page load
  useEffect(() => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setToday(date);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-10 bg-white shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Inquiry Sent!</h2>
          <p className="text-gray-600 mb-6">Thank you. We will contact you at the email provided.</p>
          <Link href="/" className="text-blue-600 underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white border-b py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold">FlexiSchedule</div>
        <Link href="/" className="text-blue-600">Home</Link>
      </nav>

      <main className="max-w-xl mx-auto py-12 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
          <p className="text-sm text-gray-500 mb-6">Today's Date: {today}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" required placeholder="John Doe" className="w-full p-2 border rounded mt-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" required placeholder="john@example.com" className="w-full p-2 border rounded mt-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" required placeholder="555-0123" className="w-full p-2 border rounded mt-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea required placeholder="How can we help?" className="w-full p-2 border rounded mt-1 h-32"></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
              Submit Inquiry
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}