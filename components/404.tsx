
import Link from "next/link";
import Logo from './logo';

export function NotFound() {
    return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-4">
      <Logo />
  <h1 className="text-7xl md:text-9xl font-extrabold text-huskyBlue dark:text-huskyPink mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
  className="inline-block px-8 py-4 bg-huskyPurple text-white rounded-lg font-semibold hover:bg-huskyPink transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        Go back home
      </Link>
    </div>
    );
}