# Quick Deployment Guide

## One-Line Deploy Commands

### Netlify

```bash
npm run build && netlify deploy --prod --dir=dist
```

### Vercel

```bash
npm run build && vercel --prod
```

### Cloudflare Pages

```bash
npm run build && wrangler pages deploy dist
```

### GitHub Pages (with Actions)

Push code with GitHub Actions configured to run `npm run build` and deploy `dist/` branch.

### Docker (for any host)

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## Testing Before Deploy

```bash
# Build locally
npm run build

# Preview production build locally
npm run preview

# Open browser and test:
# - http://localhost:4173/ (home)
# - http://localhost:4173/forms
# - http://localhost:4173/forms/tango
# - http://localhost:4173/privacy-policy

# Clean and rebuild to test from scratch
npm run clean && npm run build
```

---

## Deployment Checklist

- [ ] Ran `npm run build` successfully
- [ ] All 26 routes generated in `/dist`
- [ ] Tested with `npm run preview`
- [ ] Verified all routes are accessible
- [ ] Verified links between pages work
- [ ] Verified animations and interactions work
- [ ] Verified legal pages render correctly
- [ ] Check lighthouse score: `npm run preview` then audit
- [ ] Deploy to production
- [ ] Test live site all routes
- [ ] Monitor browser console for errors
- [ ] Check Google Search Console for crawl errors

---

## Monitoring After Deploy

### Check Site is Live

```bash
curl -I https://danceillusions.in/
curl -I https://danceillusions.in/forms/tango/
```

### Monitor Errors

- Check CDN error logs
- Monitor browser console (DevTools)
- Set up Google Search Console monitoring
- Set up Sentry or similar error tracking

### Performance Monitoring

- Use Google Pagespeed Insights
- Use WebPageTest
- Monitor Core Web Vitals in Google Analytics

---

## Rollback

If issues occur after deploy:

```bash
# Revert to previous deployment via CDN/host admin panel
# Or redeploy previous build:
git checkout HEAD~1
npm run build
netlify deploy --prod --dir=dist
```

---

## Common Issues & Fixes

### "404 on route /forms/tango"

→ Ensure static host is configured for SPA fallback to index.html

### "Meta tags are not route-specific"

→ This is normal! They are set dynamically after React loads. Check in DevTools after page loads.

### "Styles missing"

→ Check that dist/index.html has the CSS link tag pointing to correct asset hash

### "Navigation doesn't work"

→ Ensure React Router is hydrating correctly (check browser console)

---

## Questions?

Refer to `SSG_MIGRATION.md` for full documentation.
