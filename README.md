# Portfolio (Next.js + React)

## Project overview
This is a personal portfolio built with Next.js (App Router) and React. It showcases projects, an About section (with LinkedIn + resume), and a contact form that sends messages via an email API (nodemailer by default). The site serves static assets from the `public/` folder.

Key folders & files
- app/ — Next.js app routes & pages
- app/api/contact/route.ts — server API that sends email
- components/About.tsx — About / LinkedIn / Resume UI
- components/Projects.tsx — Projects list and links
- public/ — static assets (images, resume.pdf)

## Features
- Project cards with "Live Demo" and "Source Code" links (require full URLs with `https://`).
- About section with LinkedIn link and Resume link.
- Contact form API that attempts SMTP delivery (with dev fallbacks).
- Dev-friendly fallbacks: Ethereal / jsonTransport when SMTP is unavailable.

## Quick start (Windows)
1. Clone / open the repo
   ```powershell
   cd c:\Users\holuw\Downloads\portfolio
   npm install
   ```
2. Start dev server
   ```powershell
   npm run dev
   ```
3. Open in browser:
   - Local site: http://localhost:3000
   - Public static file URL example (resume): http://localhost:3000/resume.pdf (if `public/resume.pdf` exists)

## Environment variables
Create a `.env.local` in the project root with one of these setups.

Option A — SMTP (nodemailer)
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=you@example.com
SMTP_PASS=yourpassword
SMTP_FROM=you@example.com            # verified sender for provider
CONTACT_EMAIL=recipient@example.com  # where to deliver messages
SMTP_SECURE=false                    # true for 465, false for 587
```

Option B — SendGrid (HTTPS API, recommended if SMTP is blocked)
```
SENDGRID_API_KEY=SG.xxxxxx
SENDGRID_FROM=you@example.com
CONTACT_EMAIL=recipient@example.com
```

Notes:
- Always include `https://` in external links (Live, Github, LinkedIn).
- If using Gmail, use an App Password or OAuth2 and set `SMTP_FROM` to an allowed address.

## Common tasks

Add a resume served by the site
- Put `resume.pdf` in `public/` (project root)
- Link in About: `<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>`
- Local dev: http://localhost:3000/resume.pdf

Add / update a project
- Edit `components/Projects.tsx` and set fields:
  `{ title, description, tech, github, live, image }`
- Use full URLs including `https://` for `github` and `live`.

Make Source Code / Live Demo links open
- Ensure `github` and `live` fields are full absolute URLs (`https://...`).
- If you provide `"#"` or omit, the UI intentionally disables the link.

LinkedIn link showing relative path
- Always prefix external links with `https://` (e.g. `https://www.linkedin.com/in/...`) or browser will treat them as relative.

Resume open behavior
- To open external resume: use an anchor with `target="_blank"` and a public URL (see above).

## Debugging contact/email issues

Symptoms
- API returns 500 and logs `ETIMEDOUT` or `Connection timeout`.
- Logs show fallback to Ethereal or jsonTransport, and email is not actually delivered.

Root causes
- Outbound SMTP ports (587/465) are blocked (common on some networks, Docker/WSL, or cloud hosts).
- Incorrect SMTP credentials or unverified `from` address.
- Provider rejects message silently (check provider logs).

Debugging steps (Windows PowerShell)
```powershell
# check network connectivity to SMTP host
Test-NetConnection smtp.gmail.com -Port 587

# check a specific SMTP IP: replace IP shown in logs
Test-NetConnection -ComputerName 95.216.108.161 -Port 587
```

If `Test-NetConnection` times out or fails, either:
- Disable VPN / firewall or run outside WSL/Docker, or
- Use an HTTP mail provider (SendGrid/Mailgun) that uses HTTPS (not blocked by SMTP port rules).

Log more data
- The API logs `sendMail` response (messageId, accepted/rejected) when SMTP succeeds — inspect those logs to confirm acceptance.

Dev fallback behavior
- When SMTP fails, the route may create an Ethereal test account (requires network) or fall back to nodemailer's `jsonTransport` (no network) — `jsonTransport` only returns message payload and does not deliver mail.

Return values
- The API returns `{ ok: true, messageId }` on success. If the route returns `ok: true` but delivery not received, check provider logs/spam folder and ensure `CONTACT_EMAIL` is correct.

## Next.js dev origin warning
If you see:
```
Cross origin request detected from 172.30.32.1 to /_next/* resource...
```
Add `allowedDevOrigins` to `next.config.js` when required. Example:
```js
// next.config.js
module.exports = {
  experimental: { appDir: true },
  allowedDevOrigins: ["http://172.30.32.1:3000"],
}
```

## Tailwind / hover issues
If hover classes (e.g., `hover:bg-black`) don't appear to work:
- Restart dev server (`npm run dev`) to ensure Tailwind rebuild.
- Inspect element in DevTools and check computed styles & pointer-events.
- Make sure no overlaying element covers the clickable link (try adding `outline` temporarily).

## Deployment
- Deploy to Vercel / Netlify / similar.
- Upload `public/` assets to the host or keep in the repo (Vercel serves `public/` automatically).
- Set environment variables in the deployment platform dashboard (do not commit .env.local).

## Contributing
- Open issues or PRs for fixes or feature suggestions.
- Keep changes focused and provide screenshots or steps to reproduce.

## License
MIT
