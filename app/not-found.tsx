import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-primary-400 via-accent-500 to-primary-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 text-sm">
          <Link
            href="#events"
            className="p-4 border border-gray-800 hover:border-primary-500 rounded-lg transition-colors text-gray-400 hover:text-white"
          >
            View Events
          </Link>
          <Link
            href="#sponsors"
            className="p-4 border border-gray-800 hover:border-primary-500 rounded-lg transition-colors text-gray-400 hover:text-white"
          >
            Our Sponsors
          </Link>
        </div>
      </div>
    </div>
  );
}
