Below is a comprehensive plan for rebuilding the Small and Local Beer Co. website from the ground up. It covers an evaluation of the current site, goals for the new site, content architecture, design direction, technical considerations, functional requirements, SEO/performance, and a phased development roadmap.

---

## 1. Evaluation of the Current Site

1. **Brand Inconsistency**

   * The site still uses “Original Local Beers” as the name (e.g., footer shows ©2018 Original Local Beers) and doesn’t reflect the new “Small and Local Beer Co.” branding. ([localbeers.ca][1])
   * Logo, color palette, and typography feel outdated and generic.

2. **Navigation and Structure**

   * Top-level menu items (Home, Order, Menus, Find Our Beer, About Us, Contact) are present but lack hierarchy or clear labeling—for example, there’s no dedicated “Beers” page, and “Menus” appears but doesn’t load anything meaningful. ([localbeers.ca][1])
   * Important calls to action (e.g., “Order Now,” “Visit Our Taproom”) are buried in repeated Instagram images rather than highlighted as distinct buttons.

3. **Content Overload & Repetition**

   * Homepage is dominated by large auto-loaded Instagram-style image blocks, which repeat and push core information (taproom address, beer description) far down. ([localbeers.ca][2], [localbeers.ca][1])
   * The same “Small Batch Feature” text appears twice, and the “About Us” messaging is repeated verbatim in multiple sections.

4. **Poor Mobile/Responsive Experience**

   * Although images fill the viewport, text is not optimized for mobile (small font, awkward spacing).
   * No clear responsive breakpoints or mobile navigation menu; the layout collapses strangely on narrower viewports.

5. **Lack of Clear Product/Beer Listings**

   * Aside from “Our Beer: It’s for everyone,” there is no dedicated area listing current beers, their styles, ABV, tasting notes, or availability.
   * Users must click “Find Beer” (which simply scrolls down to a generic graphic) rather than seeing a structured directory of retailers or taproom offerings.

6. **Missing E-Commerce / Ordering Flow**

   * “ORDER NOW FOR PICKUP!!” is a heading, but there is no embedded shop, pricing information, or cart workflow.
   * Users are forced off-site to whatever Square page the “Order” link points to, without an integrated experience.

7. **SEO & Performance Issues**

   * Meta tags and title (“Local Lager | Ottawa | Original Local Lager”) do not mention the new brand.
   * Page load is slowed by numerous large Instagram-style images that aren’t lazy-loaded or optimized.

---

## 2. Objectives for the New Site

1. **Reflect the Rebrand**

   * Fully transition all instances of “Original Local Beers” to “Small and Local Beer Co.”
   * Introduce a unified logo, color palette, and typography that speak to a modern, community-focused brewery.

2. **Streamline User Experience**

   * Simplify navigation: focus on core sections (Home, Beers, Taproom, Order, About, Contact).
   * Ensure the most important CTAs—“Order Online,” “Visit Our Taproom,” “Browse Beers”—are immediately visible on all viewports.

3. **Showcase Beer Offerings Clearly**

   * Present each beer (e.g., Small Batch releases, flagship lagers, sours, IPAs) with name, style, ABV, tasting notes, and “Find It Near You” or “Add to Cart” buttons.
   * Allow filtering by style (Lager, IPA, Sour, etc.) on a single “Beers” page.

4. **Integrate E-Commerce Seamlessly**

   * Embed either a custom Shopify/BigCommerce store or a Square Online store so that users can browse, add to cart, and checkout without leaving the site.
   * Offer pickup scheduling or local delivery options at checkout.

5. **Highlight Taproom & Events**

   * Dedicate a “Taproom” page for location, hours, upcoming events (Live Music, Trivia, etc.), and a Google Map embed.
   * Enable an “Events” module or calendar (e.g., upcoming Open Mic nights) so visitors can RSVP or learn more.

6. **Improve Performance & SEO**

   * Optimize all images (use modern formats like WebP, lazy loading).
   * Update meta titles, descriptions, and Open Graph tags to reflect the new brand name.
   * Ensure markup follows semantic HTML (H1–H6 in a logical hierarchy).

