# pevc website

next.js site for the wharton pevc club.

## run it locally

you need node installed ([nodejs.org](https://nodejs.org) if you don’t have it).

```bash
npm install
npm run dev
```

then open [http://localhost:3000](http://localhost:3000) in your browser. the page refreshes when you save changes to the code.

## where things live

- **homepage** → `app/page.tsx`
- **other pages** (events, team, contact, etc.) → `app/[page-name]/page.tsx`
- **event list** (dates, titles, images) → `app/data/events.ts`
- **images** → `public/` (reference them like `/events/event-11.webp`)
