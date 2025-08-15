# Portfolio

Simple personal portfolio built with Next.js + TypeScript and Tailwind CSS. The project includes an animated, per-letter name header (app/page.tsx) and component sections for projects, skills, and contact.

## Tech
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React icons / custom components

## Requirements
- Node.js 16+ (recommended 18+)
- npm or pnpm

## Quick start (Windows)
1. Install dependencies
   - npm:
     ```
     npm install
     ```
   - pnpm:
     ```
     pnpm install
     ```
2. Run dev server
   ```
   npm run dev
   ```
3. Build
   ```
   npm run build
   ```
4. Start production
   ```
   npm run start
   ```

## Where to edit
- Main landing content and animated name: `app/page.tsx`
  - Change the displayed name or animation timing in that file.
  - Font for the animated name is imported inline in `app/page.tsx` (Poppins by default). To change fonts globally, add a Google Fonts import to your global CSS or <head> and update the CSS variable in `page.tsx`.

## Environment
- `.env*` files are gitignored. Add any required env vars locally.

## Deployment
- Optimized for Vercel — push to a Git remote and import the repo in Vercel for instant deployment.

## Contributing
- Make a branch, open a PR. Keep changes concise and focused.

## License
- Add a license file (e.g., MIT) if you want to open-source
