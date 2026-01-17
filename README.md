# Blue Slide Studio - Digital Presence Website

A modern, bilingual (Greek/English) business website built with Next.js and Tailwind CSS. Blue Slide Studio provides end-to-end digital presence management including strategy, design, development, social media, SEO, and more.

## Overview

Blue Slide Studio is a complete digital presence partner for modern businesses, offering everything from Google Business setup and SEO to website development, logo design, professional photography, and social media management.

## Features

✨ **Bilingual Support** - Greek (default) and English with seamless language toggle
🎨 **Modern Design** - Clean, minimal aesthetic with smooth animations
📱 **Fully Responsive** - Mobile-first design that works on all devices
🚀 **Fast Performance** - Built with Next.js 16 App Router
🎯 **Complete Pages** - All pages fully built and ready to customize

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Language**: JavaScript
- **State Management**: React Context (for language switching)

## Project Structure

```
├── app/
│   ├── page.js              # Home page (bilingual)
│   ├── services/page.js     # Complete services page
│   ├── work/page.js         # Portfolio/work page
│   ├── about/page.js        # About page
│   ├── contact/page.js      # Contact form page
│   ├── layout.js            # Root layout with language provider
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.js        # Sticky nav with mobile menu
│   ├── Logo.js              # Blue Slide Studio logo component
│   ├── LanguageToggle.js    # Language switcher
│   ├── Button.js            # Reusable button component
│   └── Footer.js            # Footer component
├── contexts/
│   └── LanguageContext.js   # Language state management
├── lib/
│   └── translations.js      # All Greek/English translations
└── public/                  # Static assets
```

## Pages

### 🏠 Home Page
- Hero section with gradient background
- Value proposition (3 key benefits)
- Services overview with icons
- Featured work preview
- Testimonial section
- CTA section

### 🛠️ Services Page
Complete service listings organized by category:
- **Strategy & Positioning**: Google Business, SEO, market research, brand positioning
- **Design & Development**: Logos, graphics, UX/UI, websites, professional photography
- **Social Media & Growth**: Social management, content creation, analytics, optimization

### 💼 Work Page
- Portfolio grid layout
- Project categories
- Case study previews
- Coming soon notice with CTA

### 👥 About Page
- Company story
- 4-step approach methodology
- Core values with icons

### 📧 Contact Page
- Full contact form (name, email, phone, company, project details, budget)
- Social media links
- Direct email contact

## Design Features

- **Color Palette**: Black (#171717), white, neutral grays
- **Typography**: Geist Sans with strong hierarchy
- **Animations**: Subtle hover effects, smooth transitions
- **Glassmorphism**: Backdrop blur on navigation
- **Gradients**: Subtle background gradients for depth
- **Shadows**: Layered shadow system for cards
- **Icons**: Heroicons via inline SVG

## Getting Started

Install dependencies:
```bash
pnpm install
```

Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The site will load in Greek by default. Use the language toggle in the navigation to switch to English.

## Building for Production

```bash
pnpm build
pnpm start
```

## Customization Guide

### Update Business Information
1. **Email**: Change `hello@Blue Slidestudio.gr` in:
   - `components/Footer.js`
   - `app/contact/page.js`

2. **Social Links**: Update URLs in:
   - `components/Footer.js`
   - `app/contact/page.js`

3. **Logo**: Customize the SVG in `components/Logo.js`

### Update Content
All text content is in `lib/translations.js`:
- Edit Greek text under `el` object
- Edit English text under `en` object
- Add new translation keys as needed

### Add Real Projects
Edit `app/work/page.js`:
- Replace placeholder projects array with real data
- Add project images to `/public`
- Update project links

### Implement Contact Form
In `app/contact/page.js`, update the `handleSubmit` function to:
- Send to your email service (SendGrid, Resend, etc.)
- Connect to your backend API
- Integrate with a form service (Formspree, etc.)

## Services Offered

Blue Slide Studio provides:
- Google Business Setup & Optimization
- SEO Strategy & Implementation
- Logo Design & Brand Identity
- Graphic Design & Marketing Materials
- UX/UI Design
- Website Development (Next.js, React)
- Professional Product Photography
- Social Media Management (Instagram, Facebook, LinkedIn)
- Content Creation & Strategy
- Google Analytics & Performance Tracking
- Continuous Optimization & A/B Testing

## Language Support

The site uses React Context for language management:
- Default language: Greek (`el`)
- Secondary language: English (`en`)
- Language preference saved in localStorage
- All UI text is translatable
- Easy to add more languages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2026 Blue Slide Studio. All rights reserved.
