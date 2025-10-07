# Hacker's Unity — Developer Community Homepage

A modern, responsive, and accessible homepage for India's leading developer community. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA attributes
- **Smooth Animations**: Framer Motion for engaging user experience
- **SEO Optimized**: Meta tags, Open Graph, sitemap, and robots.txt
- **Dark Mode**: System-aware theme with manual toggle
- **Performance**: Optimized images with next/image, server components
- **Interactive Components**: Mobile menu, newsletter signup, event carousel

## 📦 What's Inside

```
├── app/
│   ├── api/
│   │   └── newsletter/       # Newsletter subscription API route
│   ├── layout.tsx            # Root layout with metadata and fonts
│   ├── page.tsx              # Homepage composition
│   ├── globals.css           # Global styles and Tailwind directives
│   ├── sitemap.ts            # Dynamic sitemap generation
│   └── robots.ts             # Robots.txt configuration
├── components/
│   ├── NavBar.tsx            # Sticky navbar with mobile menu
│   ├── Hero.tsx              # Hero section with CTAs
│   ├── Features.tsx          # Community features grid
│   ├── StatsStrip.tsx        # Animated statistics
│   ├── EventsCarousel.tsx    # Upcoming events showcase
│   ├── ProjectsGrid.tsx      # Community projects grid
│   ├── CallToAction.tsx      # Join community CTA section
│   ├── Footer.tsx            # Footer with newsletter signup
│   └── ThemeProvider.tsx     # Dark mode provider
├── data/
│   ├── events.json           # Demo events data
│   └── projects.json         # Demo projects data
└── public/                   # Static assets
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hackers-unity.git
   cd hackers-unity
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment to Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/hackers-unity)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### GitHub Integration

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure build settings
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    500: '#0ea5a4', // Main teal color
    // ... other shades
  },
  accent: {
    700: '#7c3aed', // Main purple color
    // ... other shades
  },
}
```

### Content

- **Events**: Edit `data/events.json`
- **Projects**: Edit `data/projects.json`
- **Hero Text**: Edit `components/Hero.tsx`
- **Features**: Edit `components/Features.tsx`

### Metadata & SEO

Update `app/layout.tsx` for site-wide metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ... other metadata
}
```

## 📝 Environment Variables

For production newsletter integration, create a `.env.local` file:

```env
# Example for SendGrid
SENDGRID_API_KEY=your_api_key

# Example for Mailchimp
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_AUDIENCE_ID=your_audience_id
```

Then update `app/api/newsletter/route.ts` with your email service provider integration.

## 🧪 Testing

### Run Linter
```bash
npm run lint
```

### Build for Production
```bash
npm run build
```

### Test Production Build Locally
```bash
npm run build && npm run start
```

## 📊 Performance

The site is optimized for excellent performance:

- ✅ Server Components for static content
- ✅ Image optimization with next/image
- ✅ Automatic code splitting
- ✅ Font optimization with next/font/google
- ✅ Minimal client-side JavaScript

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Headless UI](https://headlessui.com/)
- **Icons**: [Heroicons](https://heroicons.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

- Discord: [Join our community](https://discord.gg/hackersunity)
- Email: hello@hackersunity.dev
- Twitter: [@hackersunity](https://twitter.com/hackersunity)

## 🎯 Roadmap

- [ ] Blog section with MDX support
- [ ] Member directory and profiles
- [ ] Event registration system
- [ ] Project submission portal
- [ ] Community dashboard
- [ ] Internationalization (i18n)

---

Built with ❤️ by the Hacker's Unity community

