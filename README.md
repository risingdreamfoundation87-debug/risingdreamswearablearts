# Rising Dreams Wearable Arts

A colorful, responsive recruitment website and ready-to-print program handbook for Rising Dreams Wearable Arts. The experience introduces the youth program, explains its monthly projects and confidence-building mission, invites families and community supporters to join, and includes an official starter packet for running the program consistently.

## Features

- Recruitment landing page for young artists ages 6–17
- Program overview, project gallery, weekly format, and 12-month calendar
- Showcase and Artist Passport sections
- Netlify-powered interest form for families, volunteers, artists, sponsors, donors, and partners
- Print-ready youth registration and parent permission forms
- Photo/media release and participant code of conduct
- Volunteer application, attendance sheet, supply list, staff checklist, success tracker, and family promise
- Responsive mobile navigation and accessible form feedback
- Dedicated US Letter print styles for saving the starter packet as a PDF

## Technology

- TanStack Start
- React 19
- TypeScript
- Vite
- Tailwind CSS 4 and custom CSS
- Lucide React
- Netlify Forms

## Run Locally

```bash
pnpm install
pnpm dev
```

The local Vite server uses the port configured by the project. For full Netlify emulation, use the Netlify CLI from the repository root.

## Form Handling

The public interest form submits to Netlify Forms. Its static detection markup is in `public/__forms.html`; keep its form name and fields synchronized with the React form in `src/routes/index.tsx`.

Netlify Forms should be verified on a deployed preview because form registration does not run in a standard local Vite session.

## Printing the Packet

Select **Print starter packet** or **Print or save as PDF** on the website. Browser print styles automatically hide the recruitment sections and format the handbook as US Letter pages.
