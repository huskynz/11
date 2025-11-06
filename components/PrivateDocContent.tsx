"use client";

import { useState, useEffect } from "react";
import PinInput from "@/components/PinInput";

interface PrivateDocContentProps {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  contentHtml: string;
}

export default function PrivateDocContent({
  slug,
  title,
  date,
  tags,
  contentHtml,
}: PrivateDocContentProps) {
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if PIN was already verified in this session
    const verified = sessionStorage.getItem(`private-doc-${slug}`);
    if (verified === "true") {
      setIsVerified(true);
    }
  }, [slug]);

  const handleVerify = async (pin: string, turnstileToken: string) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/verify-pin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug, pin, turnstileToken }),
      });

      const data = await response.json();

      if (data.verified) {
        sessionStorage.setItem(`private-doc-${slug}`, "true");
        setIsVerified(true);
      } else {
        setError(data.error || "Invalid PIN. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isVerified) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <svg
            className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4"
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            This document is protected
          </p>
        </div>
        <PinInput onVerify={handleVerify} error={error} loading={loading} />
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {tags.length > 0 && (
            <div className="flex gap-2">
              {tags.map((tag) => (
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
      </header>

      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
