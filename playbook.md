# Project Instructions for Antigravity: Modern Barber/Salon Website Build

**Context:** You are an expert AI developer building a high-converting, SEO-optimized website for a local hair salon/barbershop. Your goal is to maximize local search visibility and online booking conversions by strictly adhering to the 2026 best practices outlined in this document. 

Execute the following instructions without ambiguity.

## 1. Site Architecture & URL Structure
Construct the website using a logical semantic hierarchy to satisfy both user intent and search engine crawlers.

**Page List & URL Slugs:**
*   **Homepage:** `/` (Primary focus: Immediate brand positioning and booking)
*   **Services Overview:** `/services` (Categorized list of all offerings)
*   **Individual Service Pages:** `/services/[service-name]` (e.g., `/services/balayage` or `/services/mens-haircut`)
*   **About/Team:** `/about` or `/stylists` (Stylist bios and credentials)
*   **Gallery/Portfolio:** `/gallery` (Filterable visual proof of work)
*   **Reviews/Testimonials:** `/reviews` (Social proof)
*   **Booking:** `/booking` (Dedicated page for the scheduling widget)
*   **Contact & Location:** `/contact` (NAP details and Maps)
*   **FAQ & Policies:** `/faq` (Cancellation policies, prep instructions)
*   **Blog/Local Content:** `/blog` (Hyper-local guides and trend posts)

**Navigation Layout:**
*   **Header Nav:** Sticky, persistent navigation. Hamburger menu on mobile to preserve screen space. The "Book Now" CTA must be placed in the top right corner and styled with the primary accent color.
*   **Footer Layout:** Must include the salon's NAP (Name, Address, Phone Number), operating hours, a mini Google Map embed, links to all main pages, cancellation policy link, and social media icons.

## 2. Design System Tokens
Implement a "Clubroom Contrast" (high-end luxury) or "Walnut Retro" (modern urban barbershop) aesthetic. Use the following variables for a premium, modern feel:

**Color Palette (Clubroom Contrast Example):**
*   **Primary Dark (Backgrounds/Text):** `#1C1C1C` (Charcoal Black)
*   **Accent/CTA (Buttons/Highlights):** `#D4AF37` (Deep Gold)
*   **Secondary Backgrounds:** `#F8F9FA` (Lofty Off-White)

**Typography:**
*   **Headings (H1-H3):** `Amiri` or `Futura Bold` (High-contrast, sophisticated serif or clean bold sans-serif).
*   **Body Text:** `Inter` or `Museo Slab` (Clean, highly readable sans-serif/slab).
*   **Line Height:** `1.6` for body text for readability; `1.2` for headings.

**Spacing & UI Elements:**
*   **Spacing Scale:** Use standard Tailwind 4px/8px incremental spacing. 
*   **Border Radius:** `4px` (slightly rounded for a modern, sharp look).
*   **Touch Targets:** All interactive elements (links, buttons, nav items) MUST have a minimum footprint of `44x44 pixels` for mobile accessibility. 

**Reusable Component Definitions:**
*   `PrimaryCTA`: Background `#D4AF37`, Text `#1C1C1C`, bold, minimum `44px` height, slight hover animation.
*   `ServiceCard`: Off-white background `#F8F9FA`, charcoal text `#1C1C1C`, includes service title, starting price, duration, and a "Book" text link.
*   `StylistProfile`: Image cropped to a square or circle, H3 name, short bio paragraph, and direct booking link.
*   `ReviewCard`: 5 gold stars, client quote, specific service mentioned, and client name.

## 3. Content Templates for Every Page
Generate the structure using these templates. **AI Prompt:** When generating placeholder copy, use a friendly, professional, and locally-focused tone. Emphasize client benefits rather than just technical features.

**Homepage Template (HTML/Markdown Structure):**
```html
<!-- Hero Section -->
<section class="hero">
  <!-- Eager-loaded AVIF/WebP background image of the salon -->
  <h1>[Insert Salon Name]: Premium Grooming in [Insert City/Neighborhood]</h1>
  <p>[Insert 1-sentence value proposition]</p>
  <PrimaryCTA>Book Your Appointment</PrimaryCTA>
</section>

<!-- Services Overview -->
<section class="services">
  <h2>Our Services</h2>
  <!-- Grid of ServiceCards -->
  <ServiceCard title="[Service 1]" price="From $[X]" time="[X] mins" desc="[Insert 2-sentence benefit-driven description]"/>
  <ServiceCard title="[Service 2]" price="From $[X]" time="[X] mins" desc="[Insert 2-sentence benefit-driven description]"/>
</section>

<!-- Trust / Social Proof -->
<section class="reviews">
  <h2>What [City] is Saying</h2>
  <!-- ReviewCards highlighting specific services and neighborhoods -->
</section>

<!-- Location & CTA -->
<section class="location-cta">
  <h2>Visit Us in [Neighborhood]</h2>
  <!-- Embedded Map -->
  <!-- NAP Details -->
  <PrimaryCTA>Book Now</PrimaryCTA>
</section>
```

## 4. Technical Stack & Performance Requirements
**Tech Stack:** Next.js (App Router) or Astro with Tailwind CSS. Static generation (SSG) is highly preferred for fast load times and rapid indexing.

