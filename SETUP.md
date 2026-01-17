# VELA Studio - Setup & Customization Guide

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

## 🎨 Brand Identity

**Business Name**: VELA Studio
**Tagline**: Ολοκληρωμένη ψηφιακή παρουσία / End-to-end digital presence
**Logo**: Minimal "V" shape + text (see `components/Logo.js`)

## 🌍 Languages

- **Default**: Greek (el)
- **Secondary**: English (en)
- Language toggle in navigation (top right)
- All translations in `lib/translations.js`

## 📝 Content Customization

### 1. Update Contact Information

**Email** - Replace in these files:
- `components/Footer.js` (line ~39)
- `app/contact/page.js` (line ~27)

Current: `hello@velastudio.gr`

**Social Media Links** - Update in:
- `components/Footer.js` (lines ~47-60)
- `app/contact/page.js` (lines ~35-65)

### 2. Update Translations

Edit `lib/translations.js`:

```javascript
// Greek content under:
translations.el.home.hero.title = "Your new title"

// English content under:
translations.en.home.hero.title = "Your new title"
```

### 3. Add Real Projects

Edit `app/work/page.js`:

```javascript
const projects = [
  {
    id: 1,
    title: "Project Name",
    category: "Branding & Web",
    description: "Project description",
    image: "/projects/project-1.jpg", // Add this
    link: "/work/project-slug" // Add this
  },
  // ... more projects
];
```

### 4. Add Testimonials

Edit `app/page.js` (around line 240):

```javascript
// Update testimonial section
quote: "Real client quote here",
author: "Real Client Name",
company: "Real Company Name"
```

### 5. Customize Logo

Edit `components/Logo.js`:
- Change the "V" shape path
- Modify text content
- Adjust colors/sizing

## 🔧 Technical Setup

### Contact Form Integration

In `app/contact/page.js`, replace the `handleSubmit` function:

**Option 1: Email Service (Resend)**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  
  if (response.ok) {
    alert('Message sent!');
  }
};
```

**Option 2: Formspree**
```javascript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Google Analytics

Add to `app/layout.js` before closing `</head>`:

```javascript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### SEO Optimization

Update metadata in each page file:

```javascript
export const metadata = {
  title: "Page Title - VELA Studio",
  description: "Page description for SEO",
  openGraph: {
    title: "Page Title",
    description: "Description",
    images: ['/og-image.jpg'],
  },
};
```

## 🎯 Services Offered

Update service lists in `lib/translations.js` under:
- `services.strategy` - Strategy services
- `services.design` - Design services  
- `services.growth` - Growth services

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables

If using contact form API:
```
RESEND_API_KEY=your_key
CONTACT_EMAIL=hello@velastudio.gr
```

## 📱 Mobile Menu

The navigation automatically switches to mobile menu on screens < 768px.
Customize breakpoint in `components/Navigation.js`.

## 🎨 Design Tokens

**Colors** (in Tailwind):
- Primary: `neutral-900` (#171717)
- Background: `white` (#ffffff)
- Text: `neutral-600` / `neutral-900`

**Fonts**:
- Sans: Geist Sans (primary)
- Mono: Geist Mono (code/special)

**Spacing**:
- Container: `max-w-7xl`
- Section padding: `py-24 lg:py-32`
- Element gap: `gap-8` / `gap-16`

## 🔄 Adding New Pages

1. Create folder: `app/new-page/`
2. Add file: `app/new-page/page.js`
3. Add translations to `lib/translations.js`
4. Add nav link in `components/Navigation.js`
5. Add footer link in `components/Footer.js`

## 📊 Performance Tips

- Images: Use Next.js `<Image>` component
- Fonts: Already optimized with `next/font`
- Code splitting: Automatic with App Router
- Caching: Configure in `next.config.mjs`

## 🐛 Troubleshooting

**Language not switching?**
- Check browser console for errors
- Clear localStorage: `localStorage.clear()`
- Verify translations exist in `lib/translations.js`

**Mobile menu not working?**
- Check that JavaScript is enabled
- Verify `useState` is imported in Navigation.js

**Form not submitting?**
- Implement backend endpoint
- Check browser console for errors
- Verify form action/method

## 📞 Support

For questions or issues with the codebase, refer to:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- React docs: https://react.dev

---

**Ready to launch?** Update all placeholder content, add real images, implement contact form, and deploy! 🚀
