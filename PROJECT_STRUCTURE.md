# Project Structure Overview

## Directory Tree

```
Hackers-Unity/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 api/
│   │   └── 📁 newsletter/
│   │       └── route.ts             # Newsletter subscription API
│   ├── globals.css                  # Tailwind directives + custom styles
│   ├── layout.tsx                   # Root layout (metadata, fonts, theme)
│   ├── page.tsx                     # Homepage composition
│   ├── robots.ts                    # Robots.txt config
│   └── sitemap.ts                   # Sitemap generation
│
├── 📁 components/                   # React Components
│   ├── CallToAction.tsx             # Join community CTA banner
│   ├── EventsCarousel.tsx           # Upcoming events grid
│   ├── Features.tsx                 # Feature cards (4 items)
│   ├── Footer.tsx                   # Footer with newsletter & links
│   ├── Hero.tsx                     # Hero section with CTAs
│   ├── NavBar.tsx                   # Sticky nav with mobile menu
│   ├── ProjectsGrid.tsx             # Community projects showcase
│   ├── StatsStrip.tsx               # Animated statistics banner
│   └── ThemeProvider.tsx            # Dark mode context provider
│
├── 📁 data/                         # Demo Data (JSON)
│   ├── events.json                  # 6 sample events
│   └── projects.json                # 6 sample projects
│
├── 📁 public/                       # Static Assets
│   ├── apple-touch-icon.png         # Apple touch icon (placeholder)
│   ├── favicon.ico                  # Favicon (placeholder)
│   └── og-image.png                 # Open Graph image (placeholder)
│
├── 📄 Configuration Files
│   ├── .eslintrc.json               # ESLint config
│   ├── .gitignore                   # Git ignore rules
│   ├── .npmrc                       # NPM config
│   ├── next.config.mjs              # Next.js config
│   ├── package.json                 # Dependencies & scripts
│   ├── postcss.config.mjs           # PostCSS config
│   ├── tailwind.config.ts           # Tailwind custom theme
│   ├── tsconfig.json                # TypeScript config
│   └── vercel.json                  # Vercel deployment config
│
└── 📄 Documentation
    ├── CONTRIBUTING.md              # Contribution guidelines
    ├── DEPLOYMENT_CHECKLIST.md      # Pre-launch checklist
    ├── LICENSE                      # MIT License
    ├── PROJECT_STRUCTURE.md         # This file
    ├── PROJECT_SUMMARY.md           # Complete feature list
    ├── QUICKSTART.md                # 3-minute setup guide
    └── README.md                    # Main documentation
```

## Component Hierarchy

```
App Layout (layout.tsx)
└── ThemeProvider
    └── Page (page.tsx)
        ├── NavBar
        │   └── Headless UI Dialog (Mobile Menu)
        ├── Main Content
        │   ├── Hero
        │   │   └── Framer Motion Animations
        │   ├── Features
        │   │   └── 4 × Feature Cards
        │   ├── StatsStrip
        │   │   └── 4 × Animated Counters
        │   ├── EventsCarousel
        │   │   └── 6 × Event Cards
        │   ├── ProjectsGrid
        │   │   └── 6 × Project Cards
        │   └── CallToAction
        └── Footer
            └── Newsletter Form → API Route
```

## Data Flow

```
User Interaction
     ↓
Components (Client/Server)
     ↓
Data Sources
     ├── Static: events.json, projects.json
     ├── API: /api/newsletter
     └── Context: ThemeProvider (dark mode)
     ↓
Rendering
     ├── Server Components (static content)
     └── Client Components (interactive)
     ↓
User Interface
```

## Page Sections Flow

```
┌─────────────────────────────────────┐
│  NavBar (Sticky)                    │
│  - Logo, Links, CTA, Theme Toggle   │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Hero (Full Height)                 │
│  - Headline, Subhead, 2 CTAs        │
│  - Stats Preview (4 metrics)        │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Features (Grid)                    │
│  - 4 Feature Cards with Icons       │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  StatsStrip (Full Width Gradient)   │
│  - 4 Animated Counters              │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  EventsCarousel (Grid)              │
│  - 6 Event Cards                    │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  ProjectsGrid (Grid)                │
│  - 6 Project Cards                  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  CallToAction (Full Width Banner)   │
│  - Large CTA, Secondary CTA         │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Footer                             │
│  - Links, Social, Newsletter Form   │
└─────────────────────────────────────┘
```

## Key Files & Their Purpose

### Core App Files
- **app/layout.tsx**: Global layout, metadata, fonts, theme setup
- **app/page.tsx**: Homepage that composes all components
- **app/globals.css**: Tailwind + custom utility classes

### Navigation & Layout
- **components/NavBar.tsx**: Main navigation (160 lines)
  - Desktop & mobile menus
  - Theme toggle
  - Smooth scroll links

- **components/Footer.tsx**: Site footer (200 lines)
  - Newsletter signup
  - Social media links
  - Site navigation

