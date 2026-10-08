# CLAUDE.md: The Well Shrewsbury website

Context for an AI assistant working in this repository. For the full handover, see `260728-Handover Brief.md`. For admin tasks (Hostinger, email, notice board), see `CHEATSHEET.md`.

## What this is

- Church website for The Well Shrewsbury. Live at thewellshrewsbury.com.
- Repository: github.com/Daveflyon/The-Well-Shrewsbury-Website (private, branch `main`).
- Stack: React, TypeScript, Vite, Tailwind. Routing uses BrowserRouter.
- Pages: Home, Plan Your Visit, Sundays, About, Next Steps, Contact. Page components live in `pages/`, shared pieces in `components/`.

## Commands

- `npm run dev` runs the site locally (prints a localhost link).
- `npm run build` builds into `dist/`.
- Pushing to `main` auto-deploys to Hostinger. Deploys take a minute or two.

## Rules to keep

- **Never commit `.env.local`.** It holds keys. The live keys are set in Hostinger's environment variables.
- **Do not remove `public/.htaccess`.** It provides the single page app fallback, so direct visits and refreshes work.
- **Image filenames must match case exactly** and use lowercase names. The live server is case sensitive.
- **Web3Forms: hCaptcha must stay off** in the dashboard, or every form submission is blocked.
- House style: British English, no em or en dashes.

## Content that changes over time

- **Notice Board:** the homepage reads notices from a Google Sheet via `components/Notices.tsx`. Leaders add rows themselves, so no deploy is needed. The sheet must stay shared as "Anyone with the link: Viewer".
- **Seasonal adverts:** remove them once the event ends, and check the Handover Brief for what is currently live.

## Change log

Newest first. Add an entry for each change, with the date, what changed, and the commit.

- **2026-10-08**: Removed the expired Summer Holiday Football advert from the homepage and the Sundays page (`8c9c77e`). Deleted its flyer image `public/images/football-sessions.jpg` (`c9ba7d4`). Added this CLAUDE.md and updated the Handover Brief.
- **2026-08-03**: Moved the Notice Board below the hero verse, above the football banner (`c41097c`). Notice Board is now reading from the live Google Sheet.
- **2026-07-28**: Replaced David's leadership photo with an updated photo (`9e79691`).
- **2026-07-25**: Added the Notice Board heading and the live Notices board that reads from the Google Sheet (`d237efb`, `30d9d8f`).
- **2026-07-18**: Summer Holiday Football Sessions advert added to the homepage and Sundays page, then moved to the top of the Sundays page (`d8a6cc0`, `fd7591b`, `88e4de5`). Added to Church Events (`16b7517`). Hero and "Where to find us" buttons given a raised look (`a265be7`, `6938db3`). Header button changed to "Where to find us" (`dc82ddc`). "Get Directions" now points to the Plan Your Visit page (`c6aede0`). "The Well" kept together in the Plan Your Visit heading (`a1ebc97`).
- **2026-07 (launch pass)**: Homepage rebuilt. Contact and Plan Your Visit forms work end to end. Clean URLs added. Production readiness audit recorded in `AUDIT-REPORT.md`.
