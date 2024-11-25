export default function ProjectsList() {
    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
            <div className="rounded-lg shadow-none p-4 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
  
  <img className="w-full h-48 object-cover mb-4 rounded-lg" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format" alt="Basic Card"/>
  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Getting Started with Development</h3>
  <p className="mt-2 text-gray-600 dark:text-gray-300">Learn the fundamentals of modern web development with our comprehensive guide...</p>
</div>
        </div>
    );
}