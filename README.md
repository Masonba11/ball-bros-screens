# Ball Bros Screens

Marketing site for Ball Bros Screens — custom solar screen installation in the East Valley, Arizona.

## Stack

- [Vite](https://vitejs.dev/) + React 18
- React Router 7
- Deployed on [Vercel](https://vercel.com/)

## Development

```bash
npm install
cp .env.example .env   # set real phone, email, and optional form endpoint
npm run dev
```

## Production build

```bash
npm run build
npm run preview   # test the production build locally (use this for Lighthouse)
```

SEO files (`sitemap.xml`, `robots.txt`, `site.webmanifest`, `llms.txt`) are generated automatically during `npm run dev` and `npm run build`.

## Asset scripts

```bash
npm run generate:logo-footer   # regenerate logo-footer.png from logo.png
node scripts/generate-og-image.js   # regenerate public/og-image.jpg
```

## Environment variables

See `.env.example`. Set the same `VITE_*` values in Vercel project settings before deploying.

- **Required for production:** real phone, email, and domain
- **Optional:** `VITE_FORM_ENDPOINT` — POST URL for the contact/quote form (e.g. Formspree)

## Project structure

```
src/
  components/   # shared UI
  config/       # env → site config
  data/         # routes, cities, FAQs, content
  pages/        # route pages
  utils/        # JSON-LD helpers
public/         # static assets + generated SEO files (gitignored where noted)
scripts/        # sitemap, logo, OG image generators
middleware.js   # Vercel edge 404 for unknown paths
```
