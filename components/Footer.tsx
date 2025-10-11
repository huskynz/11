import packageJson from '../package.json';

export default function Footer() {
  return (
    <footer className="w-full mt-auto py-6 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
      <div className="relative">
        {/* Version number absolutely positioned to the left */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <a 
            href="https://github.com/huskynz/11" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-huskyPurple dark:hover:text-huskyPink transition-colors"
          >
            v{packageJson.version}
          </a>
        </div>
        
        {/* Center content */}
        <div className="text-center">
          <div className="mb-1">
            <a href="https://legal.husky.nz/toc" className="hover:underline mx-2">Terms</a>|
            <a href="https://legal.husky.nz/Privacy-Policy" className="hover:underline mx-2">Privacy</a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} HuskyNZ. Licensed under the MIT open source license
          </div>
        </div>
      </div>
    </footer>
  );
}
