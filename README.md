# High West Landing Page

A premium landing page for High West Distillery built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (runs on port 4000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
high-west-landing/
├── app/
│   ├── globals.css          # Global styles with custom animations
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main landing page component
├── public/
│   └── images/              # Product images (add your High West photos here)
├── tailwind.config.ts       # Tailwind configuration with brand colors
├── package.json             # Dependencies and scripts
├── setup.sh                 # Automated setup script
├── vercel.json              # Vercel deployment configuration
├── DEPLOYMENT_CHECKLIST.md  # Comprehensive deployment guide
└── README.md                # This file
```

## 🎨 Brand Colors

- **Dark Teal**: #0A4250 (Primary brand color)
- **Gold**: #B8722D (Accent color)
- **Cream**: #E8E8E4 (Background color)
- **Light Gold**: #D4A574 (Secondary accent)
- **Dark Gold**: #8B5A2B (Dark accent)

## 🛠️ Technology Stack

- **Next.js 14** with App Router for modern React development
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for utility-first styling with custom brand theme
- **Framer Motion** for smooth, professional animations
- **Lucide React** for beautiful, consistent icons
- **Vercel** for deployment and hosting

## 📱 Features

- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Smooth Animations** - Framer Motion for professional transitions
- ✅ **SEO Optimized** - Complete metadata, Open Graph, Twitter cards
- ✅ **Performance Optimized** - Next.js Image optimization, lazy loading
- ✅ **Accessibility Compliant** - WCAG AA standards, keyboard navigation
- ✅ **TypeScript Support** - Type safety throughout the codebase
- ✅ **Modern UI/UX** - Clean, premium design with High West branding

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Review preview URL and test thoroughly

# Deploy to production
vercel --prod
```

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📸 Adding Your Images

1. **Add High West Product Images**:
   ```bash
   # Copy your images to the project
   cp '/path/to/your/images'/*.{jpg,jpeg,png} ./public/images/
   ```

2. **Update Image Paths**:
   - Open `app/page.tsx`
   - Replace Unsplash URLs with your actual images
   - Example: `src="/images/rendezvous-rye.jpg"`

3. **Optimize Images** (Optional):
   ```bash
   # Install image optimization tool
   npm install -g sharp-cli
   
   # Optimize images for web
   npx sharp -i public/images/original.jpg -o public/images/optimized.jpg --format webp --quality 85
   ```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server (port 4000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # Run TypeScript type checking
npm run preview      # Build and preview production build
npm run clean        # Clean build artifacts
```

### Development Server

The development server runs on **port 4000** as configured in the project. Visit `http://localhost:4000` to see your site.

### Code Structure

- **`app/page.tsx`** - Main landing page with all sections
- **`app/layout.tsx`** - Root layout with SEO metadata
- **`app/globals.css`** - Global styles and custom animations
- **`tailwind.config.ts`** - Tailwind configuration with brand colors

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  'dark-teal': '#0A4250',    // Your primary color
  'gold': '#B8722D',         // Your accent color
  'cream': '#E8E8E4',        // Your background color
}
```

### Content Updates
- **Hero Section**: Update in the Hero section of `app/page.tsx`
- **Products**: Modify the products array in the Products section
- **Awards**: Update the awards array in the Awards section
- **Contact Info**: Update address and contact details in the Visit section

### Adding New Sections
1. Create new section in `app/page.tsx`
2. Add navigation link in the nav menu
3. Use Framer Motion for animations
4. Follow the existing design patterns

## 📊 Performance

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Optimization Features
- Next.js Image optimization
- Lazy loading for images
- Code splitting with dynamic imports
- Optimized fonts and assets
- Efficient animations with Framer Motion

## 🔍 SEO Features

- Complete meta tags and Open Graph data
- Structured data for better search results
- Optimized images with alt text
- Fast loading times
- Mobile-friendly design
- Semantic HTML structure

## 🛡️ Security

- Security headers configured
- No sensitive data in frontend code
- Environment variables for sensitive data
- HTTPS enabled (automatic on Vercel)
- Dependencies regularly updated

## 📱 Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Mobile Chrome (Android)

## 🎯 Analytics

### Vercel Analytics (Built-in)
```bash
npm install @vercel/analytics
```

### Google Analytics (Optional)
1. Create GA4 property
2. Get Measurement ID
3. Add to environment variables
4. Implement tracking code

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

**Images Not Loading**
- Check file paths (case-sensitive)
- Verify images in `/public/images/`
- Use Next.js Image component

**Performance Issues**
- Run Lighthouse audit
- Optimize images (use WebP format)
- Check for unused dependencies

**TypeScript Errors**
```bash
npm run type-check
```

## 📞 Support

For questions or support:
- Check the deployment checklist: `DEPLOYMENT_CHECKLIST.md`
- Review the setup script: `setup.sh`
- Check Vercel documentation for deployment issues

## 🎉 Launch Checklist

Before going live:
- [ ] All images added and optimized
- [ ] Content reviewed and approved
- [ ] Mobile testing completed
- [ ] Performance audit passed
- [ ] SEO metadata verified
- [ ] Analytics configured
- [ ] Domain configured
- [ ] SSL certificate active

## 📈 Post-Launch

### Monitoring
- Check Vercel Analytics for traffic
- Monitor Core Web Vitals
- Review user feedback
- Track conversion rates

### Maintenance
- Keep dependencies updated
- Monitor performance metrics
- Update content as needed
- Backup important data

---

**Built with ❤️ for High West Distillery**

*Crafting exceptional whiskey in the heart of Utah's Rocky Mountains.*