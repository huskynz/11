import { notFound } from "next/navigation";
import Link from "next/link";
import { getPrivateDocBySlug, getAllPrivateDocs } from "@/lib/private-docs";
import { remark } from "remark";
import html from "remark-html";
import PrivateDocContent from "@/components/PrivateDocContent";

export async function generateStaticParams() {
  const docs = getAllPrivateDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export default async function PrivateDocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getPrivateDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const contentHtml = await markdownToHtml(doc.content);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/private-docs"
          className="text-huskyBlue dark:text-huskyPink hover:underline inline-block"
        >
          ← Back to Private Documents
        </Link>
      </div>
      <PrivateDocContent
        slug={slug}
        title={doc.title}
        date={doc.date}
        tags={doc.tags}
        contentHtml={contentHtml}
      />
    </div>
  );
}
