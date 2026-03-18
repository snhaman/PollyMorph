# @snhaman/pollymorph

Elucidata unified design system — design tokens, usage rules, 15 component specs, TypeScript types, CSS custom properties, icon font, and React icon components.

**Version 1.6.0** · [GitHub](https://github.com/snhaman/PollyMorph)

---

## Install

```bash
npm install @snhaman/pollymorph
```

---

## Entry points

| Import | What you get |
|--------|-------------|
| `@snhaman/pollymorph` | Full typed PollyMorph JSON — tokens + rules + component specs |
| `@snhaman/pollymorph/tokens` | Flat token value exports |
| `@snhaman/pollymorph/rules` | Design rules + 15 component spec objects |
| `@snhaman/pollymorph/icons` | Icon registry: 185 icons, font map, lookup helpers |
| `@snhaman/pollymorph/react-icons` | 185 typed React SVG components |
| `@snhaman/pollymorph/svg` | 185 raw SVG strings (framework-agnostic) |
| `@snhaman/pollymorph/fonts` | `@font-face` + `.pds-icon--{name}` CSS classes + font files |
| `@snhaman/pollymorph/css` | All tokens as CSS custom properties on `:root` |

---

## Tokens

```ts
import pollymorph from "@snhaman/pollymorph";
// Full typed object: pollymorph.core, pollymorph.semantic, pollymorph.rules

import { colorPurple, colorOrange, fontFamilyInter, fontWeightSemibold,
         spacingFour, radiusMd } from "@snhaman/pollymorph/tokens";
```

```ts
import "@snhaman/pollymorph/css";

.button {
  background: var(--color-primary-purple);   /* #8E42EE */
  font-family: var(--font-family-inter);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-md);
}

.sidebar {
  background: var(--color-sidebar-bg);       /* #211D33 */
  border-right: 1px solid var(--color-sidebar-stroke);
}

.platform-surface {
  background: var(--color-platform-surface); /* 3-stop gradient */
}
```

---

## Rules and component specs

All 15 component types with full state coverage, token references, and composition rules:

```ts
import { rules, componentRules,
         ruleButton, ruleTag, ruleTextInput, ruleSelection,
         ruleTable, ruleTabs, ruleSidebarNav, ruleBreadcrumb,
         ruleModal, ruleSnackbar, ruleTooltip, ruleHoverCard,
         ruleCommentThread, ruleChartColors, ruleCLIColors
       } from "@snhaman/pollymorph/rules";

// Button spec
ruleButton.variants.filled.background   // "primary.purple.base"
ruleButton.variants.filled.hover        // { background: "primary.purple[-10]" }
ruleButton.sizes.medium.height          // "32px"

// Modal spec
ruleModal.sizes.popup.maxWidth          // "480px"
ruleModal.footer.buttonPattern          // "Tertiary (ghost) + Primary (filled)..."

// Snackbar spec
ruleSnackbar.autoDismiss                // "Default/Success: 4 seconds. Error/Warning: manual..."
ruleSnackbar.variants.success.icon      // "green check-circle, green.base"

// Table spec
ruleTable.rows.hover.background         // "primary.purple[98]"
ruleTable.cellTypes.number              // "Right-aligned. JetBrains Mono."

// Chart colors
ruleChartColors.sequence[0].color       // "secondary.purple (tint)"
ruleChartColors.rules[0]               // "Apply colors in sequence. Do not skip or reorder."

// CLI colors
ruleCLIColors.sqlCLI.keywords           // "secondary.purple[-20]"
ruleCLIColors.logCLI.error              // "pink[90]"
```

---

## Icons

### React components

```tsx
import { IconEdit, IconSettings, IconAiIcon, IconFilter,
         IconSearch, IconDelete } from "@snhaman/pollymorph/react-icons";

<IconEdit size={20} color="#8E42EE" />
<IconSettings size={24} className="sidebar-icon" />
```

All 185 components accept `size`, `color`, and any standard SVG prop. `size` defaults to 24.

### Raw SVG strings

```ts
import { svgEdit, svgSettings } from "@snhaman/pollymorph/svg";

// Vue, Angular, plain HTML, emails
element.innerHTML = svgEdit;

// As a data URI in CSS
background-image: url("data:image/svg+xml," + encodeURIComponent(svgEdit));
```

### Icon font

```ts
import "@snhaman/pollymorph/fonts";
```

```html
<!-- HTML class-based usage -->
<span class="pds-icon--edit"></span>
<span class="pds-icon--settings"></span>
<span class="pds-icon--ai-icon"></span>
```

```css
/* CSS content-based usage */
.my-icon::before {
  font-family: 'PDS-Icon-Font-20';
  content: "\E905";  /* edit */
}
```

### Icon registry

```ts
import { icons, fontIcons, svgIcons, getIcon, getIconChar,
         iconCharMap } from "@snhaman/pollymorph/icons";

icons.length          // 185 total
fontIcons.length      // 89 (in PDS-Icon-Font-20, codepoints E900–E94F, E9B0–E9B8)
svgIcons.length       // 96 (SVG only)

getIcon("edit")       // { num: 6, name: "edit", codepoint: "U+E905", inFont: true, ... }
getIconChar("edit")   // "\uE905"
iconCharMap           // { edit: "\uE905", settings: "\uE946", ... }
```

---

## TypeScript

All exports are fully typed:

```ts
import type { PollyMorph, ColorTokens, PollyMorphRules,
              IconName, IconEntry, IconProps } from "@snhaman/pollymorph";

// IconName is a union of all 185 icon name strings
const name: IconName = "edit";
```

---

## Color system

21 colors, each with a 22-step tint/shade ramp:

```
core.color.primary.purple.base   → #8E42EE
core.color.primary.purple[80]    → tint (80% white mix)
core.color.primary.purple[-20]   → shade (20% black mix)
```

Steps: 98, 95, 92, 90, 85, 80, 75, 70, 60, 50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50, -60, -80

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.6.0 | Full component ruleset — 15 components with states, token refs, and composition rules |
| 1.5.0 | Icons: React components, raw SVGs, icon font, icon registry |
| 1.4.0 | Design usage rules: color, typography, layout, component guidelines |
| 1.3.0 | Full 22-step color ramp for all 21 colors |
| 1.2.0 | Resolved all design conflicts from Figma audit |
| 1.1.0 | Figma PDS-2.0-Library audit; typography, elevation, component tokens |
| 1.0.0 | Initial release |
