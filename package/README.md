# @snhaman/pollymorph

Elucidata unified design system — design tokens, usage rules, TypeScript types, and CSS custom properties. Built from PollyMorph v1.4.0.

## Install

```bash
npm install @snhaman/pollymorph
# or
yarn add @snhaman/pollymorph
```

## Usage

### Full JSON (default export)

```ts
import pollymorph from "@snhaman/pollymorph";

console.log(pollymorph.meta.version);       // "1.4.0"
console.log(pollymorph.core.color.primary.purple.base); // "#8E42EE"
console.log(pollymorph.rules.color.brand.primary_purple);
```

### Flat token exports

```ts
import { colorPurple, colorOrange, fontFamilyInter, fontWeightSemibold, spacingFour } from "@snhaman/pollymorph/tokens";

// Use directly in styles
const styles = {
  color: colorPurple,           // "#8E42EE"
  fontFamily: fontFamilyInter,  // "Inter, sans-serif"
  fontWeight: fontWeightSemibold, // 600
  padding: spacingFour,         // "1rem"
};
```

### Rules exports

```ts
import { rules, rulePrimaryPurple, ruleStatusRed, ruleSidebarBg } from "@snhaman/pollymorph/rules";

// Lint or validate design decisions programmatically
console.log(rulePrimaryPurple);
// "Brand purple (#8E42EE) is the primary interactive color. Use for: primary buttons..."

console.log(ruleStatusRed);
// "Use for high-alert, error, and destructive states only."
```

### CSS custom properties

Import the stylesheet to get all tokens as CSS variables on `:root`:

```ts
// In your app entry point
import "@snhaman/pollymorph/css";
```

```css
/* Then use in any CSS/SCSS */
.button-primary {
  background: var(--color-primary-purple);
  font-family: var(--font-family-inter);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-md);
}

.sidebar {
  background: var(--color-sidebar-bg);        /* #211D33 */
  border-right: 1px solid var(--color-sidebar-stroke); /* #433B60 */
}

.platform-surface {
  background: var(--color-platform-surface);  /* the 3-stop gradient */
}
```

### TypeScript autocomplete

All exports are fully typed. Import types directly if needed:

```ts
import type { PollyMorph, ColorTokens, PollyMorphRules } from "@snhaman/pollymorph";
```

## What's in the package

| Export | Contents |
|---|---|
| `@snhaman/pollymorph` | Full PollyMorph JSON — tokens + rules, typed |
| `@snhaman/pollymorph/tokens` | Flat convenience exports for all token values |
| `@snhaman/pollymorph/rules` | Flat exports for all design usage rules |
| `@snhaman/pollymorph/css` | 574-line CSS file with all tokens as `--custom-properties` on `:root` |

## Token structure

```
core.color.primary.purple.base    → #8E42EE
core.color.primary.purple[80]     → tint (80% mixed with white)
core.color.primary.purple[-20]    → shade (20% mixed with black)
core.font.family.inter            → "Inter, sans-serif"
core.font.weight.semibold         → 600
core.spacing[4]                   → "1rem"
core.radius.xl                    → "1rem"
core.elevation.md.shadow          → box-shadow value
semantic.button.*                 → button component tokens
semantic.card.*                   → card component tokens
rules.color.brand.*               → color usage rules
rules.typography.*                → typography usage rules
rules.layout.*                    → layout rules
rules.components.*                → component rules
```

## Version

`1.4.0` — Includes full 22-step color ramp for all 21 colors, platform surface gradient, sidebar tokens, semantic component tokens, and enforced design usage rules.

See [PollyMorph on GitHub](https://github.com/snhaman/PollyMorph) for the full token source and changelog.