7. **Strengthen Community Focus**

   * Include a “Why Local Matters” section (reuse and refine the existing copy about local economic impact).
   * Link to blog/social media for brewing process updates, community events, and collaborations with other Ottawa businesses.

8. **Mobile-First, Responsive Design**

   * Ensure menu collapses into a “hamburger” on mobile; content reflows for readability.
   * All button tap targets ≥44px, font sizes legible on small screens.

---

## 3. Content Architecture & Sitemap

Below is a proposed sitemap with primary and secondary nav items. Subpages should be accessible via both the main menu and footer.

```
/ (Home)
├── /beers
│    ├── /beers/flagship-lager
│    ├── /beers/small-batch (listing all rotating releases)
│    └── /beers/seasonal (e.g., Summer IPA, Pumpkin Ale, etc.)
├── /order
│    ├── Online Shop Overview
│    ├── Pickup & Delivery Info
│    └── Gift Cards / Merchandise
├── /taproom
│    ├── Location & Hours
│    ├── Events Calendar
│    └── Private Bookings (if applicable)
├── /about
│    ├── Our Story (founders, brewing philosophy)
│    ├── Sustainability & Community Impact
│    └── Press & Media (press logos, awards, Best in Ottawa badge)
├── /contact
│    ├── Contact Form (name, email, message, “Subscribe to Newsletter” opt-in)
│    ├── Brewery Address + Map Embed
│    └── Careers / Job Inquiries (optional)
└── /blog (optional)
     ├── /blog/news (e.g., new beer releases, collaborations)
     ├── /blog/recipes (beer-inspired cooking)
     └── /blog/community (charity events, local spotlights)
```

**Footer** (site-wide)

* Quick Links: Home, Beers, Order, Taproom, About, Contact
* Social Icons: Instagram, Facebook, Beer Advocate, Untappd
* Mailing List Signup (email input + “Subscribe” button)
* Legal: Terms & Privacy, Age Verification (e.g., “You must be 19+ to enter”)

---

## 4. Design Direction & Brand Guidelines

