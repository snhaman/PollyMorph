// @snhaman/pollymorph — Elucidata Unified Design System
// v1.4.0
//
// Default export: the full PollyMorph JSON (tokens + rules)
// Named exports: flat convenience accessors, types, and the full raw object.
//
// Usage:
//   import pollymorph from "@snhaman/pollymorph";          // full JSON
//   import { colorPurple, fontFamilySans } from "@snhaman/pollymorph/tokens";
//   import { rules, rulePrimaryPurple } from "@snhaman/pollymorph/rules";
//   import "@snhaman/pollymorph/css";                       // CSS custom properties

import type { PollyMorph } from "./types";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const raw = require("../pollymorph.json");

/** Full typed PollyMorph object — tokens + rules */
const pollymorph: PollyMorph = raw;

export default pollymorph;

// Re-export everything from sub-modules for convenience
export * from "./tokens";
export * from "./rules";
export * from "./icons";
export type * from "./types";
