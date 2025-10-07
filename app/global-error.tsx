'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-black text-white">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <h1 className="text-6xl font-bold text-primary-400 mb-4">Error</h1>
            <h2 className="text-2xl font-semibold mb-4">
              Application Error
            </h2>
            <p className="text-gray-400 mb-8">
              A critical error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
