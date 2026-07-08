# The Well Shrewsbury Website

Static church website for The Well, Shrewsbury (React + TypeScript + Vite).

## Run locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local` in the project root and set your Web3Forms access key:
   ```
   VITE_WEB3FORMS_KEY=YOUR_ACCESS_KEY_HERE
   ```
   Get a free key at [web3forms.com](https://web3forms.com). Replace the placeholder with your real key before testing form submissions.
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The output is written to `dist/`. Deploy that folder to Hostinger (or any static host).

## Environment variables

| Variable | Required | Notes |
|----------|----------|-------|
| `VITE_WEB3FORMS_KEY` | Yes, for forms | Used by the Plan Your Visit and Contact forms. Set in `.env.local` for local builds, and also set as an environment variable on Hostinger before deploying, then rebuild so Vite can embed it. |

`.env.local` is gitignored via `*.local` — do not commit real keys.
