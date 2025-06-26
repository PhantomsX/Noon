# Noon Consultants - Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Architecture](#project-architecture)
4. [Directory Structure](#directory-structure)
5. [Core Features](#core-features)
6. [Components Documentation](#components-documentation)
7. [Pages Documentation](#pages-documentation)
8. [Internationalization (i18n)](#internationalization-i18n)
9. [Styling and Theming](#styling-and-theming)
10. [Configuration Files](#configuration-files)
11. [API and Services](#api-and-services)
12. [Deployment and Build](#deployment-and-build)

---

## 1. Project Overview

**Noon Consultants** is a modern, multilingual architectural and urban planning consultancy website built with Next.js 15. The application showcases the company's services, projects, team, and career opportunities with a sophisticated dark theme and smooth animations.

### Key Characteristics:
- **Company Type**: Architecture and Urban Planning Consultancy
- **Founded**: 2011
- **Headquarters**: Riyadh, Saudi Arabia
- **Branch Office**: Al-Madinah, Saudi Arabia
- **Primary Languages**: English and Arabic (RTL support)

### Business Services:
1. Engineering & Architectural Design
2. Urban Design
3. Master Planning
4. Construction Supervision
5. Permits
6. Engineering Reports
7. Value Engineering
8. Engineering Studies
9. Landscaping
10. Interior Design
11. Project Management
12. Architect of Record (OR)

---

## 2. Technology Stack

### Core Technologies:
- **Framework**: Next.js 15.2.4 (with Turbopack)
- **Language**: TypeScript 5.x
- **React Version**: React 19.0.0
- **Styling**: Tailwind CSS 4.x with DaisyUI

### Key Dependencies:
```json
{
  "next": "15.2.4",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5",
  "tailwindcss": "^4",
  "daisyui": "^5.0.12"
}
```

### UI Libraries:
- **Radix UI**: For accessible, unstyled UI primitives
  - `@radix-ui/react-select`: Custom select components
  - `@radix-ui/react-slot`: Component composition
  - `@radix-ui/react-tabs`: Tab components
- **Motion (Framer Motion)**: Animation library (`motion: ^12.16.0`)
- **Embla Carousel**: Lightweight carousel (`embla-carousel-react: ^8.6.0`)
- **React Fast Marquee**: Scrolling marquee component

### Utility Libraries:
- **clsx**: Conditional class names
- **tailwind-merge**: Merge Tailwind classes intelligently
- **class-variance-authority (CVA)**: Component variant management
- **lucide-react**: Icon library
- **usehooks-ts**: TypeScript React hooks collection

### Internationalization:
- **next-intl**: Internationalization framework for Next.js

---

## 3. Project Architecture

### Application Structure:
```
├── App Router (Next.js 15)
│   ├── Root Layout with i18n Provider
│   ├── Page-based routing
│   └── Server Components by default
├── Component Architecture
│   ├── UI Components (Shadcn-inspired)
│   ├── Page Components
│   └── Feature Components
├── Internationalization Layer
│   ├── Locale detection
│   ├── Message loading
│   └── RTL/LTR support
└── Asset Management
    ├── Public assets
    ├── Fonts
    └── Images/Icons
```

### Design Patterns:
1. **Component Composition**: Using Radix UI primitives with custom styling
2. **Server Components**: Default for better performance
3. **Client Components**: Used for interactivity (marked with "use client")
4. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
5. **Dark Theme**: Primary design with gradient accents

---

## 4. Directory Structure

```
Noon/
├── components/               # Shared UI components
│   └── ui/
│       ├── button.tsx       # Button component with variants
│       ├── carousel.tsx     # Carousel wrapper component
│       ├── select.tsx       # Select dropdown component
│       └── tabs.tsx         # Tab navigation component
├── lib/
│   └── utils.ts            # Utility functions (cn for className merge)
├── messages/               # i18n translation files
│   ├── ar.json            # Arabic translations
│   └── en.json            # English translations
├── public/                 # Static assets
│   ├── fonts/             # Custom font files
│   ├── icons/             # SVG icons
│   ├── images/            # Image assets
│   └── logos/             # Client and company logos
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── components/    # Page-specific components
│   │   ├── [pages]/       # Route pages
│   │   ├── globals.css    # Global styles
│   │   └── layout.tsx     # Root layout
│   └── i18n/              # Internationalization config
│       ├── locale.ts      # Locale management
│       └── request.ts     # i18n request config
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── components.json        # UI components configuration
```

---

## 5. Core Features

### 5.1 Multilingual Support
- **Languages**: English and Arabic
- **RTL Support**: Automatic layout switching for Arabic
- **Font Switching**: Different fonts for each language
- **Cookie-based**: Locale preference stored in cookies

### 5.2 Animation System
- **Library**: Motion (Framer Motion)
- **Features**:
  - Page transitions
  - Scroll-triggered animations
  - Hover effects
  - Staggered children animations
  - Parallax effects

### 5.3 Responsive Design
- **Breakpoints**: Mobile, Tablet, Desktop
- **Approach**: Mobile-first
- **Features**:
  - Adaptive navigation
  - Responsive grids
  - Touch-friendly interfaces

### 5.4 Theme System
- **Primary Theme**: Dark with gradient accents
- **Color Scheme**:
  - Background: Dark (`#1d1d1d`)
  - Primary Gradient: `#BE7B2C` to `#F9C39D`
  - Text: White with opacity variations
  - Accent: Gold/Bronze gradients

---

## 6. Components Documentation

### 6.1 Layout Components

#### Root Layout (`src/app/layout.tsx`)
```typescript
- Manages global layout structure
- Implements i18n provider
- Sets up fonts based on locale
- Applies RTL/LTR direction
- Includes background gradient effects
```

**Key Features**:
- Dynamic font loading (Amiri, Noto Kufi Arabic)
- NextIntlClientProvider wrapper
- Global navbar and footer
- Background decoration elements

#### Navbar (`src/app/components/navbar.tsx`)
```typescript
- Sticky navigation bar
- Language switcher
- Responsive menu
- Animated logo
- Navigation links with hover effects
```

**Props**: None (uses global state)
**Features**:
- Motion animations on mount
- Language toggle functionality
- Mobile dropdown menu
- Glass morphism effect

#### Footer (`src/app/components/Footer.tsx`)
```typescript
- Company information
- Social media links
- Copyright notice
- Responsive grid layout
```

### 6.2 UI Components

#### Button (`components/ui/button.tsx`)
```typescript
- Variant-based styling
- Size options
- Accessible by default
- Icon support
```

**Variants**:
- `default`: Primary button
- `destructive`: Error/delete actions
- `outline`: Secondary button
- `secondary`: Alternative style
- `ghost`: Minimal style
- `link`: Link style

**Sizes**: `default`, `sm`, `lg`, `icon`

#### Tabs (`components/ui/tabs.tsx`)
```typescript
- Radix UI based
- Accessible tab navigation
- Customizable styling
```

#### Select (`components/ui/select.tsx`)
```typescript
- Dropdown select component
- Radix UI based
- Custom styling
```

#### Carousel (`components/ui/carousel.tsx`)
```typescript
- Embla carousel wrapper
- Touch-friendly
- Responsive
```

### 6.3 Feature Components

#### PageTitle (`src/app/components/PageTitle.tsx`)
```typescript
- Consistent page headers
- Gradient text effect
- Animation on mount
```

#### LogosCarousel (`src/app/components/LogosCarousel.tsx`)
```typescript
- Auto-scrolling client logos
- Continuous loop
- Responsive sizing
```

**Features**:
- 18 client logos
- React Fast Marquee implementation
- Automatic scrolling

#### Sidebar (`src/app/components/Sidebar.tsx`)
```typescript
- Social media links
- Contact shortcuts
- Vertical/horizontal layouts
```

**Props**:
- `orientation`: "vertical" | "horizontal"

#### Input (`src/app/components/Input.tsx`)
```typescript
- Form input component
- Consistent styling
- Validation support
```

#### RadioElement (`src/app/components/RadioElement.tsx`)
```typescript
- Custom radio button
- Form integration
- Accessible
```

---

## 7. Pages Documentation

### 7.1 Home Page (`src/app/page.tsx`)
```typescript
- Hero section with main background
- Client logos showcase
- Company introduction
- Animated sections
```

**Key Sections**:
1. Hero with tagline
2. Partners carousel
3. Company founding information
4. Contact information

**Animations**:
- Fade-in on scroll
- Staggered section reveals
- Parallax background

### 7.2 About Page (`src/app/about/page.tsx`)
```typescript
- Company history
- CEO message
- Mission & Vision
- Team showcase
- Contact form
```

**Features**:
- Team member cards with hover effects
- Animated counters
- Timeline layout
- Contact section with form

### 7.3 Services Page (`src/app/services/page.tsx`)
```typescript
- 12 service categories
- Grid layout
- Interactive service cards
- Detailed descriptions
```

**Service Cards**:
- Hover animations
- Service features list
- Navigation to projects
- Numbered categories

### 7.4 Projects Page (`src/app/projects/page.tsx`)
```typescript
- Portfolio showcase
- Category filtering
- Project grid
- Detail navigation
```

**Features**:
- Tab-based filtering (All, Urban, Architecture, Interior Design)
- Animated grid layout
- Project preview cards
- Hover effects with details

### 7.5 Careers Page (`src/app/careers/page.tsx`)
```typescript
- Open positions
- Application process
- Company benefits
- Statistics showcase
```

**Components**:
- Job cards with expandable details
- Animated statistics counters
- Benefits grid
- Application process timeline

### 7.6 Project Details Page (`src/app/project-details/page.tsx`)
```typescript
- Individual project showcase
- Image gallery
- Project specifications
- Related projects
```

### 7.7 Contact Page (`src/app/contact/page.tsx`)
```typescript
- Redirects to About page contact section
- Temporary implementation
```

### 7.8 Auth Pages

#### Login Page (`src/app/login/page.tsx`)
```typescript
- User authentication
- Form validation
- Remember me option
```

#### Register Page (`src/app/register/page.tsx`)
```typescript
- New user registration
- Form fields
- Validation
```

#### Profile Page (`src/app/profile/page.tsx`)
```typescript
- User profile management
- Upload component
- Settings
```

### 7.9 Team Page (`src/app/team/page.tsx`)
```typescript
- Team member showcase
- Role descriptions
- Grid layout
```

### 7.10 Error Pages

#### Not Found (`src/app/not-found.tsx`)
```typescript
- 404 error page
- Navigation back home
- Consistent styling
```

---

## 8. Internationalization (i18n)

### 8.1 Configuration

#### Locale Management (`src/i18n/locale.ts`)
```typescript
- Cookie-based locale storage
- Supported locales: 'en', 'ar'
- Default: 'en'
```

#### Request Configuration (`src/i18n/request.ts`)
```typescript
- Loads appropriate message file
- Integrates with Next.js
```

### 8.2 Translation Structure

**English Messages (`messages/en.json`)**:
- Complete translation keys
- Nested structure for organization
- Service descriptions
- UI labels

**Arabic Messages (`messages/ar.json`)**:
- RTL-compatible translations
- Cultural adaptations
- Matching key structure

### 8.3 Implementation
```typescript
// Usage in components
const t = useTranslations();
const locale = useLocale();

// Translation key access
t('about') // Simple key
t('services.title') // Nested key
t.raw('careers.positions.architect') // Raw object access
```

---

## 9. Styling and Theming

### 9.1 Global Styles (`src/app/globals.css`)

#### Custom Fonts
```css
- Monalisa (Signature font)
- The New Elegance (Display font)
- Jaridah (Arabic display)
- Neue Montreal (Body text)
- Multiple weights and styles
```

#### Utility Classes
```css
.text-bg: Gradient text effect
.border-bg: Gradient border
.bg-linearGradient: Gradient background
.main-bg-gradient: Main background gradient
```

#### CSS Variables
- Color system with HSL values
- Dark theme by default
- Responsive radius system
- Chart colors

### 9.2 Tailwind Configuration

**Extensions**:
- Custom colors
- Font families
- Animation utilities
- DaisyUI integration

### 9.3 Component Styling Patterns
1. **Utility-first**: Tailwind classes
2. **Conditional Styling**: Using `cn()` utility
3. **Variants**: CVA for component variations
4. **Responsive**: Mobile-first breakpoints

---

## 10. Configuration Files

### 10.1 Next.js Configuration (`next.config.ts`)
```typescript
- Next-intl plugin integration
- Basic Next.js 15 setup
- TypeScript support
```

### 10.2 TypeScript Configuration (`tsconfig.json`)
```typescript
{
  "compilerOptions": {
    "target": "ES2017",
    "strict": false,
    "jsx": "preserve",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Key Settings**:
- Non-strict mode
- Path aliases (@/*)
- Next.js plugin
- Module resolution: bundler

### 10.3 Package Configuration

**Scripts**:
- `dev`: Development with Turbopack
- `build`: Production build
- `start`: Production server
- `lint`: ESLint checking

### 10.4 Components Configuration (`components.json`)
```json
- UI component settings
- Import aliases
- Style preferences
```

---

## 11. API and Services

### 11.1 Data Flow
- Static data in components
- JSON message files for content
- Local state management
- No external API calls currently

### 11.2 Future Integration Points
- Contact form submission
- Project data API
- User authentication
- Career applications

---

## 12. Deployment and Build

### 12.1 Build Process
```bash
npm run build
```
- Static generation where possible
- Server components optimization
- Image optimization
- Font subsetting

### 12.2 Environment Requirements
- Node.js 18+
- npm/yarn/pnpm
- Modern browser support

### 12.3 Performance Optimizations
- Turbopack in development
- Image lazy loading
- Font display swap
- Component code splitting

### 12.4 Production Considerations
- SSL/HTTPS required
- CDN for assets
- Proper meta tags
- SEO optimization needed

---

## Appendix A: Component Usage Examples

### Button Component
```typescript
import { Button } from "@/components/ui/button"

<Button variant="default" size="lg">
  Click Me
</Button>
```

### Tabs Component
```typescript
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Animation Pattern
```typescript
import { motion } from "motion/react"

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Animated Content
</motion.div>
```

---

## Appendix B: Common Patterns

### 1. Responsive Images
```typescript
<Image
  src={imageSrc}
  alt="Description"
  fill
  className="object-cover"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### 2. Conditional Styling
```typescript
className={cn(
  "base-classes",
  condition && "conditional-classes",
  {
    "variant-1": variant === "one",
    "variant-2": variant === "two"
  }
)}
```

### 3. Translation with Formatting
```typescript
const t = useTranslations();
const formattedText = t('key', { 
  variable: value 
});
```

---

## Appendix C: Troubleshooting

### Common Issues:

1. **Hydration Errors**
   - Ensure consistent rendering between server and client
   - Use `suppressHydrationWarning` when necessary

2. **Font Loading**
   - Fonts are loaded locally
   - Check font file paths
   - Verify font-display settings

3. **RTL Layout Issues**
   - Check dir attribute on HTML
   - Verify RTL-specific styles
   - Test with Arabic locale

4. **Animation Performance**
   - Use `will-change` CSS property
   - Limit concurrent animations
   - Test on lower-end devices

---

## Conclusion

This documentation provides a comprehensive overview of the Noon Consultants Next.js application. The project demonstrates modern web development practices including:

- Server-side rendering with Next.js 15
- Comprehensive internationalization
- Smooth animations and interactions
- Responsive, mobile-first design
- Component-based architecture
- Type safety with TypeScript

For further development, consider:
- Adding CMS integration
- Implementing contact form functionality
- Adding SEO optimizations
- Creating an admin panel
- Adding analytics tracking
- Implementing performance monitoring

---

*Document Version: 1.0*  
*Last Updated: December 2024*  
*Generated for: Noon Consultants Web Application* 