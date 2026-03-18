# PollyMorph

The unified design system for Elucidata / Polly. Single source of truth for tokens, usage rules, component specs, icons, and React components.

**Current version: 1.6.0**

---

## What's in this repo

```
PollyMorph.json        ← Master token + rules file (consume this)
CONFLICTS.md           ← Audit log of resolved design conflicts
package/               ← @snhaman/pollymorph NPM package source
  src/
    index.ts           ← Default export: full PollyMorph object
    tokens.ts          ← Flat token value exports
    rules.ts           ← Flat rule + component spec exports
    icons.ts           ← Icon registry (185 icons, font + SVG)
    types.ts           ← TypeScript interfaces
    svg-icons/
      index.tsx        ← 185 React SVG icon components
      raw.ts           ← 185 raw SVG strings (framework-agnostic)
    pds-icons.css      ← @font-face + .pds-icon--{name} CSS classes
  assets/fonts/        ← PDS-Icon-Font-20 TTF + WOFF2
  icon-manifest.json   ← Full icon registry with codepoints
  package.json / tsconfig.json / tsup.config.ts
```

---

## PollyMorph.json structure

```
{
  meta                 # Version, audit source, changelog
  core/
    color              # 21 colors × 22-step tint/shade ramp + platform surfaces
    elevation          # Box shadow scale: none, sm, md, lg, xl
    font               # Family, size, weight, line-height, letter-spacing
    radius             # none → sm → md → lg → xl → 2xl → full
    spacing            # 0–16 scale in rem
    state              # Hover, active, disabled, focus modifiers
  semantic/
    accordion          # Panel, header, title, icon, content, states, sizes
    button             # Variants, sizes, states (primitive tokens)
    card               # Background, border, shadow, states, variants
  rules/
    color              # Color usage rules (brand, surface, text, badges)
    typography         # Font family and scale usage rules
    layout             # Page structure, card, table, search bar rules
    components         # 15 component specs (see below)
}
```

### Component specs in `rules.components`

| Key | Component |
|-----|-----------|
| `button` | Filled / Outlined / Ghost variants, 4 sizes, all states |
| `tag` | Filled / Outlined, color rules, closeable, truncation |
| `textInput` | All field types: text, password, search, textarea, select |
| `selectionControl` | Radio + Checkbox, all states including indeterminate |
| `table` | Container, header, row states, cell types, pagination |
| `tabs` | Indicator style, states, badge, overflow rules |
| `sidebarNav` | Dark sidebar: items, active state, badges, dividers |
| `breadcrumb` | Separator, crumb styles, max depth |
| `modal` | Popup (480px) + Modal (720px), header/body/footer anatomy |
| `snackbar` | 4 variants, compact/expanded, auto-dismiss rules |
| `tooltip` | Dark + Light, arrow, delay, usage restrictions |
| `hoverCard` | Trigger delay, anatomy, dismiss, read-only constraint |
| `commentThread` | Input, posted comment, actions, nesting, highlighting |
| `chartColors` | 9-color sequence, tint/offset variants, usage rules |
| `cliColors` | SQL CLI + Log CLI text type color mappings |

---

## Color system

Every color in the palette has a **22-step tint/shade ramp**:

- Positive steps (98, 95, 92...10) mix the base color with white
- Negative steps (-10, -20...-80) mix the base color with black
- Step 0 is the pure base

```
core.color.primary.purple.base   → #8E42EE
core.color.primary.purple[80]    → tint (80% mixed with white)
core.color.primary.purple[-20]   → shade (20% mixed with black)
```

21 colors across primary, secondary, neutral, and brand groups.

---

## NPM package

Install:

```bash
npm install @snhaman/pollymorph
```

### Entry points

| Import | Contents |
|--------|----------|
| `@snhaman/pollymorph` | Full typed PollyMorph JSON — all tokens + rules |
| `@snhaman/pollymorph/tokens` | Flat token value exports (`colorPurple`, `spacingFour`, etc.) |
| `@snhaman/pollymorph/rules` | Rules + 15 component spec exports (`ruleButton`, `ruleModal`, etc.) |
| `@snhaman/pollymorph/icons` | Icon registry: 185 icons, `getIcon()`, `iconCharMap` |
| `@snhaman/pollymorph/react-icons` | 185 typed React SVG components (`IconEdit`, `IconSettings`, etc.) |
| `@snhaman/pollymorph/svg` | 185 raw SVG strings (`svgEdit`, `svgSettings`, etc.) |
| `@snhaman/pollymorph/fonts` | `@font-face` CSS + `.pds-icon--{name}` icon font classes |
| `@snhaman/pollymorph/css` | All tokens as CSS custom properties on `:root` |

### Examples

```ts
// Tokens
import { colorPurple, fontFamilyInter, spacingFour } from "@snhaman/pollymorph/tokens";

// Component specs
import { ruleButton, ruleModal, ruleSnackbar } from "@snhaman/pollymorph/rules";
console.log(ruleButton.variants.filled.background); // "primary.purple.base"
console.log(ruleModal.sizes.popup.maxWidth);        // "480px"
console.log(ruleSnackbar.autoDismiss);              // "Default/Success: 4 seconds..."

// React icon components
import { IconEdit, IconAiIcon } from "@snhaman/pollymorph/react-icons";
<IconEdit size={20} color="#8E42EE" />

// Raw SVG strings (Vue, Angular, emails, plain HTML)
import { svgEdit } from "@snhaman/pollymorph/svg";
element.innerHTML = svgEdit;

// Icon font (after importing CSS)
import "@snhaman/pollymorph/fonts";
// <span class="pds-icon--edit" />

// CSS custom properties
import "@snhaman/pollymorph/css";
// var(--color-primary-purple), var(--font-family-inter), var(--spacing-4) ...
```

### With Style Dictionary

```js
module.exports = {
  source: ["PollyMorph.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [{ destination: "tokens.css", format: "css/variables" }]
    }
  }
};
```

---

## Building the package locally

```bash
cd package
npm install
npm run build   # outputs to package/dist/
```

---

## Versioning

| Version | Changes |
|---------|---------|
| 1.0.0 | Initial merge of 9 token source files into PollyMorph.json |
| 1.1.0 | Figma PDS-2.0-Library audit; added typography, elevation, component tokens |
| 1.2.0 | Resolved all design conflicts |
| 1.3.0 | Full 22-step color ramp for all 21 colors |
| 1.4.0 | Design usage rules (color, typography, layout, components) |
| 1.5.0 | NPM package: icons, React components, font, CSS variables |
| 1.6.0 | Full component ruleset — 15 components with states and token references |

---

## Contributing

`PollyMorph.json` is the canonical reference. When adding tokens or rules, update it first, then bump the version in both `PollyMorph.json` and `package/package.json`, rebuild the package, and publish.

Design conflicts are tracked in `CONFLICTS.md`.
