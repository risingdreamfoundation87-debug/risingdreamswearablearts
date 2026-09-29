# Rising Dreams Wearable Arts

## Project Overview

This project is a public recruitment website and printable program starter packet for Rising Dreams Wearable Arts, a creative youth and family program serving ages 6–17. It combines program storytelling, an interest form, and a multi-page handbook that can be printed or saved as a PDF from the browser.

## Technology

- TanStack Start with React 19 and file-based routing
- TypeScript in strict mode
- Tailwind CSS 4 plus custom global CSS
- Lucide React icons
- Netlify Forms for interest submissions
- Netlify deployment through the TanStack Start Vite plugin

## Key Files

- `src/routes/index.tsx` — Complete public site, Netlify interest form, and printable packet components
- `src/routes/__root.tsx` — Page metadata, favicon, and root document
- `src/styles.css` — Brand system, responsive layouts, form styles, and print-specific page rules
- `public/__forms.html` — Static Netlify Forms detection skeleton; field names must mirror the React form
- `public/images/` — Local editorial photography used by the site
- `netlify.toml` — Build and publish configuration

## Conventions

- Keep the public experience accessible, welcoming, youth-centered, and sensory-conscious.
- Use `Fredoka` for expressive headings and `DM Sans` for body content.
- Preserve the established purple, yellow, coral, mint, cream, and ink palette.
- Keep printable content inside `.print-packet` and each printed sheet inside `.packet-page`.
- When adding or renaming an online form field, update both `src/routes/index.tsx` and `public/__forms.html`.
- Submit Netlify Forms as URL-encoded data to `/__forms.html`, not to `/`.
- Avoid collecting detailed medical or accommodation information through the public interest form; that information belongs in the printable registration packet.

## Non-Obvious Decisions

- The detailed registration, permission, media release, and code-of-conduct forms are printable rather than publicly submitted online because they include signatures and potentially sensitive participant information.
- Browser print styles hide the recruitment website and print only the starter packet on US Letter pages.
- The interest form collects only contact details and participation interests so the organization can announce registration, volunteer, sponsor, and partnership opportunities.

## Local Development

Use `pnpm dev` for local UI work. Netlify Forms registration and submission behavior must be tested on a deployed Netlify preview.
