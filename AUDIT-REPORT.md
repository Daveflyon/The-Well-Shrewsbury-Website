# Production readiness audit — The Well Shrewsbury

Date: 8 July 2026 (updated after remediation pass)  
Scope: current uncommitted Stage 1 site (React + TypeScript + Vite)

---

## Summary

The site is **production-ready** for Stage 1 after remediating the open audit items.

- `npm run build`: **pass** (clean, no CSS warning)
- `npx tsc --noEmit`: **pass**
- All referenced images exist with **exact case** matches
- Dead `#` links removed; real charity number set
- Gemini / AI Studio config removed
- Forms wired to **Web3Forms** via `VITE_WEB3FORMS_KEY`
- Open Graph / Twitter preview images wired

Nothing has been committed or pushed. Forms need a real Web3Forms key in `.env.local` (local) and Hostinger env (deploy build) before live submissions work.

---

## Issues found and fixed (earlier audit)

1. Removed dead `/index.css` link (build warning gone)
2. Removed unused `CHURCH_INFO` import on Next Steps
3. Removed dead unused schedule `note` field
4. Sanitized Plan Your Visit `tel:` href

---

## Issues needing decision — now resolved

### A. Footer placeholder links and Charity number — RESOLVED

- Removed Privacy Policy and Terms `#` links
- Replaced Charity `#123456` with plain text: **Registered Charity No. 1087896**
- No other `#123456` instances remain in app code

### B. Contact social `#` links — RESOLVED

- Removed YouTube and Spotify icon links and the Social block entirely
- Call / Address layout left balanced (Call sits alone under the address section)

### C. Leftover Gemini AI Studio config — RESOLVED

- Removed Gemini `define` / `loadEnv` usage from `vite.config.ts`
- Rewrote `README.md` for The Well (local run, Web3Forms env, Hostinger note)
- Build still passes

### D. Unused images — RESOLVED

- Deleted `public/images/bridge1.jpg`
- Deleted `public/images/The Well Logo White background.png`
- Kept `public/images/the-well-logo.png` for social preview

### E. Sundays Unsplash stock — DEFERRED (Stage 2)

Unchanged by design until a church photo is supplied.

### F. Global Vision "Photo coming soon" — DEFERRED (Stage 2)

Unchanged by design.

### G. Forms with no backend — RESOLVED

- Shared helper: `lib/web3forms.ts`
- `VisitForm` and Contact form submit to `https://api.web3forms.com/submit`
- Key from `import.meta.env.VITE_WEB3FORMS_KEY` (not hardcoded)
- Success + failure UI (failure falls back to email/phone)
- `.env.local` placeholder created with `YOUR_ACCESS_KEY_HERE`
- README documents Hostinger env requirement

### H. Duplicate phone fields — DEFERRED

Harmless; left as-is.

### I / J. Favicon script / HashRouter — unchanged, acceptable for Hostinger static hosting

---

## Asset integrity (case-sensitive)

| Reference | Status |
|-----------|--------|
| `/images/Harry.png` | OK |
| `/images/James.png` | OK |
| `/images/Kate.png` | OK |
| `/images/David.jpg` | OK |
| `/images/Mohamed.png` | OK |
| `/images/shrewsbury-town-square.jpg` | OK |
| `/images/the-well-mark.png` | OK |
| `/images/the-well-sign.jpg` | OK |
| `/images/the-well-logo.png` | OK (OG / Twitter) |
| `/images/favicon-32.png` | OK |
| `/images/apple-touch-icon.png` | OK |

---

## Social share preview

In `index.html`:

- `og:title` / `twitter:title`: The Well – Shrewsbury
- `og:description` / `twitter:description`: welcoming church description
- `og:image` / `twitter:image`: `/images/the-well-logo.png`

**Note for Hostinger go-live:** some social scrapers prefer an absolute image URL (`https://your-domain/images/the-well-logo.png`). Relative paths may work for same-origin previews; update to the live absolute URL if Facebook/X fail to show the logo.

---

## Environment

| Variable | Status |
|----------|--------|
| `VITE_WEB3FORMS_KEY` | Placeholder in `.env.local` (gitignored via `*.local`) |
| Hostinger | Must set same variable and rebuild so Vite embeds it |

---

## Anything still deferred (Stage 2 / ops)

- Replace Sundays Unsplash image with a church photo
- About Global Vision photo
- Paste real Web3Forms key into `.env.local` and Hostinger before expecting form emails
- Optionally switch OG image meta to absolute live URL after domain is final

---

## Verification (this pass)

```
npm run build     → success, no warning
npx tsc --noEmit  → success
```
