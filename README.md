# TrackEmAll — Deployment Guide

## Folder Structure
```
trackemall/
├── public/
│   ├── index.html       ← Main vault app
│   ├── card-grader.html ← AI card grader
│   ├── manifest.json    ← PWA manifest
│   ├── sw.js            ← Service worker (offline support)
│   └── icons/
│       ├── icon-192.png ← App icon (home screen)
│       └── icon-512.png ← App icon (splash screen)
└── vercel.json          ← Vercel routing config
```

## Deploy to Vercel (Step by Step)

### Option A — Drag & Drop (Easiest)
1. Go to https://vercel.com/new
2. Click **"Browse"** or drag the entire `trackemall` folder onto the page
3. Vercel auto-detects it as a static site
4. Set the **Root Directory** to `public` when prompted
5. Click **Deploy**
6. Your app is live at `https://your-project.vercel.app`

### Option B — GitHub (Recommended for updates)
1. Create a new GitHub repo (free at github.com)
2. Upload the `trackemall` folder contents to the repo
3. Go to https://vercel.com/new → Import Git Repository
4. Connect your GitHub account and select the repo
5. Set **Root Directory** to `public`
6. Click **Deploy**
7. Every time you push changes to GitHub, Vercel redeploys automatically

### Option C — Vercel CLI
```bash
npm install -g vercel
cd trackemall
vercel --prod
```

## Custom Domain
1. In Vercel dashboard → your project → Settings → Domains
2. Add your domain (e.g. trackemall.app)
3. Update your domain's DNS to point to Vercel (they give you exact instructions)

## Install as Phone App (PWA)

### iPhone / Safari
1. Open your Vercel URL in Safari
2. Tap the Share button (box with arrow)
3. Scroll down → tap "Add to Home Screen"
4. Tap "Add" — TrackEmAll icon appears on your home screen

### Android / Chrome
1. Open your Vercel URL in Chrome
2. Tap the three-dot menu → "Add to Home Screen"  
   OR wait for the "⬇ INSTALL APP" banner to appear at the top of the page
3. Tap Install

## Notes
- The app works offline once installed (cards load from cache)
- Card data is stored in your browser's localStorage on each device
- Use the 💾 BACKUP → ↓ SAVE button regularly and store the .json file safely
- The AI card grader requires an internet connection (it calls the Claude API)
