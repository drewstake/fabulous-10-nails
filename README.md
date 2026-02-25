# Fabulous 10 Nails Website

Production website for **Fabulous 10 Nails**, a local nail salon in Pennsburg, PA.

- Business: **Fabulous 10 Nails**
- Address: **436 Pottstown Ave., Pennsburg, PA 18073**
- Phone: **(215) 679-6470**
- Hours:
- `Mon-Thu: 10 AM to 7 PM`
- `Fri: 9 AM to 7 PM`
- `Sat: 9 AM to 6 PM`
- `Sun: Closed`

This README is written for:
- Salon owners and managers making content updates
- Developers maintaining the React/Tailwind codebase
- Marketing teams running local SEO and Google Ads campaigns

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Quick Start](#quick-start)
4. [Available Scripts](#available-scripts)
5. [Project Structure](#project-structure)
6. [Pages and Sections](#pages-and-sections)
7. [Common Updates (Owner-Friendly)](#common-updates-owner-friendly)
8. [Services and Pricing (Source of Truth)](#services-and-pricing-source-of-truth)
9. [Booking Link Configuration](#booking-link-configuration)
10. [SEO and Local Search Readiness](#seo-and-local-search-readiness)
11. [Google Ads and Conversion Readiness](#google-ads-and-conversion-readiness)
12. [Deployment](#deployment)
13. [Testing Checklist (Mobile + Desktop)](#testing-checklist-mobile--desktop)
14. [Troubleshooting](#troubleshooting)
15. [Contribution Workflow](#contribution-workflow)
16. [Launch and Post-Launch Checklists](#launch-and-post-launch-checklists)
17. [Changelog](#changelog)
18. [Roadmap](#roadmap)
19. [License](#license)

## Project Overview

This repo contains the front-end site for Fabulous 10 Nails with these business goals:
- Increase bookings
- Increase phone calls
- Increase direction requests
- Build trust with clear services, pricing, and reviews
- Maintain strong local SEO signals with consistent NAP (Name, Address, Phone)

## Tech Stack

- **Framework:** React 18 (Create React App via `react-scripts`)
- **Routing:** `react-router-dom`
- **Styling:** Tailwind CSS + component utility classes in `src/index.css`
- **Icons:** `lucide-react`
- **Build output:** static files in `build/`
- **CI/CD config present:** `amplify.yml` (AWS Amplify compatible)

## Quick Start

### Prerequisites

- Node.js `18+` recommended
- npm `9+` recommended

### Install and run locally

```bash
git clone https://github.com/drewstake/fabulous-10-nails.git
cd fabulous-10-nails
npm install
npm start
```

Open:

```txt
http://localhost:3000
```

### Production build

```bash
npm run build
```

Optional local preview of build:

```bash
npx serve -s build
```

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Create optimized production build
- `npm test` - Run tests in watch mode (if tests are present)
- `npm run eject` - Eject CRA config (irreversible; avoid unless necessary)

## Project Structure

```txt
fabulous-10-nails/
|-- public/
|   |-- index.html                  # Base HTML, default meta tags, JSON-LD schema, GA tag
|   `-- images/                     # Front + gallery images
|-- src/
|   |-- App.js                      # Main route map
|   |-- index.js                    # React bootstrap + BrowserRouter
|   |-- index.css                   # Global styles + button/layout utility classes
|   |-- pages/                      # Route-level page composition
|   |   |-- HomePage.jsx
|   |   |-- ServicesPage.jsx
|   |   |-- GalleryPage.jsx
|   |   `-- ContactPage.jsx
|   |-- components/                 # Reusable UI sections/components
|   |   |-- Header.jsx
|   |   |-- HeroSection.jsx
|   |   |-- ServicesSection.jsx
|   |   |-- GallerySection.jsx
|   |   |-- TestimonialsSection.jsx
|   |   |-- ContactSection.jsx
|   |   |-- Footer.jsx
|   |   |-- BookingSection.jsx
|   |   |-- MobileActionBar.jsx
|   |   `-- PageMeta.jsx
|   `-- data/                       # Business content source of truth
|       |-- businessInfo.js          # NAP, hours, booking link, popular services, price note
|       |-- serviceMenu.js           # Full service menu + pricing
|       |-- galleryImages.js         # Gallery image list + category filters
|       `-- testimonials.js          # Testimonials content
|-- amplify.yml                    # AWS Amplify build/deploy config
`-- package.json                   # Scripts + dependencies
```

## Pages and Sections

- `/` Home:
- Hero with primary CTAs (`Book`, `Call`, `Get Directions`)
- Trust cards
- Most popular services
- Reviews
- Booking CTA band

- `/services` Services:
- Most popular services section
- Full categorized pricing cards
- Add-ons highlight block
- Pricing note for `/up`

- `/gallery` Gallery:
- Filter chips (`All`, `Acrylic`, `Dip`, `Gel`, `Nail Art`)
- Lazy-loaded optimized gallery image cards

- `/contact` Contact:
- Address, phone, hours, embedded map, directions CTA

- Global:
- Sticky mobile bottom action bar with `Call`, `Book`, `Directions`
- Header and footer with repeated CTAs and NAP elements

## Common Updates (Owner-Friendly)

Use this section for the most common content edits.

### 1) Update phone, address, hours, directions, booking URL

Edit:

```txt
src/data/businessInfo.js
```

Fields to update:
- `name`
- `street`
- `cityStateZip`
- `phoneDisplay`
- `phoneHref`
- `phoneRaw`
- `bookingUrl`
- `directionsUrl`
- `mapEmbedUrl`
- `hours`
- `servingLine`

Important:
- Also update matching structured data in `public/index.html` JSON-LD section for SEO consistency.

### 2) Update services and prices

Edit:

```txt
src/data/serviceMenu.js
```

Also check:

```txt
src/data/businessInfo.js
```

Update:
- `popularServices` (cards shown above full price list)
- `servicePriceNote`

### 3) Update gallery photos

1. Add/replace files in:

```txt
public/images/
```

2. Update image entries and categories in:

```txt
src/data/galleryImages.js
```

Each item should include:
- `src`
- `alt`
- `category` (`Acrylic`, `Dip`, `Gel`, `Nail Art`)

### 4) Update testimonials/reviews

Edit:

```txt
src/data/testimonials.js
```

Rules:
- Keep **6 to 8 unique testimonials**
- Do **not duplicate review text**
- Keep authentic, readable quotes

Review button links live in:

```txt
src/components/TestimonialsSection.jsx
```

### 5) Update page titles/meta descriptions

Edit per route page:

```txt
src/pages/HomePage.jsx
src/pages/ServicesPage.jsx
src/pages/GalleryPage.jsx
src/pages/ContactPage.jsx
```

Global default/fallback SEO and schema:

```txt
public/index.html
```

## Services and Pricing (Source of Truth)

Keep these prices aligned with `src/data/serviceMenu.js`.

### Acrylics

- Regular Full Set: `$40/up`
- Regular Refill: `$35/up`
- Pink & White Full Set: `$65`
- Pink & White Back Fill: `$55`
- Pink Fill: `$40`

### Nail Care

- Manicure: `$15`
- Gel Manicure: `$30/up`
- Spa Pedicure: `$30/up`
- Deluxe Pedicure: `$45/up`

### Powder Dip

- Dip Full Set: `$40/up`

### Gel

- Full set (Gel on top): `$50/up`
- Gel Builder Full Set: `$60`
- Refill (Gel Color on Top): `$50/up`

### Kid's Menu (Under 10)

- Manicure: `$12`
- Pedicure: `$22`
- Mani & Pedi Combo: `$30`
- Polish Change: `$10`

### Waxing

- Eyebrow: `$12`
- Chin: `$12`
- Lip: `$7`
- Under Arms: `$25`
- Half Arms: `$30`
- Full Arms: `$50`
- Bikini: `$35`
- Brazilian Bikini: `$60`

### Additional

- Polish Change: `$10`
- French Polish Change: `$15`
- Toe Polish Change: `$15`
- Broken Nail Fix: `$6`
- Nail Designs: `$4/up`
- Paraffin for Hands/Feet: `$10`
- Cut Down: `$5/up`

### Pricing note

Use this wording (already implemented in `servicePriceNote`):

> Prices marked "/up" may vary based on length, design, or requests. Ask your tech for a final total before we begin.

## Booking Link Configuration

The booking URL is centrally managed in:

```txt
src/data/businessInfo.js
```

Key field:
- `bookingUrl`

This value is reused across:
- Hero CTA
- Header CTA
- Booking section CTA
- Footer CTA
- Sticky mobile action bar

If booking ever breaks:
- First verify `bookingUrl` in `businessInfo.js`
- Then verify pop-up blockers are not blocking external links

## SEO and Local Search Readiness

### Required SEO implementation in this repo

- Page title + meta description per route:
- Managed with `PageMeta` in each `src/pages/*.jsx` file

- Proper heading structure:
- Main page section title as `h1`
- Supporting blocks use `h2`/`h3`

- LocalBusiness JSON-LD:
- Located in `public/index.html`
- Includes name, phone, address, and opening hours

- Image optimization:
- Gallery images include `loading="lazy"`, width/height, and `sizes`
- Maintain descriptive `alt` text in `src/data/galleryImages.js`

- NAP consistency:
- Keep **Name, Address, Phone, Hours** identical in:
- On-page content (`businessInfo.js` consumers)
- Footer and contact section
- JSON-LD (`public/index.html`)
- Google Business Profile and directory listings

### To confirm

- Add canonical URL meta tag once final production domain strategy is confirmed.

## Google Ads and Conversion Readiness

### CTA placement best practices already reflected

- Header: `Call` + `Book Now`
- Hero: `Book Now`, `Call`, `Get Directions`
- Sticky mobile bottom bar: `Call`, `Book`, `Directions`
- Booking section: repeated conversion CTAs
- Footer: `Directions` + `Book Now`

### Tap-to-call requirement

- Calls use `tel:` links from `businessInfo.phoneHref`
- Verify mobile dialer opens when tapping any call CTA

### Verify conversion paths

Before and after campaigns, test:

1. Booking click path:
- Click `Book` from hero, header, mobile bar, and footer
- Confirm it opens the Square booking URL

2. Call click path:
- On mobile, click all call buttons
- Confirm phone app opens with `(215) 679-6470`

3. Directions click path:
- Click directions CTAs
- Confirm map opens for `436 Pottstown Ave., Pennsburg, PA 18073`

4. Analytics sanity:
- Google tag exists in `public/index.html`
- Confirm pageviews and ad landing traffic in GA

### To confirm

- Custom click events for call/directions/booking are not explicitly instrumented in code yet. Add `gtag` click events if conversion-event granularity is required.

## Deployment

This is a static React build (`npm run build` -> `build/` folder), so deploy to any static host.

### Option A: AWS Amplify (configured in repo)

`amplify.yml` already defines:
- `npm ci`
- `npm run build`
- artifact directory: `build`

Typical steps:

1. Connect GitHub repo in Amplify Console
2. Select branch (for example `main`)
3. Confirm build settings from `amplify.yml`
4. Deploy

### Option B: Netlify

Build settings:

- Build command: `npm run build`
- Publish directory: `build`

### Option C: Generic static hosting

```bash
npm run build
```

Upload the contents of `build/` to your host.

### Environment notes

- No runtime `.env` variables are required for current functionality.
- Google Analytics ID is hardcoded in `public/index.html`.
- If secrets or API keys are introduced later, move them to env vars and avoid committing them.

## Testing Checklist (Mobile + Desktop)

### Conversion and UX

- Header nav links route correctly
- Hero text is readable over background image
- `Book`, `Call`, `Directions` CTAs all work
- Sticky mobile bar appears only on mobile widths

### Content and trust

- Services and pricing match current menu
- `/up` pricing note appears and is clear
- Reviews section has 6-8 unique testimonials and no duplicates
- Address/phone/hours are correct everywhere

### SEO and performance

- Each page sets title + meta description
- JSON-LD exists in page source
- H1/H2 structure is logical and non-repetitive
- Gallery images lazy load with valid alt text
- No broken image links

### Cross-device checks

- iPhone Safari, Android Chrome
- Desktop Chrome, Safari, Edge
- Contact map and tap targets are usable on small screens

## Troubleshooting

1. **`npm start` fails with missing modules**
- Run `npm install` in repo root, then retry `npm start`.

2. **Port 3000 already in use**
- Stop the other process or accept alternate port prompt.

3. **Tailwind styles not applying**
- Confirm `src/index.css` includes Tailwind directives.
- Confirm `tailwind.config.js` includes `./src/**/*.{js,jsx,ts,tsx,html}` in `content`.

4. **Booking button opens wrong link**
- Verify `bookingUrl` in `src/data/businessInfo.js`.

5. **Phone tap does not open dialer**
- Verify `phoneHref` format is `tel:+1...` in `src/data/businessInfo.js`.

6. **Hours/address updated on page but not in SEO tools**
- Update JSON-LD in `public/index.html` to match `businessInfo.js`.

7. **Gallery images not showing**
- Confirm files exist in `public/images/`.
- Confirm matching `src` values in `src/data/galleryImages.js`.

8. **Review section shows repeated or low-quality testimonials**
- Clean up `src/data/testimonials.js` to 6-8 unique entries only.

9. **Google review buttons point to outdated URL**
- Update `reviewsLink` and `leaveReviewLink` in `src/components/TestimonialsSection.jsx`.

10. **Build fails in CI but works locally**
- Use `npm ci` instead of `npm install`.
- Confirm Node version parity between local and CI.

11. **Map embed is wrong or broken**
- Update `mapEmbedUrl` in `src/data/businessInfo.js`.

12. **Text appears garbled with unusual symbols**
- Check file encoding and save as UTF-8.
- Replace accidental non-ASCII punctuation in edited files.

## Contribution Workflow

### Branching and PR flow

1. Create a branch:

```bash
git checkout -b feat/short-description
```

2. Make focused changes.
3. Validate locally:

```bash
npm start
npm run build
```

4. Commit with clear message:

```bash
git commit -m "feat: update services pricing cards"
```

5. Push and open PR to `main`.

### Code style expectations

- Keep content in `src/data/*` where possible, not scattered in components.
- Reuse `businessInfo.js` for NAP/booking values to avoid drift.
- Keep CTA labels consistent: `Book`, `Call`, `Directions`.
- Preserve mobile-first behavior and sticky action bar.
- Keep headings semantic (`h1` per page section, supporting `h2`/`h3`).
- Add concise, descriptive alt text for new images.
- Do not duplicate testimonials.

## Launch and Post-Launch Checklists

### Launch checklist

- All prices match salon-approved menu
- Phone, address, hours are correct in UI and JSON-LD
- Booking URL tested on mobile and desktop
- Tap-to-call tested on iOS and Android
- Directions links open correct location
- Page titles/meta descriptions reviewed per route
- GA tag present and validating traffic
- Production build and deploy successful

### Post-launch checklist (weekly)

- Verify booking URL still active
- Review key CTA flows (`Book`, `Call`, `Directions`)
- Check for stale hours/holiday updates
- Add fresh gallery work and alt text
- Rotate testimonials (6-8 unique, no duplicates)
- Monitor page speed and Core Web Vitals
- Confirm ad landing pages and conversion paths still work

## Changelog

Use this format for manual updates:

```txt
YYYY-MM-DD
- Added:
- Changed:
- Fixed:
```

## Roadmap

- Add explicit conversion click tracking events for `Book`, `Call`, `Directions`
- Add optional CMS-like admin workflow for owner-friendly updates
- Add automated SEO checks in CI (titles/meta/schema presence)
- Add image compression pipeline for newly uploaded gallery photos

## License

No `LICENSE` file is currently present in this repository.

To confirm:
- Add a license file if this project should be explicitly open-source or restricted.
