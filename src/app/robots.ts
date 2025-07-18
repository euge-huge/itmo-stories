import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/stories/create'],
      },
    ],
    sitemap: 'https://chatcore.online/sitemap.xml',
  };
}
