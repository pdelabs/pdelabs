import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/seo'
import { CASE_STUDIES } from '@/sections/CaseStudy/constants'
import { BLOG_POSTS } from '@/sections/Blog/posts'

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()

    return [
        {
            url: `${SITE_URL}/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${SITE_URL}/ai`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/work`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        ...CASE_STUDIES.map((study) => ({
            url: `${SITE_URL}/work/${study.slug}`,
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.8,
        })),
        {
            url: `${SITE_URL}/contact`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        ...BLOG_POSTS.map((post) => ({
            url: `${SITE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'yearly' as const,
            priority: 0.6,
        })),
    ]
}
