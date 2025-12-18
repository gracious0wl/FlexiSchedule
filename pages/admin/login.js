// pages/admin/login.js
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else router.push('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Portal</h1>
        <input type="email" placeholder="Admin Email" onChange={e => setEmail(e.target.value)} className="w-full border p-2 mb-4 rounded" />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className="w-full border p-2 mb-6 rounded" />
        <button className="w-full bg-green-600 text-white py-2 rounded font-bold hover:bg-green-700">Login</button>
      </form>
    </div>
  );
}