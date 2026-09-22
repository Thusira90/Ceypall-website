import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'Google-Extended',
    'GoogleOther',
    'PerplexityBot',
    'Perplexity-User',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'Applebot',
    'Applebot-Extended',
    'Bytespider',
    'CCBot',
    'DuckAssistBot',
    'Meta-ExternalAgent',
    'Amazonbot',
    'YouBot',
    'cohere-ai',
    'MistralAI-User',
  ]

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: '/api/',
      })),
    ],
    sitemap: 'https://www.ceypall.com/sitemap.xml',
    host: 'https://www.ceypall.com',
  }
}
