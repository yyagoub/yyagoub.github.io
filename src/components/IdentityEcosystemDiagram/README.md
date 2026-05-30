# Identity Ecosystem Diagram Component

## Overview

A hub-and-spoke visualization component that displays a central "Identity" node connected to surrounding platform/project nodes. This diagram illustrates how various platforms (Nafath, Absher Bio, Dakhli, Fingerprint, Mobile Verification) are connected to a central identity hub.

## Purpose

- Visually communicate the relationship between the central identity system and multiple platforms
- Show how different services/platforms connect to a core identity infrastructure
- Provide an engaging visual representation on the homepage hero section

## Component Structure

### Files
- `IdentityEcosystemDiagram.jsx` - Main component file
- `README.md` - This documentation file

### Key Concepts

**Hub-and-Spoke Pattern:**
- Central hub node in the middle
- Platform nodes positioned around the hub in a circular pattern
- Connecting edges (lines) from hub to each platform

**Positions:**
```
         Top (240, 55)
              |
        ___---+---___
      /               \
 TL (72,150)    TR (408,150)
      \               /
        ---___+___---
              |
      Center Hub (240, 195)
              |
        ___---+---___
      /               \
 BL (150,330)   BR (330,330)
      \               /
        ---___+___---
              |
```

## Customization Guide

### 1. Change Node Positions

Edit the `NODES` array in `IdentityEcosystemDiagram.jsx`:

```javascript
const NODES = [
  { x: 240, y: 55 },   // top
  { x: 408, y: 150 },  // top-right
  { x: 330, y: 330 },  // bottom-right
  { x: 150, y: 330 },  // bottom-left
  { x: 72, y: 150 },   // top-left
];
```

**Coordinate System:**
- `x`: 0 (left) to 480 (right)
- `y`: 0 (top) to 390 (bottom)
- SVG viewBox: `"0 0 480 390"`

### 2. Change Hub Position

Edit the `HUB` object:

```javascript
const HUB = { x: 240, y: 195 };  // Center coordinates
```

**Hub Size:** Fixed 156px wide × 46px tall with rounded corners (rx="23")

### 3. Add or Remove Platforms

The component automatically pulls platforms from the `platforms` array in `src/data/site.jsx`. To add/remove platforms:

1. Update `src/data/site.jsx`:
   ```javascript
   export const platforms = [
     'nafath',
     'absherBio',
     'mobileVerification',
     'fingerprint',
     'dakhli',
     // Add or remove here
   ];
   ```

2. Add corresponding positions to `NODES` array (must match count)

### 4. Styling

All visual styling is in `src/style.css`. Relevant classes:

```css
.diagram              /* SVG container */
.edge                 /* Connecting lines */
.node                 /* Platform circles */
.node-hub            /* Central hub rectangle */
.hub-label           /* Hub text */
.node-label          /* Platform labels */
.hero-visual         /* Wrapper figure */
.diagram-caption     /* Accessibility caption */
```

Example customizations:
```css
.edge {
  stroke: #0f766e;        /* Change connection color */
  stroke-width: 2;        /* Change line thickness */
}

.node {
  fill: #0f766e;          /* Change node color */
}

.hub-label {
  font-size: 14px;        /* Change hub text size */
  font-weight: 600;       /* Change weight */
}
```

### 5. Change Labels (Internationalization)

Edit `src/i18n/locales/en.json` and `src/i18n/locales/ar.json`:

```json
{
  "hero": {
    "ecosystemCenter": "Identity",      // Hub label
    "ecosystemAria": "...",             // Accessibility label
    "ecosystemCaption": "..."           // Caption below diagram
  }
}
```

## Usage

```jsx
import IdentityEcosystemDiagram from './IdentityEcosystemDiagram/IdentityEcosystemDiagram.jsx';

// In your component:
<IdentityEcosystemDiagram />
```

## Accessibility

- Uses semantic SVG `<figure>` and `<figcaption>` elements
- `role="img"` on SVG with `aria-label` for screen readers
- Text labels are included in the visual (not hidden)
- Supports both English and Arabic (RTL) text direction

## Future Enhancements

Ideas for expanding this component:

- [ ] **Interactive nodes** - Click/hover to show platform details
- [ ] **Animated connections** - Lines animate on page load
- [ ] **Dynamic platform count** - Automatically arrange N platforms in a circle
- [ ] **Color coding** - Different colors for different platform categories
- [ ] **Hover effects** - Highlight connections on node hover
- [ ] **Modal integration** - Click nodes to open detailed platform information
- [ ] **Responsive scaling** - Better adapt to mobile/tablet screens
- [ ] **SVG animation** - Pulsing hub, animated edges on load

## Related Files

- `src/components/Hero.jsx` - Uses this component
- `src/data/site.jsx` - Defines platform list
- `src/i18n/locales/en.json` - English text content
- `src/i18n/locales/ar.json` - Arabic text content
- `src/style.css` - Styling for diagram elements

## Notes

- The component is **decorative by default** (styled for visual appeal on desktop)
- Caption text provides text-only alternative for screen readers
- Dimensions optimized for desktop hero section
- Consider adding CSS media queries for responsive behavior on mobile
