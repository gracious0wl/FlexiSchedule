import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EnrollmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enrollmentDate, setEnrollmentDate] = useState('');
  
  useEffect(() => {
    const date = new Date().toISOString().split('T')[0];
    setEnrollmentDate(date);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Application Received!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying. Our Ridgefield administration will review your child's records and contact you shortly.
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Student Enrollment</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* 1. Updated Program Selection Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">Step 1: Select Desired Program</h2>
            <div className="grid grid-cols-1 gap-4">
              
              {/* Younger Preschoolers */}
              <label className="border rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:bg-blue-50 transition border-blue-100">
                <input type="radio" name="program" value="younger-preschool" required className="w-4 h-4 text-blue-600" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-bold text-gray-900">Younger Preschoolers</p>
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Ridgefield Only</span>
                  </div>
                  <p className="text-sm text-gray-500">18 months to 2½ years old</p>
                </div>
              </label>

              {/* Preschool */}
              <label className="border rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:bg-blue-50 transition">
                <input type="radio" name="program" value="preschool" className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="font-bold text-gray-900">Preschool</p>
                  <p className="text-sm text-gray-500">3½ to 4½ years old | Full & Part Time</p>
                </div>
              </label>

              {/* Pre-Kindergarten */}
              <label className="border rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:bg-blue-50 transition">
                <input type="radio" name="program" value="pre-k" className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="font-bold text-gray-900">Pre-Kindergarten</p>
                  <p className="text-sm text-gray-500">4 to 5 years old | Full Time Only</p>
                </div>
              </label>

              {/* Kindergarten */}
              <label className="border rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:bg-blue-50 transition">
                <input type="radio" name="program" value="kindergarten" className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="font-bold text-gray-900">Kindergarten</p>
                  <p className="text-sm text-gray-500">5 to 6 years old | Full Time Only</p>
                </div>
              </label>

            </div>
          </div>

          {/* 2. Timing & Child Info (Grouped for Scannability) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Desired Start Date</label>
              <input type="date" value={enrollmentDate} onChange={(e) => setEnrollmentDate(e.target.value)} required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Child's Birthday</label>
              <input type="date" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-semibold text-gray-700">Child's Full Name</label>
            <input type="text" required placeholder="Full Name" className="w-full p-3 border rounded-lg" />
          </div>

          {/* 3. Guardian & Documents (US-04) */}
          <div className="space-y-4 pt-4 border-t">
            <h2 className="text-lg font-semibold text-gray-800">Guardian Contact & Records</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" required placeholder="Email Address" className="w-full p-3 border rounded-lg" />
              <input type="tel" required placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-3 border rounded-lg bg-gray-50">
                <label className="block text-xs font-bold text-gray-500 mb-2">BIRTH CERTIFICATE</label>
                <input type="file" required className="text-xs" />
              </div>
              <div className="p-3 border rounded-lg bg-gray-50">
                <label className="block text-xs font-bold text-gray-500 mb-2">HEALTH RECORDS</label>
                <input type="file" required className="text-xs" />
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 shadow-lg transition-all transform hover:-translate-y-1">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}