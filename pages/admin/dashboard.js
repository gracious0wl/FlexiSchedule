import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AdminDashboard() {
  const [pendingApps, setPendingApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch only "Pending" applications (US-07)
  const fetchPending = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('enrollments')
      .select('*')
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (!error) setPendingApps(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPending();
  }, []);

  // 2. Generate temporary secure links for documents (US-04)
  const viewDocument = async (path) => {
    if (!path) return alert("No document uploaded.");
    
    const { data, error } = await supabase.storage
      .from('enrollment-docs')
      .createSignedUrl(path, 60); // Link expires in 60 seconds

    if (error) {
      alert("Error accessing secure file.");
    } else {
      window.open(data.signedUrl, '_blank');
    }
  };

  // 3. The Approval Workflow (US-07 & US-11)
  const handleApprove = async (app) => {
    const confirmApprove = confirm(`Approve ${app.child_name}? This will reduce classroom inventory.`);
    if (!confirmApprove) return;

    try {
      // Step A: Update Status in Database
      const { error: statusError } = await supabase
        .from('enrollments')
        .update({ status: 'approved' })
        .eq('id', app.id);

      if (statusError) throw statusError;

      // Step B: Deduct from Inventory (US-11)
      const { error: invError } = await supabase.rpc('decrement_program_spots', { 
        program_id: app.program_id 
      });

      if (invError) console.warn("Inventory update failed, but status was changed.");

      alert("Application Approved!");
      fetchPending(); // Refresh list to remove the processed item
    } catch (err) {
      alert("Error during approval process.");
    }
  };

  // 4. Rejection Workflow
  const handleReject = async (id) => {
    if (!confirm("Are you sure you want to reject this application?")) return;
    
    const { error } = await supabase
      .from('enrollments')
      .update({ status: 'rejected' })
      .eq('id', id);

    if (!error) fetchPending();
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Enrollment Queue</h1>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-bold">
              {pendingApps.length} Pending
            </span>
          </div>

          {loading ? (
            <div className="text-center py-20">Loading applications...</div>
          ) : pendingApps.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-xl shadow">
              <p className="text-gray-500">Your queue is empty! All applications have been processed.</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="p-4 text-sm font-bold text-gray-600">Child / Program</th>
                    <th className="p-4 text-sm font-bold text-gray-600">Parent Info</th>
                    <th className="p-4 text-sm font-bold text-gray-600">Documents (US-04)</th>
                    <th className="p-4 text-sm font-bold text-gray-600 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingApps.map((app) => (
                    <tr key={app.id} className="border-b hover:bg-gray-50 transition">
                      <td className="p-4">
                        <div className="font-bold text-gray-900">{app.child_name}</div>
                        <div className="text-xs text-gray-500 uppercase">{app.program_interest || 'General'}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-700">{app.parent_name}</div>
                        <div className="text-sm text-blue-600">{app.parent_email}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button 
                            onClick={() => viewDocument(app.birth_certificate_path)}
                            className="text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded border"
                          >
                            📄 Birth Cert
                          </button>
                          <button 
                            onClick={() => viewDocument(app.health_record_path)}
                            className="text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded border"
                          >
                            🏥 Health Rec
                          </button>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={() => handleApprove(app)}
                            className="bg-green-600 text-white px-4 py-2 rounded text-sm font-bold hover:bg-green-700"
                          >
                            Approve
                          </button>
                          <button 
                            onClick={() => handleReject(app.id)}
                            className="bg-white text-red-600 border border-red-600 px-4 py-2 rounded text-sm font-bold hover:bg-red-50"
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}