1. **Logo & Visual Identity**

   * **Logo**: A clean, modern mark—perhaps a stylized hop or beer glass combined with “Small & Local Beer Co.” in a sans-serif or slab-serif font.
   * **Color Palette**:

     * Primary: Deep forest green (#1A3824) or navy charcoal (#2C3E50)
     * Secondary: Warm gold (#D4A017) and off-white (#F7F5F0)
     * Accent: Rich amber (#C45A11) for buttons or highlights (reflecting amber ale).
   * **Typography**:

     * Headlines: A robust slab serif (e.g., “Bitter” or “Roslindale”) for a craft feel.
     * Body Text: A clean sans serif (e.g., “Work Sans,” “Montserrat,” or “Open Sans”) at 16px base, 1.5 line height.
     * Button Text: All-caps, letter-spacing +0.05em for readability.

2. **Imagery & Iconography**

   * Use high-resolution photos of the brewing facility, beers on tap, and candid “behind the scenes” shots.
   * For beer listings, provide clear bottle/can shots against a neutral backdrop plus a close-up of the pour (foam head visible).
   * Icons: Simple line icons for “Tap,” “Keg,” “Truck” (for delivery), “Map Pin” (for location). Use one consistent icon library (e.g., Feather Icons).

3. **Layout & Components**

   * **Hero Section (Home)**: Full-width background image or short muted loop of brewing tanks (dark overlay), with an H1 like “Small & Local Beer Co. – Ottawa’s Neighborhood Brewery.” Below: two CTA buttons (“Browse Our Beers” and “Visit Our Taproom”).
   * **Grid System**: 12-column grid (bootstrap-style) to align content. On desktop: two-column beer listings; on mobile: single column.
   * **Card Components**: For beers—a rectangular card with beer name, style, ABV, short descriptor, “View Details” or “Add to Cart.” On hover: subtle scale or shadow.
   * **Footer**: Dark background (#2C3E50) with white text (#F7F5F0). Four columns: Site Links; Social; Mailing List; Legal & Hours.

4. **Color & Contrast**

   * Ensure WCAG 2.1 AA contrast ratios: text over accent backgrounds must be ≥4.5:1.
   * Buttons: Primary (gold text on deep green background), Secondary (green text on gold border, transparent background).

5. **Mobile-First Considerations**

   * Simplify navigation to a hamburger menu revealing slide-in panel.
   * Stack components vertically; large tap targets for CTAs.
   * “Sticky” footer on mobile with quick links to “Order,” “Taproom,” and “Beers.”

---

## 5. Technical Stack & Hosting

1. **Platform Options**

   * **Static Site Generator (recommended)**:

     * **Next.js** or **Gatsby** (React-based) for fast performance, built-in routing, and easy CMS integration.
     * Integrate with a headless CMS (e.g., Sanity, Contentful, Strapi) for non-technical content updates (beer listings, events).

   * **WordPress + WooCommerce** (alternative)

     * Pros: Familiar admin interface for rapid content changes, plugins for SEO, mailing lists, event calendars.
     * Cons: Heavier footprint, need ongoing security maintenance, slower performance unless heavily optimized.

2. **Hosting & Deployment**

   * **If using Next.js/Gatsby**: Deploy on Vercel (Next.js) or Netlify (Gatsby) for automatic builds on Git push.
   * **If WordPress**: Host on a managed WordPress host (e.g., Kinsta, WP Engine) or a DigitalOcean droplet with a managed WP stack.

3. **E-Commerce Integration**

   * **Option A: Shopify Buy Button**

     * Keep Shopify backend; embed “Buy Now” buttons on each beer card.
     * Pros: Lightweight, secure checkout, minimal development.
     * Cons: Monthly Shopify fees.

   * **Option B: Square Online Integration**

     * Since current “Order” link points to Square, can embed Square’s Online Checkout or use Square’s API to build a custom storefront.
     * Pros: Single ecosystem if already using Square POS.
     * Cons: Slightly more custom development required to embed and style.

4. **Content Management**

   * **Headless CMS** for “Beers,” “Events,” and “Blog” posts. Editors can log in to add new beer releases or update “Taproom” hours.
   * **Markdown** (with Git-backed workflows) if development team is comfortable: update content via pull requests.

5. **Analytics & SEO Tools**

   * **Google Analytics 4** + **Google Search Console** integration.
   * **Meta tags** via Next.js Head component (or WP SEO plugin).
   * **Schema.org JSON-LD** for each beer (Product schema: name, image, description, offers) and local business (LocalBusiness schema with address, geo coordinates, openingHours).

6. **Accessibility (a11y)**

   * Use semantic HTML (nav, main, article, footer).
   * Ensure all interactive elements are keyboard navigable and have visible focus states.
   * Provide alt text for all images; form inputs labeled correctly.

---

## 6. Functional Requirements

1. **Homepage**

   * Hero with brand statement + two CTAs.
   * “Featured Beer” carousel (highlight one flagship, one small batch, one seasonal).
   * Quick “Find Our Beer” section linking to an interactive map or dropdown (e.g., taproom, LCBO, partner bars).
   * “Why Local Matters” snippet linking to About page.
   * Newsletter signup form (integrated with Mailchimp or Klaviyo).

2. **Beers Page**

   * **Grid/List of All Beers**:

     * Filters: Style (Lager, IPA, Sour, Stout), Availability (In Stock, Coming Soon), ABV range slider.
     * Each card shows: Beer name, style tag, ABV, short tasting note, “View Details” (lightbox or dedicated page), “Add to Cart.”
   * **Individual Beer Detail Page**:

     * Full description, larger photos (bottle/can + pour), flavor wheel or tasting notes, ABV, IBU, “Find It Near You” (map embed or list of retailers), “Add to Cart.”

3. **Order Page**

   * **Shop Overview**: Category listing (Flagship, Small Batch, Merchandise).
   * **Pickup Scheduling**: Calendar widget integrated with Google Calendar API (optional).
   * **Delivery Options**: If available, allow users to input postal code to check eligibility.
   * **Cart & Checkout**: Collect B.C./A.B.C. required info, age verification checkbox, payment integration with Square/Stripe.

4. **Taproom Page**

   * **Location & Hours**:

     * Address: 411 St. Laurent Blvd., Ottawa, ON K1K 2Z8 (with embedded Google Map iframe).
     * Hours: dynamically pulled from CMS (e.g., open daily 12–9pm).
   * **Events Calendar**:

     * List upcoming events (e.g., Open Mic June 5th at 7pm).
     * RSVP/“Add to Calendar” buttons.
   * **Private Bookings**:

     * Form to inquire: name, email, date, party size, message.

5. **About Page**

   * **Our Story**: Timeline graphic:

     1. 2018 – Founding and first batch of Original Local Lager
     2. 2022 – Small and Local Beer Co. rebrand
     3. 2023 – New taproom opens at Manor Park/St. Laurent
   * **Mission & Values**:

     * Focus on community, sustainability, quality ingredients.
   * **Press & Awards**:

     * “Featured in Best in Ottawa” badge (with link to article). ([localbeers.ca][3])

6. **Contact Page**

   * **Contact Form**: Fields: Name, Email, Subject (dropdown: General, Wholesale, Events, Careers), Message.
   * **Direct Email**: mailto:info@smallandlocalbeer.co (replace old info@localbeers.ca).
   * **Social Icons**:

     * Instagram: @small.and.local.beer ([instagram.com][4])
     * Facebook: link to new page if any.
   * **Mailing List Signup**: Collect email only, integrate with Mailchimp/Klaviyo.

7. **Blog (Optional to Launch; can phase in Later)**

   * **Categories**: News, Recipes, Community.
   * **List View**: Thumbnail + post excerpt + “Read More.”
   * **Single Post**: Title, date, author, featured image, content, social share buttons.
   * **Tags**: e.g., “Sour,” “Collaboration,” “Recipe.”

---

## 7. SEO & Performance Strategy

1. **SEO Fundamentals**

   * **Meta Titles**:

     * Homepage: “Small and Local Beer Co. – Ottawa’s Neighborhood Brewery”
     * Beers: “Our Beers | Small and Local Beer Co.”
     * Taproom: “Visit Our Taproom | Small and Local Beer Co.”
   * **Meta Descriptions**: 150–160 characters summarizing page content and brand.
   * **Open Graph** & **Twitter Cards**: For social sharing; use a featured beer image and short blurb.
   * **URL Structure**: lowercase, hyphenated (e.g., `/beers/flagship-lager`). No query parameters in page URLs.

2. **Performance Optimization**

   * **Image Optimization**:

     * Serve WebP or AVIF for modern browsers, fallback to compressed JPEG.
     * Implement lazy loading (`loading="lazy"`) for below-the-fold images.
   * **Code Splitting** (if using React/Next.js): only load JS modules needed per page—no large monolithic bundle.
   * **Minify & Tree-Shake**: HTML, CSS, and JS.
   * **Use a CDN**: Host static assets (images, fonts) on a fast CDN (e.g., Cloudflare, Netlify CDN).
   * **Caching**: Leverage browser caching headers for images, fonts, CSS (cache-control: `max-age=31536000`).
   * **Preconnect / Prefetch**: For analytics scripts (e.g., Google Analytics) and fonts—improves first-load performance.

3. **Accessibility & Best Practices**

   * **WCAG 2.1 AA Compliance**: contrast, keyboard nav, ARIA labels on dynamic elements.
   * **Lighthouse Audits**: Target 90+ in Performance, Accessibility, Best Practices, SEO.

---

## 8. Development Roadmap & Timeline

Below is a suggested six-week timeline. Adjust based on team size and priorities.

| Phase                       | Tasks                                                                                                                                                                | Duration               |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| **Discovery & Planning**    | – Stakeholder kickoff: confirm brand guidelines, target audience, key features<br>– Content audit: migrate or rewrite copy from current site                         | Week 1 (5 days)        |
| **Wireframes & Prototypes** | – Create low-fidelity wireframes for Desktop & Mobile (Home, Beers, Taproom, Order, About, Contact)<br>– Gather feedback & iterate on layouts                        | Week 2 (5 days)        |
| **Visual Design**           | – Produce high-fidelity mockups (Adobe XD/Figma) for each page based on brand palette/typography<br>– Finalize home hero, beer card styles                           | Week 3 (5 days)        |
| **Setup & Foundation**      | – Initialize code repo (GitHub) with chosen framework (Next.js / Gatsby / WP)<br>– Set up hosting (Vercel/Netlify or WP host)<br>– Configure headless CMS (if using) | Week 4 (3 days)        |
| **Core Development**        | – Build static components: header, footer, hero, card grid, forms<br>– Implement routing & pages: Home, Beers, Taproom, About, Contact                               | Week 4–Week 5 (7 days) |
| **Content & Integrations**  | – Populate CMS (beer entries, taproom hours, about copy)<br>– Integrate e-commerce (Shopify or Square)<br>– Add Google Maps, calendar for events                     | Week 5 (5 days)        |
| **Testing & QA**            | – Cross-browser testing (Chrome, Safari, Firefox) & mobile device QA<br>– Accessibility audit & fixes<br>– Performance tuning & Lighthouse checks                    | Week 6 (3 days)        |
| **Launch & Handoff**        | – Final content proofreading & SEO review<br>– Deploy to production domain (smallandlocalbeer.co)<br>– Configure analytics & monitor initial traffic                 | Week 6 (2 days)        |

After launch, reserve 1–2 weeks for “post-launch support”: bug fixes, minor tweaks, and handing off documentation for site maintenance.

---

## 9. Maintenance & Ongoing Updates

1. **Content Updates**

   * Ensure non-technical staff can log into the CMS to add new beers, events, or blog posts without deploying code.
   * Provide a written guide (1–2 pages) on how to:

     1. Add a new beer (title, description, images, ABV, flavor notes, availability).
     2. Update taproom hours (date/time fields).
     3. Publish a blog post.

2. **Security & Backups**

   * If using WordPress, set up daily backups and security plugin (e.g., Wordfence).
   * For static site (Next.js/Gatsby), ensure the headless CMS has role-based access and version history.

3. **Performance Monitoring**

   * Schedule monthly Lighthouse audits.
   * Monitor Google Analytics and Search Console for crawl errors or performance dips.

4. **SEO Refresh**

   * Update “Our Story” page if company milestones occur (e.g., releasing a new flagship beer).
   * Collect user feedback for continuous improvement—e.g., “Do you find everything you need?” form in footer.

5. **Event Calendar Management**

   * Use a simple calendar plugin (e.g., a headless CMS collection or a Google Calendar embed) so that marketing/events staff can update without developer intervention.

---

## 10. Summary of Key Improvements

* **Brand Alignment**: Replace all instances of “Original Local Beers” with “Small and Local Beer Co.” and roll out a fresh logo, color palette, and typography. ([localbeers.ca][1])
* **Cleaner Navigation**: Simplify menu into logical sections (Beers, Taproom, Order, About, Contact) with clear CTAs.
* **Better Content Hierarchy**: Move away from repeated Instagram posts toward structured beer listings, an events calendar, and a concise brand story. ([localbeers.ca][2], [localbeers.ca][1])
* **Integrated Shopping Experience**: Embed e-commerce so customers never have to navigate to a separate store, reducing friction.
* **SEO & Performance**: Optimize images, meta tags, and use modern build tools (Next.js/Gatsby) or a lightweight CMS to improve page speed and search rankings.
* **Mobile-First Design**: Ensure all pages adapt smoothly to smartphones/tablets, with large tap targets and fast load times.

By following this plan—starting with a brand-driven visual identity, moving through content architecture and technical setup, and ending with thorough QA and SEO—Small and Local Beer Co. will have a modern, performant, and user-friendly website that reflects the company’s community focus and high-quality beer offerings.

[1]: https://www.localbeers.ca/ "Local Lager | Ottawa | Original Local Lager"
[2]: https://www.localbeers.ca/?utm_source=chatgpt.com "Local Lager | Ottawa | Original Local Lager"
[3]: https://www.localbeers.ca/about-us-1?utm_source=chatgpt.com "ABOUT US | Local Lager"
[4]: https://www.instagram.com/small.and.local.beer/?hl=en&utm_source=chatgpt.com "Small & Local Beer Co. - Instagram"