### Content Sections
- **components/Hero.tsx**: Hero section (110 lines)
  - Animated entrance
  - Gradient background
  - CTA buttons

- **components/Features.tsx**: Features grid (100 lines)
  - 4 feature cards
  - Staggered animations
  - Icons from Heroicons

- **components/StatsStrip.tsx**: Statistics (70 lines)
  - Animated counters
  - Scroll-triggered animations
  - Gradient background

- **components/EventsCarousel.tsx**: Events grid (130 lines)
  - Event cards
  - Date, location, type
  - Register buttons

- **components/ProjectsGrid.tsx**: Projects grid (140 lines)
  - Project cards
  - GitHub stars
  - Technology tags

- **components/CallToAction.tsx**: CTA banner (90 lines)
  - Full-width gradient
  - Multiple CTAs
  - Visual effects

### Utilities
- **components/ThemeProvider.tsx**: Dark mode (60 lines)
  - Context provider
  - Local storage
  - System preference detection

### API
- **app/api/newsletter/route.ts**: Newsletter API (40 lines)
  - Email validation
  - POST endpoint
  - Ready for integration

### Data
- **data/events.json**: 6 demo events with all metadata
- **data/projects.json**: 6 demo projects with tags & links

### Configuration
- **tailwind.config.ts**: Custom theme colors, animations
- **next.config.mjs**: Image optimization settings
- **tsconfig.json**: TypeScript strict mode
- **vercel.json**: Deployment configuration

## Component Sizes

| Component | Lines | Type | Purpose |
|-----------|-------|------|---------|
| NavBar | ~160 | Client | Navigation & mobile menu |
| Footer | ~200 | Client | Links & newsletter |
| Hero | ~110 | Client | Main hero section |
| Features | ~100 | Client | Feature cards |
| EventsCarousel | ~130 | Client | Events display |
| ProjectsGrid | ~140 | Client | Projects showcase |
| CallToAction | ~90 | Client | CTA banner |
| StatsStrip | ~70 | Client | Animated stats |
| ThemeProvider | ~60 | Client | Dark mode |

**Total Component Code**: ~1,060 lines  
**Total Project Code**: ~2,500+ lines

## Technology Stack Map

```
Frontend Framework
└── Next.js 14 (App Router)
    ├── React 18 (Server & Client Components)
    └── TypeScript (Type Safety)

Styling
└── Tailwind CSS
    ├── Custom Theme (primary, accent colors)
    ├── Dark Mode Support
    └── Responsive Utilities

Animation
└── Framer Motion
    ├── Scroll Animations
    ├── Hover Effects
    └── Staggered Entrance

UI Components
└── Headless UI
    ├── Dialog (Mobile Menu)
    ├── Transition Components
    └── Accessible Primitives

Icons
└── Heroicons
    ├── Outline Icons
    └── Solid Icons

Fonts
└── Google Fonts
    └── Inter (Variable)

Deployment
└── Vercel
    ├── Automatic CI/CD
    ├── Edge Network
    └── Analytics
```

## Responsive Breakpoints

```
Mobile First Approach:

Default (< 640px)
  ↓
sm: 640px
  ↓
md: 768px
  ↓
lg: 1024px
  ↓
xl: 1280px
  ↓
2xl: 1536px

Components adapt at each breakpoint:
- Grid columns (1 → 2 → 3 → 4)
- Font sizes
- Spacing & padding
- Navigation (mobile → desktop)
```

## File Dependencies

```
app/page.tsx
├── imports → components/NavBar.tsx
├── imports → components/Hero.tsx
├── imports → components/Features.tsx
├── imports → components/StatsStrip.tsx
├── imports → components/EventsCarousel.tsx
│   └── requires → data/events.json
├── imports → components/ProjectsGrid.tsx
│   └── requires → data/projects.json
├── imports → components/CallToAction.tsx
└── imports → components/Footer.tsx
    └── calls → app/api/newsletter/route.ts

app/layout.tsx
├── imports → app/globals.css
├── imports → components/ThemeProvider.tsx
└── uses → next/font/google (Inter)

All components
├── may use → framer-motion
├── may use → @heroicons/react
└── styled with → tailwindcss
```

## Build Output

When you run `npm run build`, Next.js generates:

```
.next/
├── static/              # Static assets
├── server/              # Server-side code
├── cache/               # Build cache
└── ...

Production build includes:
- Optimized JavaScript bundles
- Optimized CSS
- Pre-rendered static pages
- Optimized images
- Font files
```

## Quick Navigation

| Want to... | Edit this file... |
|------------|------------------|
| Change colors | `tailwind.config.ts` |
| Update events | `data/events.json` |
| Update projects | `data/projects.json` |
| Edit hero text | `components/Hero.tsx` |
| Edit features | `components/Features.tsx` |
| Change metadata | `app/layout.tsx` |
| Modify menu | `components/NavBar.tsx` |
| Update footer | `components/Footer.tsx` |
| Add API endpoint | `app/api/*/route.ts` |

---

This structure follows Next.js 14 best practices and is ready for production deployment!

