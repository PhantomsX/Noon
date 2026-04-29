import { NextResponse } from "next/server";
import { readdir } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const PROJECTS_ROOT = path.join(process.cwd(), "public", "projects");
const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".avif",
  ".svg",
]);

type ProjectPayload = {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  type: string;
  image: string;
  images: string[];
  client: string;
  designedBy: string;
  statusDate: string;
  location: string;
  scope: string;
};


const toSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const toTitle = (value: string) =>
  value
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const toPublicPath = (absolutePath: string) => {
  const relative = path.relative(path.join(process.cwd(), "public"), absolutePath);
  return `/${relative.split(path.sep).join("/")}`;
};

const isImageFile = (fileName: string) =>
  IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase());

async function getProjectImagesFromDir(dirPath: string): Promise<string[]> {
  const files = await readdir(dirPath, { withFileTypes: true });

  return files
    .filter((entry) => entry.isFile() && isImageFile(entry.name))
    .map((entry) => path.join(dirPath, entry.name))
    .sort((a, b) => a.localeCompare(b))
    .map(toPublicPath);
}

export async function GET() {
  try {
    const categories = await readdir(PROJECTS_ROOT, { withFileTypes: true });
    const projects: ProjectPayload[] = [];

    for (const categoryEntry of categories) {
      if (!categoryEntry.isDirectory()) continue;

      const categoryLabel = categoryEntry.name.trim();
      const category = toSlug(categoryLabel);
      const categoryPath = path.join(PROJECTS_ROOT, categoryEntry.name);
      const entries = await readdir(categoryPath, { withFileTypes: true });

      for (const entry of entries) {
        if (entry.isDirectory()) {
          const projectTitle = toTitle(entry.name);
          const projectSlug = toSlug(projectTitle);
          const projectImages = await getProjectImagesFromDir(
            path.join(categoryPath, entry.name),
          );

          if (projectImages.length === 0) continue;

          projects.push({
            id: `${category}-${projectSlug}`,
            title: projectTitle,
            category,
            categoryLabel,
            type: category,
            image: projectImages[0],
            images: projectImages,
            client: "",
            designedBy: "",
            statusDate: "",
            location: "",
            scope: "",
          });
        } else if (entry.isFile() && isImageFile(entry.name)) {
          const projectTitle = toTitle(entry.name);
          const projectSlug = toSlug(projectTitle);
          const imagePath = toPublicPath(path.join(categoryPath, entry.name));

          projects.push({
            id: `${category}-${projectSlug}`,
            title: projectTitle,
            category,
            categoryLabel,
            type: category,
            image: imagePath,
            images: [imagePath],
            client: "",
            designedBy: "",
            statusDate: "",
            location: "",
            scope: "",
          });
        }
      }
    }

    return NextResponse.json({ projects });
  } catch {
    return NextResponse.json(
      { projects: [], error: "Failed to load projects" },
      { status: 500 },
    );
  }
}
