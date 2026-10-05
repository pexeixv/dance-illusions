import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'
import {
  DEFAULT_OG_IMAGE,
  RouteSeo,
  SITE_NAME,
  SITE_URL,
  staticRoutesSeo,
} from './src/seo.config.ts'
import { danceForms } from './src/data/data.ts'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function ensureAbsoluteUrl(url?: string): string | undefined {
  if (!url) return undefined
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  const base = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL
  const path = url.startsWith('/') ? url : `/${url}`
  return `${base}${path}`
}

function transformHygraphOgImage(
  src: string,
  width = 1200,
  height = 630,
  quality = 75
): string {
  try {
    const url = new URL(src)
    if (!/(^|\.)graphassets\.com$/.test(url.hostname)) return src
    const segments = url.pathname.split('/').filter(Boolean)
    if (segments.some((s) => s.includes('='))) return src
    const handle = segments.pop()
    if (!handle) return src
    url.pathname =
      '/' +
      [
        ...segments,
        `resize=width:${width},height:${height},fit:crop`,
        `quality=value:${quality}`,
        'output=format:jpg',
        handle,
      ].join('/')
    return url.toString()
  } catch {
    return src
  }
}

function cleanTemplateHead(html: string): string {
  return html
    .replace(/<title[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\s+name=["']description["'][\s\S]*?>/gi, '')
    .replace(/<meta\s+name=["']robots["'][\s\S]*?>/gi, '')
    .replace(/<link\s+rel=["']canonical["'][\s\S]*?>/gi, '')
    .replace(/<meta\s+property=["']og:[^"']+["'][\s\S]*?>/gi, '')
    .replace(/<meta\s+name=["']twitter:[^"']+["'][\s\S]*?>/gi, '')
    .replace(/<!--\s*(Canonical|Open Graph|Twitter Card)\s*fallback\s*-->/gi, '')
    .replace(/(\r?\n\s*){3,}/g, '\n\n')
}

function generateSeoTags(routePath: string, seo: RouteSeo): string {
  const fullTitle = seo.title.includes(SITE_NAME) ? seo.title : `${seo.title} | ${SITE_NAME}`
  const canonicalUrl =
    ensureAbsoluteUrl(seo.canonical) ||
    `${SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL}${routePath === '/' ? '/' : routePath}`
  const absoluteOgImage = ensureAbsoluteUrl(seo.ogImage)

  const tags: string[] = [
    `  <title>${escapeHtml(fullTitle)}</title>`,
    `  <meta name="description" content="${escapeHtml(seo.description)}" />`,
    seo.noIndex
      ? `  <meta name="robots" content="noindex, nofollow" />`
      : `  <meta name="robots" content="index, follow" />`,
    `  <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `  <!-- Open Graph -->`,
    `  <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `  <meta property="og:title" content="${escapeHtml(fullTitle)}" />`,
    `  <meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `  <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `  <meta property="og:type" content="${seo.ogType || 'website'}" />`,
  ]

  if (absoluteOgImage) {
    tags.push(
      `  <meta property="og:image" content="${escapeHtml(absoluteOgImage)}" />`,
      `  <meta property="og:image:width" content="1200" />`,
      `  <meta property="og:image:height" content="630" />`,
      `  <meta property="og:locale" content="en_IN" />`
    )
  }

  tags.push(
    `  <!-- Twitter Card -->`,
    `  <meta name="twitter:card" content="summary_large_image" />`,
    `  <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`,
    `  <meta name="twitter:description" content="${escapeHtml(seo.description)}" />`
  )

  if (absoluteOgImage) {
    tags.push(`  <meta name="twitter:image" content="${escapeHtml(absoluteOgImage)}" />`)
  }

  return tags.join('\n')
}

export function seoPlugin(): Plugin {
  return {
    name: 'vite-plugin-per-route-seo',
    apply: 'build',
    async closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist')
      const indexHtmlPath = path.resolve(distDir, 'index.html')

      if (!fs.existsSync(indexHtmlPath)) {
        console.warn('[vite-plugin-seo] dist/index.html not found, skipping SEO generation.')
        return
      }

      const templateHtml = fs.readFileSync(indexHtmlPath, 'utf-8')
      const cleanedTemplate = cleanTemplateHead(templateHtml)

      // Initialize route SEO map with static routes
      const seoMap: Record<string, RouteSeo> = { ...staticRoutesSeo }

      // Generate SEO entries for local dynamic dance form routes (/forms/:slug)
      for (const dance of danceForms) {
        const routePath = `/forms/${dance.slug}`
        const ogImg = dance.image
          ? dance.image.startsWith('http')
            ? dance.image
            : `${SITE_URL}${dance.image.startsWith('/') ? '' : '/'}${dance.image}`
          : DEFAULT_OG_IMAGE

        seoMap[routePath] = {
          title: `${dance.title} Dance Classes in Goa | Learn ${dance.title}`,
          description: `Learn ${dance.title} at Dance Illusions Goa. ${
            dance.description ||
            'Expert-led classes for all levels in Margao, Vasco and Panjim. Professional instructors, flexible schedules.'
          }`,
          canonical: `${SITE_URL}${routePath}`,
          ogImage: ogImg,
        }
      }

      // Attempt build-time fetch for Hygraph CMS blog posts if endpoint is reachable
      const hygraphEndpoint =
        process.env.VITE_HYGRAPH_ENDPOINT ||
        'https://ap-south-1.cdn.hygraph.com/content/cmuv1k7800xn206wcfvc98h4f/master'

      if (hygraphEndpoint) {
        try {
          const controller = new AbortController()
          const timeoutId = setTimeout(() => controller.abort(), 3000)

          const res = await fetch(hygraphEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              query: `
                query AllPostSlugsBuild {
                  posts(first: 100, orderBy: date_DESC) {
                    slug
                    title
                    excerpt
                    coverImage {
                      url
                    }
                  }
                }
              `,
            }),
            signal: controller.signal,
          })
          clearTimeout(timeoutId)

          if (res.ok) {
            const data = (await res.json()) as {
              data?: {
                posts?: Array<{
                  slug: string
                  title: string
                  excerpt: string | null
                  coverImage: { url: string } | null
                }>
              }
            }

            const posts = data.data?.posts || []
            for (const post of posts) {
              const postPath = `/blog/${post.slug}`
              seoMap[postPath] = {
                title: `${post.title} | ${SITE_NAME}`,
                description:
                  post.excerpt || `${post.title} - read more on the Dance Illusions Goa blog.`,
                canonical: `${SITE_URL}${postPath}`,
                ogImage: post.coverImage?.url
                  ? transformHygraphOgImage(post.coverImage.url, 1200, 630, 75)
                  : DEFAULT_OG_IMAGE,
                ogType: 'article',
              }
            }

            const postsPerPage = 9
            const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage))
            for (let p = 2; p <= totalPages; p++) {
              const pagePath = `/blog/page/${p}`
              seoMap[pagePath] = {
                title: `Dance Blog Goa - Page ${p} | ${SITE_NAME}`,
                description: `Dance tips, event updates and stories from Dance Illusions Goa (Page ${p}).`,
                canonical: `${SITE_URL}${pagePath}`,
                ogImage: DEFAULT_OG_IMAGE,
              }
            }
            console.log(
              `[vite-plugin-seo] Fetched ${posts.length} blog posts from Hygraph for static HTML generation.`
            )
          }
        } catch {
          console.log(
            `[vite-plugin-seo] Note: Hygraph CMS was not reachable during build. Static HTML generated for ${
              Object.keys(seoMap).length
            } static and local dynamic routes.`
          )
        }
      }

      // Write static HTML files for every route in seoMap
      let generatedCount = 0
      for (const [routePath, routeSeo] of Object.entries(seoMap)) {
        const seoTags = generateSeoTags(routePath, routeSeo)
        const finalHtml = cleanedTemplate.replace('</head>', `${seoTags}\n</head>`)

        let targetPath: string
        if (routePath === '/') {
          targetPath = indexHtmlPath
        } else {
          const subDir = routePath.replace(/^\//, '')
          targetPath = path.resolve(distDir, subDir, 'index.html')
        }

        fs.mkdirSync(path.dirname(targetPath), { recursive: true })
        fs.writeFileSync(targetPath, finalHtml, 'utf-8')
        generatedCount++
      }

      console.log(`[vite-plugin-seo] Successfully generated ${generatedCount} route-specific static HTML files!`)
    },
  }
}

export default seoPlugin
