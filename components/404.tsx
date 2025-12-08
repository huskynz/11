import Logo from './logo';

export function NotFound() {
    return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-4">
      <Logo w={250} h={250} />
  <h1 className="text-7xl md:text-9xl font-extrabold text-huskyBlue dark:text-huskyPink mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <a
        href="/"
        className="inline-block px-8 py-4 bg-huskyPurple text-white rounded-lg font-semibold shadow-lg hover:bg-huskyPink hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-huskyBlue dark:focus:ring-huskyPink"
      >
        Go Home
      </a>
    </div>
    );
}
