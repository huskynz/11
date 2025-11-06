import fs from "fs";
import path from "path";
import matter from "gray-matter";

const privateDocsDirectory = path.join(process.cwd(), "content/private-docs");

export interface PrivateDoc {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  pin: string;
  draft?: boolean;
  content: string;
}

export function getAllPrivateDocs(): Omit<PrivateDoc, "content" | "pin">[] {
  if (!fs.existsSync(privateDocsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(privateDocsDirectory);
  const allDocsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(privateDocsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        summary: data.summary,
        date: data.date,
        tags: data.tags || [],
        draft: data.draft || false,
      };
    })
    .filter((doc) => !doc.draft)
    .sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return 1;
      } else {
        return -1;
      }
    });

  return allDocsData;
}

export function getPrivateDocBySlug(slug: string): PrivateDoc | null {
  if (!fs.existsSync(privateDocsDirectory)) {
    return null;
  }

  try {
    const fullPath = path.join(privateDocsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      summary: data.summary,
      date: data.date,
      tags: data.tags || [],
      pin: data.pin || "",
      draft: data.draft || false,
      content,
    };
  } catch {
    return null;
  }
}

export function verifyPin(slug: string, pin: string): boolean {
  const doc = getPrivateDocBySlug(slug);
  if (!doc) {
    return false;
  }
  return doc.pin === pin;
}
