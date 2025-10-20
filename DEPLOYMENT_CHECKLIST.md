# High West Landing Page - Deployment Checklist

## 📋 Pre-Deployment Checklist

### Content & Assets
- [ ] All High West product images added to `/public/images/`
- [ ] Product photos optimized (compressed, < 500KB each)
- [ ] High-res logo added
- [ ] Placeholder Unsplash images replaced with real photos
- [ ] All copy reviewed and approved
- [ ] Legal disclaimer text verified: "Sip Responsibly. ©2026 High West Distillery, Park City, UT."

### Functionality
- [ ] "Shop Now" buttons link to correct URLs
- [ ] All navigation links work correctly
- [ ] Smooth scrolling functioning on all sections
- [ ] Mobile menu opens/closes properly
- [ ] All animations smooth on various devices

### Responsiveness
- [ ] Test on iPhone (375px)
- [ ] Test on iPad (768px)
- [ ] Test on desktop (1440px+)
- [ ] Test on 4K display (2560px+)
- [ ] Horizontal scroll eliminated
- [ ] Text readable on all screen sizes

### Performance
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Images use Next.js Image component
- [ ] Lazy loading implemented
- [ ] No console errors or warnings
- [ ] Build completes without errors: `npm run build`

### SEO & Meta
- [ ] Page title set correctly
- [ ] Meta description compelling (< 160 chars)
- [ ] Open Graph tags configured
- [ ] Twitter card tags set
- [ ] Favicon added
- [ ] Alt text on all images

### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible
- [ ] Screen reader friendly
- [ ] No accessibility errors in Lighthouse

---

## 🚀 Deployment Steps

### 1. Final Build Test

```bash
# Clean install
rm -rf node_modules .next
npm install

# Build for production
npm run build

# Test production build locally
npm start
# Visit http://localhost:4000

# Check for errors in terminal
```

### 2. Git Commit & Push

```bash
# Check status
git status

# Add all changes
git add .

# Commit with meaningful message
git commit -m "feat: High West landing page ready for production"

# Push to main branch
git push origin main
```

### 3. Vercel Deployment

#### Option A: CLI (Recommended)
```bash
# Login to Vercel
vercel login

# Deploy to preview
vercel

# Review preview URL
# Test thoroughly

# Deploy to production
vercel --prod

# Save production URL
```

#### Option B: GitHub Integration
1. Visit [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Configure:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Click "Deploy"
5. Wait for deployment to complete

### 4. Post-Deployment Verification

- [ ] Visit production URL
- [ ] Test all interactive elements
- [ ] Check mobile view
- [ ] Verify images load correctly
- [ ] Test from different geographic locations
- [ ] Check page load speed (< 3 seconds)
- [ ] Verify analytics tracking (if implemented)

---

## 🔧 Vercel Configuration

### vercel.json (Optional)

Create `vercel.json` in root for custom configuration:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Environment Variables

If you need environment variables:

1. In Vercel Dashboard:
   - Project Settings → Environment Variables
   
2. Add variables:
   ```
   NEXT_PUBLIC_SHOP_URL=https://shop.highwest.com
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. Redeploy for changes to take effect

---

## 📊 Performance Optimization

### Image Optimization Checklist

```bash
# Install image optimization tool
npm install -g sharp-cli

# Optimize images
npx sharp -i public/images/original.jpg -o public/images/optimized.jpg --format webp --quality 85
```

### Code Splitting

Ensure heavy components are dynamically imported:

```typescript
// Example: Lazy load heavy animation
const HeavyAnimation = dynamic(
  () => import('@/components/HeavyAnimation'),
  { ssr: false }
);
```

### Caching Strategy

Vercel automatically handles caching, but verify:

1. **Static Assets**: Cached for 1 year
2. **HTML**: No caching (always fresh)
3. **API Routes**: Configure as needed

---

## 🎯 Domain Configuration

### Custom Domain Setup

1. In Vercel Dashboard:
   - Project → Settings → Domains
   
2. Add custom domain:
   - Enter: `highwest.whiskyadvocate.com` (or your domain)
   
3. Configure DNS:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   
4. Wait for DNS propagation (up to 48 hours)

5. Enable HTTPS (automatic via Let's Encrypt)

### DNS Configuration Example

```
Type: CNAME
Name: highwest (or @ for root domain)
Value: cname.vercel-dns.com
TTL: 3600
```

---

## 📈 Analytics Setup

### Vercel Analytics (Built-in)

```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics (Optional)

1. Create GA4 property
2. Get Measurement ID
3. Add to environment variables
4. Implement tracking code

---

## 🐛 Troubleshooting

### Common Issues & Solutions

**Build Fails on Vercel**
```bash
# Check Node.js version
# Add .nvmrc file
echo "18" > .nvmrc

# Ensure all dependencies in package.json
npm install
```

**Images Not Loading**
- Check file paths (case-sensitive!)
- Verify images in `/public/images/`
- Check Next.js Image configuration

**Slow Performance**
- Run Lighthouse audit
- Optimize images (use WebP format)
- Enable compression in Vercel
- Implement code splitting

**Hydration Errors**
- Check for mismatched HTML
- Ensure client/server render same content
- Use `'use client'` directive correctly

---

## 🔒 Security Checklist

- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Security headers configured
- [ ] No sensitive data in frontend code
- [ ] Environment variables properly set
- [ ] Dependencies updated to latest versions
- [ ] No exposed API keys or secrets

---

## 📝 Launch Day Checklist

### Morning Of
- [ ] Final content review
- [ ] Test all links one more time
- [ ] Verify mobile experience
- [ ] Check analytics are tracking
- [ ] Screenshot key pages for records

### Go Live
- [ ] Deploy to production via Vercel
- [ ] Monitor deployment logs
- [ ] Test production URL immediately
- [ ] Share URL with team for testing

### Post-Launch (First Hour)
- [ ] Monitor analytics for traffic
- [ ] Check for any errors in Vercel logs
- [ ] Test from multiple devices
- [ ] Verify all CTAs working
- [ ] Check page load times

### Post-Launch (First Week)
- [ ] Review analytics daily
- [ ] Monitor Core Web Vitals
- [ ] Collect user feedback
- [ ] Address any reported issues
- [ ] Plan for iterations

---

## 📧 Stakeholder Communication

### Pre-Launch Email Template

```
Subject: High West Landing Page - Ready for Review

Team,

The High West landing page is deployed to staging and ready for final review:

Preview URL: [your-vercel-preview-url]

Please review:
✓ Content accuracy
✓ Mobile experience
✓ All links functional
✓ Brand colors & imagery

Feedback deadline: [Date]
Planned launch: [Date]

Thanks!
```

### Launch Announcement

```
Subject: 🥃 High West Landing Page - LIVE

Team,

The High West landing page is now live!

🔗 URL: [production-url]

Key features:
• Smooth scroll animations
• Mobile-optimized design
• Fast load times (< 2s)
• Award-winning product showcase

Please share and provide feedback.

Cheers! 🥃
```

---

## 🎉 Success Metrics

Track these KPIs post-launch:

1. **Performance**
   - Page load time < 3 seconds
   - Lighthouse score > 90
   - Core Web Vitals in green

2. **Engagement**
   - Bounce rate < 40%
   - Average session > 2 minutes
   - CTA click-through rate

3. **Technical**
   - Zero 404 errors
   - Zero console errors
   - Uptime 99.9%

---

**Last Updated**: Before deployment
**Deployment Date**: _____________
**Production URL**: _____________
**Team Members**: _____________
