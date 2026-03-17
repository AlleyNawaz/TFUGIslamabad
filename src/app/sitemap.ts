import { MetadataRoute } from 'next';
import { programs } from '@/data/programs';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.tfugislamabad.tech';

    // Static routes
    const staticRoutes = [
        '',
        '/programs', // Campaigns
        '/speakers',
        '/sessions',
        '/articles',
        '/about',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic routes for programs (Campaigns)
    const programRoutes = programs.map((program) => ({
        url: `${baseUrl}/programs/${program.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...programRoutes];
}
