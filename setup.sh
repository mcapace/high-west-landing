#!/bin/bash

# High West Landing Page - Quick Setup Script
# Run this script to set up your project quickly

set -e  # Exit on error

echo "🥃 High West Landing Page Setup"
echo "================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js version $(node -v) detected"

# Check if npm is available
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_success "npm version $(npm -v) detected"

# Install dependencies
print_status "Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Create public/images directory
print_status "Creating public/images directory..."
mkdir -p public/images

# Create .env.local file
print_status "Creating environment file..."
cat > .env.local << EOF
# High West Landing Page Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:4000
NEXT_PUBLIC_SHOP_URL=https://shop.highwest.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_VERCEL_URL=
EOF

print_success "Environment file created"

# Create .gitignore additions
print_status "Updating .gitignore..."
cat >> .gitignore << EOF

# High West specific
.env.local
.env.production.local
.env.development.local
public/images/*.jpg
public/images/*.jpeg
public/images/*.png
public/images/*.webp
*.log
.DS_Store
EOF

print_success ".gitignore updated"

# Create README.md
print_status "Creating README.md..."
cat > README.md << 'EOF'
# High West Landing Page

A premium landing page for High West Distillery built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
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
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main landing page
├── public/
│   └── images/              # Product images
├── tailwind.config.ts       # Tailwind configuration
├── package.json             # Dependencies
└── setup.sh                 # Setup script
```

## 🎨 Brand Colors

- **Dark Teal**: #0A4250
- **Gold**: #B8722D
- **Cream**: #E8E8E4
- **Light Gold**: #D4A574
- **Dark Gold**: #8B5A2B

## 🛠️ Development

The project uses:
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Accessibility compliant
- ✅ TypeScript support

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📸 Adding Images

1. Add your High West product images to `public/images/`
2. Update image paths in `app/page.tsx`
3. Replace Unsplash URLs with your actual images

## 🔧 Customization

- Update brand colors in `tailwind.config.ts`
- Modify content in `app/page.tsx`
- Add new sections as needed
- Customize animations in Framer Motion components

## 📞 Support

For questions or support, contact the development team.

---

**Built with ❤️ for High West Distillery**
EOF

print_success "README.md created"

# Create deployment checklist
print_status "Creating deployment checklist..."
cat > DEPLOYMENT_CHECKLIST.md << 'EOF'
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
```

### 2. Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Review preview URL
# Test thoroughly

# Deploy to production
vercel --prod
```

## 📊 Performance Optimization

### Image Optimization
```bash
# Install image optimization tool
npm install -g sharp-cli

# Optimize images
npx sharp -i public/images/original.jpg -o public/images/optimized.jpg --format webp --quality 85
```

## 🎯 Domain Configuration

### Custom Domain Setup
1. In Vercel Dashboard: Project → Settings → Domains
2. Add custom domain: `highwest.whiskyadvocate.com`
3. Configure DNS: Add CNAME record pointing to `cname.vercel-dns.com`
4. Wait for DNS propagation (up to 48 hours)
5. Enable HTTPS (automatic via Let's Encrypt)

---

**Last Updated**: $(date)
**Deployment Date**: _____________
**Production URL**: _____________
EOF

print_success "Deployment checklist created"

# Create vercel.json for deployment configuration
print_status "Creating Vercel configuration..."
cat > vercel.json << 'EOF'
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
EOF

print_success "Vercel configuration created"

# Create .nvmrc for Node.js version
print_status "Creating Node.js version file..."
echo "18" > .nvmrc
print_success "Node.js version file created"

# Run type check
print_status "Running TypeScript type check..."
npm run type-check

if [ $? -eq 0 ]; then
    print_success "TypeScript type check passed"
else
    print_warning "TypeScript type check failed - please review any errors"
fi

# Run linting
print_status "Running ESLint..."
npm run lint

if [ $? -eq 0 ]; then
    print_success "ESLint passed"
else
    print_warning "ESLint found issues - run 'npm run lint:fix' to auto-fix"
fi

echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "Next steps:"
echo "1. Add your High West product images to public/images/"
echo "2. Update image paths in app/page.tsx"
echo "3. Test locally: npm run dev"
echo "4. Deploy to Vercel: vercel"
echo ""
echo "Development server will run on: http://localhost:4000"
echo ""
echo "📚 Documentation:"
echo "- README.md - Project overview and setup"
echo "- DEPLOYMENT_CHECKLIST.md - Deployment guide"
echo ""
echo "Happy coding! 🥃"
