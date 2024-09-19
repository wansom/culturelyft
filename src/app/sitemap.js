// app/sitemap.js
import {fetchBlogSlugs} from './lib/fetchPosts'

export default async function sitemap() {
  const slugs = await fetchBlogSlugs();
  const baseUrl = 'https://culturelyft.com';

  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          de: `${baseUrl}/de`,
        },
      },
    },
    {
      url: `${baseUrl}/corporate`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es/events`,
          de: `${baseUrl}/de/events`,
        },
      },
    },
    {
      url: `${baseUrl}/customersupport`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es/customersupport`,
          de: `${baseUrl}/de/customersupport`,
        },
      },
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/resources`,
          de: `${baseUrl}/resources`,
        },
      },
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/register`,
          de: `${baseUrl}/register`,
        },
      },
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/login`,
          de: `${baseUrl}/login`,
        },
      },
    },
    {
      url: `${baseUrl}/account`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/account`,
          de: `${baseUrl}/account`,
        },
      },
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/dashboard`,
          de: `${baseUrl}/dashboard`,
        },
      },
    },
    {
      url: `${baseUrl}/dashboard/chat`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/dashboard/chat`,
          de: `${baseUrl}/dashboard/chat`,
        },
      },
    },
  ];

  const blogRoutes = slugs.map(slug => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        es: `${baseUrl}/es/blogs/${slug}`,
        de: `${baseUrl}/de/blogs/${slug}`,
      },
    },
  }));

  const routes = [...staticRoutes, ...blogRoutes];

  return routes;
}
