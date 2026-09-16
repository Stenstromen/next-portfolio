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
    <div className="min-h-screen bg-canvas page-grid py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="surface-card rounded-2xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="section-kicker mb-3">Public key</p>
            <h1 className="text-2xl font-semibold mb-4 text-ink tracking-tight">
              info@stenstromen.se PGP Public Key
            </h1>
            <pre className="bg-canvas border border-line p-4 rounded-xl overflow-x-auto mb-4 text-sm text-ink font-mono">
              {pgp || 'Loading PGP key...'}
            </pre>
            <button
              onClick={handleCopy}
              className="bg-accent text-canvas px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              Copy to clipboard
            </button>
          </div>
        </div>

        <div className="fixed bottom-4 left-4">
          <div
            className={`bg-surface border border-line rounded-lg shadow-lg p-4 transition-opacity duration-200 ${
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
