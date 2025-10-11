import packageJson from '../package.json';

export default function Footer() {
  return (
    <footer className="w-full mt-auto py-6  text-sm text-gray-500 dark:text-gray-400 backdrop-blur-sm">
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
            <a 
            href="https://github.com/huskynz/11/blob/master/LICENSE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-huskyPurple dark:hover:text-huskyPink transition-colors"
          >
              &copy; {new Date().getFullYear()} HuskyNZ. Licensed under the MIT open source license
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
