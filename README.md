# yyagoub.github.io

Personal portfolio for Yousef Yagoub — bilingual (EN/AR), deployed to [yyagoub.github.io](https://yyagoub.github.io).

## Quick start

```bash
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # production build → dist/
npm run deploy   # build + push to GitHub Pages
```

## Pages

| Route | What's there |
|-------|-------------|
| `/` | Hero and ecosystem diagram |
| `/about-me` | Story, values, metrics, growth |
| `/portfolio` | Platforms and experience timeline |
| `/contact` | Email, LinkedIn, GitHub |

## Repository map

```
src/
├── pages/          # one file per route above
├── components/     # shared UI building blocks
├── data/site.jsx   # structural data (section keys, contact links)
├── i18n/           # language config + EN/AR locale files
├── style.css       # full design system (tokens, components)
└── util/routes.jsx # route definitions

documentations/     # design and content intent
├── taste.md        # design references and direction
├── ui.md           # visual design system
├── ux.md           # behavior, i18n, accessibility, responsive
├── pages-structures.md  # page layout and component tree
├── my-content.md   # copy, positioning, and content decisions
└── config.md       # setup and run guide
```
