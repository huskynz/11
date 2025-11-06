import Link from "next/link";
import { getAllPrivateDocs } from "@/lib/private-docs";

export default function PrivateDocsPage() {
  const docs = getAllPrivateDocs();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link
            href="/"
            className="text-huskyBlue dark:text-huskyPink hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Private Documents
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            These documents are protected. You&apos;ll need a 6-digit PIN to access
            them.
          </p>
        </div>

        {docs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No private documents available yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/private-docs/${doc.slug}`}
                className="block p-6 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-all relative"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {doc.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {doc.summary}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        {new Date(doc.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      {doc.tags.length > 0 && (
                        <div className="flex gap-2">
                          {doc.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-huskyPurple dark:bg-huskyPink text-white text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
