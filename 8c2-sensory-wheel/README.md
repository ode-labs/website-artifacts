# 8C2 Sensory Wheel

**8 senses, choose 2 — an ode to combinatorics.**

An interactive spinning wheel for exploring all 28 unique pairings of Ode's eight sensory systems: taste, scent, touch, sight, sound, space, time, and system.

Built for Ode Labs.

---

## The Math

C(8,2) = 8! / (2! × 6!) = **28 unique pairs**

Every combination of two senses from eight, with no repeats and no regard for order. Each spin lands on a pair worth exploring.

---

## Features

- **Spinning wheel** with smooth eased animation across all 28 sensory pairs
- **Mark as explored** to remove a pair from the wheel once discussed
- **Backlog** of completed pairs with timestamps
- **Progress saved automatically** via `localStorage` — your state persists across sessions and page refreshes
- **Progress bar** tracking how many of the 28 pairs have been explored
- **Reset** option to start fresh

---

## How Progress is Saved

Progress is stored in your **browser's `localStorage`** under the key `ode-8c2-state`. This means:

- ✅ Persists across page refreshes and browser restarts
- ✅ No account or login required
- ✅ Works offline
- ⚠️ Tied to the specific browser and device you're using
- ⚠️ Clearing browser data / cookies will reset progress
- ⚠️ Not synced across devices

To export or back up your state, open DevTools → Application → Local Storage and copy the `ode-8c2-state` value.

---

## The 28 Pairs

| # | Pair |
|---|------|
| 1 | Taste & Scent |
| 2 | Taste & Touch |
| 3 | Taste & Sight |
| 4 | Taste & Sound |
| 5 | Taste & Space |
| 6 | Taste & Time |
| 7 | Taste & System |
| 8 | Scent & Touch |
| 9 | Scent & Sight |
| 10 | Scent & Sound |
| 11 | Scent & Space |
| 12 | Scent & Time |
| 13 | Scent & System |
| 14 | Touch & Sight |
| 15 | Touch & Sound |
| 16 | Touch & Space |
| 17 | Touch & Time |
| 18 | Touch & System |
| 19 | Sight & Sound |
| 20 | Sight & Space |
| 21 | Sight & Time |
| 22 | Sight & System |
| 23 | Sound & Space |
| 24 | Sound & Time |
| 25 | Sound & System |
| 26 | Space & Time |
| 27 | Space & System |
| 28 | Time & System |

---

## Tech Stack

- **React 18** + **Vite**
- **HTML5 Canvas** for the wheel (DPI-scaled for crisp text on retina displays)
- **localStorage** for persistence
- Zero external dependencies beyond React

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Deploy to Netlify

### Option A — Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option B — GitHub + Netlify UI

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Connect your GitHub repo
4. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click Deploy

The `netlify.toml` in the root handles all configuration.

---

## Project Structure

```
8c2-sensory-wheel/
├── index.html          # Entry point
├── vite.config.js      # Vite config
├── netlify.toml        # Netlify build + redirect config
├── package.json
├── README.md
└── src/
    ├── main.jsx        # React root
    └── App.jsx         # Main component (wheel, state, UI)
```

---

## Ode

Ode is an independent research platform exploring intelligence as perception across eight sensory systems. This tool is part of **Ode Labs** — technical tools and interactive frameworks.

[ode.so](https://ode.so)
