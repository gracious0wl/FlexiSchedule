// pages/check-status.js
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CheckStatus() {
  const [email, setEmail] = useState('');
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setApplication(null);

    try {
      const { data, error: dbError } = await supabase
        .from('applications')
        .select('full_name, status, created_at')
        .eq('email', email.trim())
        .single(); // Get the most recent single application

      if (dbError) throw new Error('No application found with that email address.');
      setApplication(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper to style the status badges
  const getStatusStyle = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Check Enrollment Status</h1>
            <p className="text-gray-500 text-center mb-8 text-sm">Enter the email used during registration.</p>

            <form onSubmit={handleCheckStatus} className="space-y-4">
              <input
                type="email"
                placeholder="email@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400"
              >
                {loading ? 'Searching...' : 'Check Status'}
              </button>
            </form>

            {error && <p className="mt-6 text-red-600 text-center text-sm font-medium">{error}</p>}

            {application && (
              <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 animate-fade-in">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Application Found</h2>
                <div className="space-y-3">
                  <p className="text-gray-800"><strong>Parent:</strong> {application.full_name}</p>
                  <p className="text-gray-800"><strong>Submitted:</strong> {new Date(application.created_at).toLocaleDateString()}</p>
                  <div className="pt-2">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase border ${getStatusStyle(application.status)}`}>
                      {application.status}
                    </span>
                  </div>
                </div>
                
                {application.status === 'approved' && (
                  <p className="mt-4 text-sm text-green-700 italic">
                    Congratulations! Please check your email for the next steps regarding tuition and start dates.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}