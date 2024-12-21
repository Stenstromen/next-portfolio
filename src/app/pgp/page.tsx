'use client';

import { useState, useEffect } from 'react';

export default function PGP() {
  const [pgp, setPgp] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pgp);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const fetchPGP = async () => {
    try {
      const res = await fetch(
        'https://keys.openpgp.org/vks/v1/by-email/info@stenstromen.se'
      );
      const data = await res.text();
      setPgp(data);
    } catch (error) {
      console.error('Error fetching PGP key:', error);
    }
  };

  useEffect(() => {
    fetchPGP();
  }, []);

  return (
    <div className="min-h-screen bg-[#4f5d75] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-black">
              info@stenstromen.se PGP Public Key
            </h1>
            <pre className="bg-black p-4 rounded-lg overflow-x-auto mb-4 text-sm">
              {pgp || 'Loading PGP key...'}
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#f686bd] text-black px-4 py-2 rounded hover:bg-[#f686bd]/90 transition-colors"
            >
              Copy to clipboard
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        <div className="fixed bottom-4 left-4">
          <div
            className={`bg-black rounded-lg shadow-lg p-4 transition-opacity duration-200 ${
              showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            PGP Public Key copied to clipboard!
          </div>
        </div>
      </div>
    </div>
  );
} 