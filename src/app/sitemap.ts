import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // with dynamic data, we can fetch and return all links inside a page for each objecyt.
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/activities`,
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/certifications`,
      priority: 0.9,
    },
  ];
}
