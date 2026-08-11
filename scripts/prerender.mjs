#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = dirname(__dirname)
const distDir = join(rootDir, 'dist')

const routes = [
  '/',
  '/forms',
  '/locations',
  '/schedule',
  '/crash-course',
  '/socials',
  '/gallery',
  '/wedding',
  '/privacy-policy',
  '/terms-of-service',
  '/forms/rumba',
  '/forms/cha-cha',
  '/forms/samba',
  '/forms/international-jive',
  '/forms/american-waltz',
  '/forms/viennese-waltz',
  '/forms/tango',
  '/forms/foxtrot',
  '/forms/salsa',
  '/forms/bachata',
  '/forms/social-jive',
  '/forms/quickstep',
  '/forms/paso-doble',
  '/forms/merengue',
  '/forms/kizomba',
]

async function generateRouteFiles() {
  try {
    const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf-8')

    console.log('Generating static route files...')

    for (const route of routes) {
      if (route === '/') continue

      const routePath = route.slice(1)
      const dirPath = join(distDir, routePath)
      const filePath = join(dirPath, 'index.html')

      mkdirSync(dirPath, { recursive: true })
      writeFileSync(filePath, indexHtml)

      console.log(`✓ Generated ${filePath}`)
    }

    console.log(`\n✅ Successfully generated ${routes.length - 1} route files`)
    console.log(`\nTotal files in dist/: ${routes.length} (1 root index.html + ${routes.length - 1} route directories)`)
  } catch (error) {
    console.error('Route generation failed:', error)
    process.exit(1)
  }
}

generateRouteFiles()
