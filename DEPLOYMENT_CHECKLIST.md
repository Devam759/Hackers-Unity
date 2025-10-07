# Deployment Checklist

Use this checklist before deploying Hacker's Unity to production.

## Pre-Deployment

### Content & Assets
- [ ] Replace placeholder favicon with actual logo
- [ ] Create and add Open Graph image (1200x630px)
- [ ] Update all Discord/GitHub/social media links
- [ ] Review and customize all text content
- [ ] Add real event data or remove demo events
- [ ] Add real project data or remove demo projects
- [ ] Add event and project images (if applicable)

### Configuration
- [ ] Update site URL in metadata (`app/layout.tsx`)
- [ ] Update sitemap URLs (`app/sitemap.ts`)
- [ ] Update robots.txt domain (`app/robots.ts`)
- [ ] Configure newsletter API integration
- [ ] Add environment variables to Vercel
- [ ] Update contact email addresses

### Code Quality
- [ ] Run `npm run lint` and fix any errors
- [ ] Run `npm run build` successfully
- [ ] Test production build locally (`npm run start`)
- [ ] Remove any console.logs
- [ ] Remove any TODO comments

## Testing

### Functionality
- [ ] Test all navigation links
- [ ] Test mobile menu open/close
- [ ] Test theme toggle (light/dark)
- [ ] Test newsletter signup form
- [ ] Test all CTA buttons
- [ ] Test smooth scrolling to sections

### Responsive Design
- [ ] Test on mobile phone (< 640px)
- [ ] Test on tablet (640px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Test on ultra-wide screens (> 1920px)
- [ ] Test landscape orientation on mobile
- [ ] Check for horizontal scroll issues

### Browsers
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Test on mobile Safari (iOS)
- [ ] Test on Chrome Mobile (Android)

### Accessibility
- [ ] Test keyboard navigation (Tab, Enter, Esc)
- [ ] Test skip-to-content link
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Check color contrast (use browser DevTools)
- [ ] Verify all images have alt text
- [ ] Check focus visible states

### Performance
- [ ] Run Lighthouse audit (aim for 90+ in all categories)
- [ ] Check First Contentful Paint (< 1.8s)
- [ ] Check Largest Contentful Paint (< 2.5s)
- [ ] Check Time to Interactive (< 3.8s)
- [ ] Test on slow 3G network
- [ ] Verify images are optimized

### SEO
- [ ] Verify page title and description
- [ ] Check Open Graph tags
- [ ] Check Twitter Card tags
- [ ] Verify sitemap is accessible
- [ ] Verify robots.txt is accessible
- [ ] Test social media preview (LinkedIn, Twitter, Discord)

## Vercel Deployment

### Setup
- [ ] Create Vercel account (if needed)
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Login to Vercel: `vercel login`

### Deploy
- [ ] Run `vercel` for preview deployment
- [ ] Test preview deployment thoroughly
- [ ] Run `vercel --prod` for production
- [ ] Or push to GitHub and import to Vercel dashboard

### Post-Deployment
- [ ] Configure custom domain (if applicable)
- [ ] Set up SSL certificate (automatic with Vercel)
- [ ] Add environment variables in Vercel dashboard
- [ ] Enable Vercel Analytics (optional)
- [ ] Set up deployment notifications (optional)

## Post-Launch

### Monitoring
- [ ] Add Google Analytics or alternative
- [ ] Set up error tracking (Sentry, LogRocket, etc.)
- [ ] Monitor Core Web Vitals
- [ ] Set up uptime monitoring
- [ ] Monitor newsletter signups

### Marketing
- [ ] Submit to Google Search Console
- [ ] Submit sitemap to search engines
- [ ] Share on social media
- [ ] Announce in Discord community
- [ ] Add to community website directories

### Maintenance
- [ ] Set up regular dependency updates
- [ ] Monitor security alerts
- [ ] Plan content update schedule
- [ ] Gather user feedback
- [ ] Create backlog for improvements

## Environment Variables (if needed)

Add these in Vercel dashboard under Settings > Environment Variables:

```env
# Newsletter Integration (choose one)
SENDGRID_API_KEY=your_key
# or
MAILCHIMP_API_KEY=your_key
MAILCHIMP_AUDIENCE_ID=your_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://hackersunity.dev

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Common Issues & Solutions

### Issue: Fonts not loading
**Solution**: Verify Next.js font optimization is working, check network tab

### Issue: Images not optimizing
**Solution**: Ensure using next/image component, check image domains in next.config.mjs

### Issue: Dark mode flashing
**Solution**: ThemeProvider prevents flash, ensure it's wrapping app correctly

### Issue: Mobile menu not working
**Solution**: Check Headless UI Dialog is imported correctly, verify event handlers

### Issue: Animations not playing
**Solution**: Verify Framer Motion is installed, check component is client component

## Final Checklist

- [ ] All tests passing
- [ ] All links working
- [ ] All forms working
- [ ] Responsive on all devices
- [ ] Accessible to all users
- [ ] Fast load times
- [ ] SEO optimized
- [ ] Analytics configured
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Team notified of launch

## Launch! 🚀

Once all items are checked:

1. Deploy to production: `vercel --prod`
2. Verify production site
3. Monitor for issues
4. Celebrate! 🎉

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Community Discord: https://discord.gg/hackersunity

