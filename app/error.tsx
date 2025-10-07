'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary-400 mb-4">Oops!</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-400">
            We encountered an unexpected error. Don&apos;t worry, our team has been notified.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="block w-full px-6 py-3 border-2 border-gray-700 hover:border-primary-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all"
          >
            Go back home
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mt-8 p-4 bg-gray-900 rounded-lg text-left">
            <p className="text-xs font-mono text-red-400 break-words">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
