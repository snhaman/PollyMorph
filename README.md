# PollyMorph

**The unified design system token file for Elucidata / Polly.**

PollyMorph consolidates all design tokens — color, typography, spacing, elevation, radius, component states, and semantic component tokens — into a single source of truth: `PollyMorph.json`.

---

## Structure

```
PollyMorph.json
├── meta              # Name, version, description
├── core/             # Primitive tokens
│   ├── color         # Brand, primary, secondary, neutral, surface, platform
│   ├── elevation     # Box shadow scale (none → xl)
│   ├── font          # Family, size, weight, line-height, letter-spacing
│   ├── radius        # Border radius scale (none → full)
│   ├── spacing       # Spacing scale (0 → 16)
│   └── state         # Hover, active, disabled, focus modifiers
└── semantic/         # Component-level tokens
    ├── accordion     # Panel, header, title, icon, content, variants, states, sizes
    ├── button        # Base, variants (primary/secondary/tertiary/elevated/tonal), sizes
    └── card          # Background, border, radius, shadow, states, variants
```

Individual source files are kept under `core/` and `symantic/` for reference. `PollyMorph.json` is the single file you should consume in tooling.

---

## Token References

Semantic tokens use curly-brace references to core tokens, e.g.:

```
"{color.primary.purple|mix:80:black}"
"{font.size.title.small}"
"{radius.xl}"
"{elevation.md}"
```

These follow the [Design Tokens Community Group](https://design-tokens.github.io/community-group/format/) format and are compatible with Style Dictionary, Token Pipeline, and similar build tools.

---

## Usage

### With Style Dictionary

```js
// style-dictionary.config.js
module.exports = {
  source: ["PollyMorph.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [{ destination: "tokens.css", format: "css/variables" }]
    },
    js: {
      transformGroup: "js",
      buildPath: "dist/",
      files: [{ destination: "tokens.js", format: "javascript/es6" }]
    }
  }
};
```

### Direct import in JavaScript/TypeScript

```ts
import tokens from "./PollyMorph.json";

const primaryPurple = tokens.core.color.primary.purple; // "#8E42EE"
const buttonBorderRadius = tokens.semantic.button.base.borderradius; // "0.5rem"
const fontSizeBodyMedium = tokens.core.font.size.body.medium; // "0.875rem"
```

### In CSS (manual reference)

```css
:root {
  --color-primary-purple: #8E42EE;
  --color-primary-orange: #F78E12;
  --font-family-base: 'Inter', sans-serif;
  --spacing-4: 1rem;
  --radius-xl: 0.75rem;
  --elevation-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
}
```

---

## Core Token Reference

### Color — `core.color`

| Group | Keys |
|-------|------|
| `primary` | purple, orange, pink, cyan, red, blue, green, yellow, neutral |
| `secondary` | purple, orange, pink, cyan, red, blue |
| `neutral` | purple, orange, pink, cyan, red, blue |
| `brand.alt` | purple, dark |
| `platform` | surfaces, sidebar.surfaces, sidebar.stroke |
| `standard` | white, black |
| `surface` | hover, active, disabled |

### Elevation — `core.elevation`

| Token | Value |
|-------|-------|
| `none` | none |
| `sm` | 0 1px 2px 0 rgba(0,0,0,0.05) |
| `md` | 0 4px 6px -1px rgba(0,0,0,0.1)... |
| `lg` | 0 10px 15px -3px rgba(0,0,0,0.1)... |
| `xl` | 0 20px 25px -5px rgba(0,0,0,0.1)... |

### Font — `core.font`

| Group | Keys |
|-------|------|
| `family` | grotesk (Space Grotesk), inter, jetbrains, base |
| `size` | display, headline, title, body, label, tag, cli — each with large/medium/small/micro |
| `weight` | normal (400), extraThick (450), medium (500), semiBold (600), bold (700) |
| `height` | Line-heights matching the size scale |
| `letter.spacing` | none, tight, normal, wide, wider |

### Radius — `core.radius`

`none` → `sm` → `md` → `lg` → `xl` → `2xl` → `full`

### Spacing — `core.spacing`

Scale: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `8`, `10`, `12`, `16` (in rem units, 1 unit = 0.25rem)

### State — `core.state`

| State | Type | Amount |
|-------|------|--------|
| `hover` | darken | 15% |
| `active` | darken | 25% |
| `disabled` | lighten | 40% |
| `focus` | darken | 10% |

---

## Semantic Token Reference

### Button — `semantic.button`

Variants: `primary`, `secondary`, `tertiary`, `elevated`, `tonal`

Sizes: `large` (3rem height), `medium` (2.5rem), `small` (2rem)

Each variant exposes `backgroundcolor`, `color`, `border`, `focus`, `spliticon`, and `pollyicon` sub-tokens with state keys: `default`, `hover`, `pressed`, `active`, `loading`, `disabled`, `selected`.

### Accordion — `semantic.accordion`

Sub-tokens: `panel`, `header`, `title`, `icon`, `content`, `state`, `variant`, `size`

Variants: `sticky`, `coscientist`

States: `disabled`

Sizes: `small`

### Card — `semantic.card`

Sub-tokens: `bg`, `border`, `radius`, `padding`, `overflow`, `shadow`, `transition`, `state`, `variant`

Variants: `material`, `flat`

States: `hover`, `active`, `focus`

---

## Meta

```json
{
  "name": "PollyMorph",
  "version": "1.0.0",
  "description": "Elucidata unified design system token file."
}
```

---

## Contributing

All individual token files live under `core/` and `symantic/`. When adding or updating tokens, update both the individual source file and `PollyMorph.json`. The master file is the canonical reference for downstream tooling.