**Image Handling (STRICT RULES):**
*   **Format:** Serve `AVIF` by default, with `WebP` and `JPEG/PNG` fallbacks using the `<picture>` element. 
*   **LCP (Above the fold):** The Largest Contentful Paint image (e.g., Hero image) MUST be loaded instantly. **DO THIS:** Use `loading="eager"` and `fetchpriority="high"`. Preload the image in the `<head>` using `<link rel="preload" as="image">`. **DON'T DO THIS:** Never lazy-load the LCP image.
*   **Lazy Loading (Below the fold):** **DO THIS:** Use native browser lazy loading (`loading="lazy"`) for all images below the fold, such as portfolio galleries.
*   **Layout Shifts (CLS):** **DO THIS:** Define explicit HTML `width` and `height` attributes or use CSS `aspect-ratio` on EVERY image to reserve layout space and prevent Cumulative Layout Shift (CLS).
*   **Metadata:** Strip all EXIF data from images during the build process to save bytes.

**Performance Targets:** 
*   Lighthouse Score: > 90 across all categories.
*   Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms.
*   Mobile-First Breakpoints: Design for mobile (`< 768px`) first, then scale up to tablet and desktop. Do not use desktop-first CSS.

## 5. SEO Implementation Checklist

**Meta Tags & Headings:**
*   **Title Tags:** 55–60 characters. Format: `[Primary Service] in [City/Neighborhood] | [Salon Name]`.
*   **Meta Descriptions:** 155–160 characters with a clear CTA.
*   **Heading Rules:** Exactly ONE `<h1>` tag per page. Use `<h2>` for major sections and `<h3>` for subsections. Do not skip heading levels.

**URL & Internal Linking:**
*   Use descriptive, hyphen-separated, lowercase URLs (e.g., `/services/mens-haircut`).
*   Internal links must use semantic anchor text (e.g., `<a href="/booking">Book your balayage appointment</a>` instead of "Click here").

**Schema Markup (Inject as JSON-LD in the `<head>`):**
Generate a combined `@graph` structure for `LocalBusiness` (subtype: `HairSalon` or `BarberShop`), `Service` (or `OfferCatalog`), `FAQPage`, and `BreadcrumbList`.

*Snippet Example (LocalBusiness):*
```json
{
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://www.yourdomain.com/#business",
  "name": "[Salon Name]",
  "image": "https://www.yourdomain.com/images/storefront.jpg",
  "telephone": "[+1-XXX-XXX-XXXX]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street]",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[Zip]",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[Lat]",
    "longitude": "[Long]"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$"
}
```

**Sitemap & Robots.txt:**
*   Generate a dynamic `sitemap.xml` that includes an Image Sitemap extension `<image:image>` for visual search optimization.
*   Generate a `robots.txt` that allows all crawling to the main site and links to the sitemap.

## 6. Online Booking & Third-Party Integration
*   **Booking Widget Embed:** Embed the third-party booking widget (e.g., Booksy, Fresha, GlossGenius) directly into the `/booking` page to minimize redirects and friction.
*   **Fallback:** If JavaScript fails or the iframe breaks, provide a highly visible `<a href="[Direct Booking Link]">Click here to book on our secure portal</a>` fallback link.
*   **Google Maps Embed:** On the `/contact` page, use an `<iframe>` embed of the Google Maps location. Include `loading="lazy"` on the iframe to prevent it from blocking the main thread during initial load.
*   **Social Feed:** If embedding an Instagram grid, fetch the images statically at build time if possible to preserve page speed, or lazy-load the widget script.

## 7. Code Patterns & Conventions
Follow these strict coding rules to satisfy both AI crawlers and accessibility guidelines:

*   **Semantic HTML:** Use native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements. 
*   **Accessibility (A11y):** 
    *   Use explicit `aria-labels` on icon-only buttons (like the hamburger menu or social icons).
    *   All functional images MUST have descriptive `alt` text (e.g., `alt="Stylist applying balayage to client's hair"`). 
    *   **DON'T DO THIS:** Do not keyword-stuff alt text. 
    *   **DO THIS:** Purely decorative images (background patterns, spacing graphics) MUST use empty alt text `alt=""` so screen readers skip them.
*   **CSS Conventions:** Use Tailwind CSS utility classes or strict BEM (Block Element Modifier) naming to keep styles modular. Avoid inline styles.
*   **Component Structure:** Break UI down into small, reusable components (e.g., `<Button>`, `<ServiceCard>`, `<ImageResponsive>`).

**Anti-Patterns to Avoid at All Costs:**
*   **DO NOT** use JavaScript/Intersection Observer for lazy-loading images if native `loading="lazy"` can be used.
*   **DO NOT** upload images with original camera filenames (e.g., `IMG_1234.jpg`). **DO THIS:** Rename files to be descriptive and hyphenated (e.g., `mens-fade-haircut.avif`).
*   **DO NOT** use hidden text or zero-opacity text to stuff keywords.
*   **DO NOT** create a single "Services" page with a wall of text. **DO THIS:** Create dedicated landing pages for distinct major services.
