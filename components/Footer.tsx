export default function Footer() {
  return (
    <footer className="w-full mt-auto py-6 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="mb-1">
        <a href="https://legal.husky.nz/toc" className="hover:underline mx-2">Terms</a>|
        <a href="https://legal.husky.nz/Privacy-Policy" className="hover:underline mx-2">Privacy</a>
      </div>
      <div>
        &copy; {new Date().getFullYear()} HuskyNZ. Licensed under the MIT open source license
      </div>
    </footer>
  );
}
