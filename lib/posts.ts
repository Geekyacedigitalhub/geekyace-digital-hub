import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  read: string;
  cover?: string;
};
export type Post = PostMeta & { content: string };

const DIR = path.join(process.cwd(), "content/posts");

function ensureDir() {
  if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });
}

export function getAllPosts(): PostMeta[] {
  ensureDir();
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  const posts = files.map((f) => {
    const slug = f.replace(/\.(md|mdx)$/, "");
    const raw = fs.readFileSync(path.join(DIR, f), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: String(data.title ?? slug),
      excerpt: String(data.excerpt ?? ""),
      tag: String(data.tag ?? "Engineering"),
      date: String(data.date ?? ""),
      read: String(data.read ?? "5 min read"),
      cover: data.cover ? String(data.cover) : undefined,
    } as PostMeta;
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  ensureDir();
  for (const ext of ["md", "mdx"]) {
    const p = path.join(DIR, `${slug}.${ext}`);
    if (fs.existsSync(p)) {
      const raw = fs.readFileSync(p, "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        excerpt: String(data.excerpt ?? ""),
        tag: String(data.tag ?? "Engineering"),
        date: String(data.date ?? ""),
        read: String(data.read ?? "5 min read"),
        cover: data.cover ? String(data.cover) : undefined,
        content,
      };
    }
  }
  return null;
}

export function getAllSlugs(): string[] {
  ensureDir();
  return fs.readdirSync(DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}
