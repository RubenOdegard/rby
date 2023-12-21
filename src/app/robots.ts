import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // can import data here if needed
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // disallow can be used to refuse crawling on certain pages.
        // disallow: [""]
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
