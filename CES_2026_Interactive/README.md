# CES 2026 Sensory Graph

An interactive visualization of 49 products from CES 2026, mapped by how they reach you—through sight, sound, touch, taste, scent, space, time, and the systems that connect them.

**Live Site:** [ces2026-sensory-graph.netlify.app](https://ces2026-sensory-graph.netlify.app)

---

## What This Is

This is an ode to how we perceive and make meaning. Every product at CES promises to change your life, but they all have to reach you somehow—through your senses, your environment, or the invisible systems running in the background.

This map organizes 49 products into 8 categories:

| Sense | Products | What It Covers |
|-------|----------|----------------|
| 👁️ Sight | 10 | Displays, cameras, mirrors, imaging |
| 🔊 Sound | 9 | Speakers, translation, audio AI |
| 🤚 Touch | 8 | Wearables, grooming, haptics |
| 👅 Taste | 6 | Food tech, hydration, kitchen AI |
| 👃 Scent | 1 | Aromatherapy, fragrance |
| 🏠 Space | 2 | Smart homes, transformable environments |
| ⏳ Time | 2 | Sleep, recovery, therapy |
| 🔗 System | 11 | Hubs, robots, connectivity |

---

## How to Navigate

### The Graph

- **Pan** — Click and drag anywhere on the background to move around
- **Zoom** — Scroll (mouse wheel) to zoom in and out
- **Mobile** — Pinch to zoom, drag to pan

### Clicking Nodes

There are three types of clickable elements:

1. **Center Node (Ode by Muno)** — Click to read the philosophy behind this map

2. **Sense Nodes** — The 8 colored circles around the center. Click any to read analysis of that sensory category—what stood out, what the opportunities are, and what the challenges might be.

3. **Product Nodes** — The smaller circles at the edges. Click any product to see:
   - What it is (detailed description)
   - Value proposition
   - Why it matters
   - Skepticism (critical perspective)
   - Link to learn more

### Closing Modals

- Click the **×** button
- Click outside the modal
- Press **Escape**

---

## The Categories

### Sight 👁️
The most crowded category. Vision is the easiest sense to build tech around—cameras, screens, and imaging have decades of foundation. What stood out were products that went beyond just showing things.

### Sound 🔊
Going in two directions: output (speakers, music, translation) and input (always-listening devices). Sound is personal and moves through your body, which makes it exciting but raises trust questions.

### Touch 🤚
The most personal category. These products come into direct contact with your body—showers, hair tools, skincare, knives. Tech is moving into grooming, cooking, and healing.

### Taste 👅
Not really about flavor. These products are about safety and control—allergen testing, hydration tracking, smart fridges. Helping people trust what they consume.

### Scent 👃
Only one product. Smell is hard to measure and standardize, deeply tied to memory and emotion. That's what makes it interesting, and why this category is still so small.

### Space 🏠
The environment itself becomes the interface. Homes and spaces that adjust to how you live instead of forcing you to adapt.

### Time ⏳
Patterns over hours and days, not quick moments. Helping people rest, recover, and move through their day more smoothly.

### System 🔗
The biggest category. Once tech is collecting information from all the senses, something has to connect it all. This is where decisions get made.

---

## Credits

Data sourced from CES 2026 Innovation Awards and product announcements.

---

## Technical Details

Built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step.

- `index.html` — SVG graph and modal structure
- `styles.css` — Styling and responsive design
- `data.js` — Product and sense data
- `app.js` — Interactivity (pan, zoom, modals)

Hosted on Netlify.
