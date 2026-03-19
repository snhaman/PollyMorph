import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Icons",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**PollyMorph Icon System**

Two delivery formats from \`@snhaman/pollymorph\`:

| Format | Entry point | When to use |
|--------|-------------|-------------|
| Icon font (89 glyphs) | CSS \`.pds-icon--{name}\` pseudo-element | Inline with text, CSS-only contexts |
| SVG React components (185 icons) | \`@snhaman/pollymorph/react-icons\` | All React UI — preferred, colour/size via props |

Font icons use codepoints E900–E94F and E9B0–E9B8 (PUA range).
SVG icons not in the font are SVG-only.
        `,
      },
    },
  },
};

export default meta;

/* ── Font icon glyph grid ────────────────────────────────────────────────── */
const FONT_ICONS: { name: string; unicode: string }[] = [
  {"name":"meatballsSettings","unicode":"\ue900"},{"name":"addToShortlist","unicode":"\ue901"},
  {"name":"shortlist","unicode":"\ue902"},{"name":"uploadFile","unicode":"\ue903"},
  {"name":"downloadFile","unicode":"\ue904"},{"name":"edit","unicode":"\ue905"},
  {"name":"duplicateOrCopy","unicode":"\ue906"},{"name":"print","unicode":"\ue907"},
  {"name":"openInNewWindow","unicode":"\ue908"},{"name":"tableEditor","unicode":"\ue909"},
  {"name":"tableSort","unicode":"\ue90a"},{"name":"save","unicode":"\ue90b"},
  {"name":"delete","unicode":"\ue90c"},{"name":"openFolder","unicode":"\ue90d"},
  {"name":"analyse","unicode":"\ue90e"},{"name":"starEmpty","unicode":"\ue90f"},
  {"name":"filter","unicode":"\ue910"},{"name":"add","unicode":"\ue911"},
  {"name":"contract","unicode":"\ue912"},{"name":"expand","unicode":"\ue913"},
  {"name":"close","unicode":"\ue914"},{"name":"upChevron","unicode":"\ue915"},
  {"name":"leftChevron","unicode":"\ue916"},{"name":"rightChevron","unicode":"\ue917"},
  {"name":"expandChevron","unicode":"\ue918"},{"name":"upCarrot","unicode":"\ue919"},
  {"name":"leftCarrot","unicode":"\ue91a"},{"name":"rightCarrot","unicode":"\ue91b"},
  {"name":"downCarrot","unicode":"\ue91c"},{"name":"arrowUp","unicode":"\ue91d"},
  {"name":"arrowLeftBack","unicode":"\ue91e"},{"name":"arrowRightForward","unicode":"\ue91f"},
  {"name":"arrowDown","unicode":"\ue920"},{"name":"northEast","unicode":"\ue921"},
  {"name":"northWest","unicode":"\ue922"},{"name":"southEast","unicode":"\ue923"},
  {"name":"southWest","unicode":"\ue924"},{"name":"arrowForwardLarge","unicode":"\ue925"},
  {"name":"arrowBackLarge","unicode":"\ue926"},{"name":"skipToFirst","unicode":"\ue927"},
  {"name":"skipToLast","unicode":"\ue928"},{"name":"starFull","unicode":"\ue929"},
  {"name":"visibilityOn","unicode":"\ue92a"},{"name":"visibilityOff","unicode":"\ue92b"},
  {"name":"pinned","unicode":"\ue92c"},{"name":"pin","unicode":"\ue92d"},
  {"name":"starHalf","unicode":"\ue92e"},{"name":"previousArrow","unicode":"\ue92f"},
  {"name":"nextArrow","unicode":"\ue930"},{"name":"folderOpen","unicode":"\ue931"},
  {"name":"folder","unicode":"\ue932"},{"name":"createNewFolder","unicode":"\ue933"},
  {"name":"uploadFolder","unicode":"\ue934"},{"name":"archive","unicode":"\ue935"},
  {"name":"unarchive","unicode":"\ue936"},{"name":"link","unicode":"\ue937"},
  {"name":"done","unicode":"\ue938"},{"name":"chartIcon","unicode":"\ue939"},
  {"name":"document","unicode":"\ue93a"},{"name":"codeDocument","unicode":"\ue93b"},
  {"name":"info","unicode":"\ue93c"},{"name":"swap","unicode":"\ue93d"},
  {"name":"description","unicode":"\ue93e"},{"name":"history","unicode":"\ue93f"},
  {"name":"rename","unicode":"\ue940"},{"name":"panMove","unicode":"\ue941"},
  {"name":"github","unicode":"\ue942"},{"name":"curation","unicode":"\ue943"},
  {"name":"helpAndSupport","unicode":"\ue944"},{"name":"userProfile","unicode":"\ue945"},
  {"name":"settings","unicode":"\ue946"},{"name":"notification","unicode":"\ue947"},
  {"name":"ingestion","unicode":"\ue948"},{"name":"omixLogoSimple","unicode":"\ue949"},
  {"name":"workspaces","unicode":"\ue94a"},{"name":"application","unicode":"\ue94b"},
  {"name":"usersOA","unicode":"\ue94c"},{"name":"admin","unicode":"\ue94d"},
  {"name":"costWallet","unicode":"\ue94e"},{"name":"splitView","unicode":"\ue94f"},
  {"name":"summaryView","unicode":"\ue9b0"},{"name":"listView","unicode":"\ue9b1"},
  {"name":"cardView","unicode":"\ue9b2"},{"name":"tableView","unicode":"\ue9b3"},
  {"name":"cancelRound","unicode":"\ue9b4"},{"name":"userSingle","unicode":"\ue9b5"},
  {"name":"addUser","unicode":"\ue9b6"},{"name":"calendarEvent","unicode":"\ue9b7"},
  {"name":"calendarEmpty","unicode":"\ue9b8"},
];

/* camelCase → kebab-case for CSS class */
const toKebab = (s: string) =>
  s.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);

export const FontIcons: StoryObj = {
  name: "Icon Font (89 glyphs)",
  parameters: {
    docs: {
      description: {
        story: "All 89 PDS-Icon-Font-20 glyphs. Use via CSS class `.pds-icon--{name}::before` or directly as a character in `font-family: PDS-Icon-Font-20`.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "1rem" }}>
      <p style={{ fontSize: "0.75rem", fontFamily: "Inter, sans-serif", color: "var(--color-neutral-grey)", margin: 0 }}>
        Font family: <code style={{ fontFamily: "JetBrains Mono, monospace", background: "var(--color-neutral-light)", padding: "1px 4px", borderRadius: 3 }}>PDS-Icon-Font-20</code>
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {FONT_ICONS.map(({ name, unicode }) => (
          <div
            key={name}
            title={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              width: 72,
              padding: "8px 4px",
              borderRadius: 6,
              background: "white",
              border: "1px solid var(--color-neutral-light)",
              cursor: "default",
            }}
          >
            <span
              style={{
                fontFamily: "PDS-Icon-Font-20, sans-serif",
                fontSize: "20px",
                lineHeight: 1,
                color: "var(--color-neutral-dark)",
              }}
            >
              {unicode}
            </span>
            <span
              style={{
                fontSize: 9,
                fontFamily: "JetBrains Mono, monospace",
                color: "var(--color-neutral-grey)",
                textAlign: "center",
                wordBreak: "break-all",
                lineHeight: 1.2,
              }}
            >
              {toKebab(name)}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

/* ── SVG icon grid — using @snhaman/pollymorph/react-icons ──────────────── */
// We lazy-import to avoid bundle issues if the package isn't installed yet
let IconComponents: Record<string, React.FC<{ size?: number; color?: string }>> = {};
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mod = require("@snhaman/pollymorph/react-icons");
  IconComponents = mod.IconComponents ?? {};
} catch {
  // package not installed in dev — show placeholder
}

export const SVGIcons: StoryObj = {
  name: "SVG Icons (185 total)",
  parameters: {
    docs: {
      description: {
        story: "All 185 React SVG icon components from `@snhaman/pollymorph/react-icons`. Colour inherits from `currentColor`; pass a `color` prop to override.",
      },
    },
  },
  render: () => {
    const entries = Object.entries(IconComponents);
    if (entries.length === 0) {
      return (
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--color-neutral-grey)", padding: "1rem" }}>
          SVG icons load from <code>@snhaman/pollymorph/react-icons</code>. Run <code>npm install</code> in the storybook directory to see them here.
        </p>
      );
    }
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "1rem" }}>
        <p style={{ fontSize: "0.75rem", fontFamily: "Inter, sans-serif", color: "var(--color-neutral-grey)", margin: 0 }}>
          Import: <code style={{ fontFamily: "JetBrains Mono, monospace", background: "var(--color-neutral-light)", padding: "1px 4px", borderRadius: 3 }}>{"import { EditIcon } from '@snhaman/pollymorph/react-icons'"}</code>
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {entries.map(([name, Icon]) => (
            <div
              key={name}
              title={name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                width: 80,
                padding: "8px 4px",
                borderRadius: 6,
                background: "white",
                border: "1px solid var(--color-neutral-light)",
                cursor: "default",
              }}
            >
              <Icon size={20} color="var(--color-neutral-dark)" />
              <span
                style={{
                  fontSize: 9,
                  fontFamily: "JetBrains Mono, monospace",
                  color: "var(--color-neutral-grey)",
                  textAlign: "center",
                  wordBreak: "break-all",
                  lineHeight: 1.2,
                }}
              >
                {toKebab(name.replace(/Icon$/, ""))}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const IconSizes: StoryObj = {
  name: "Sizes",
  render: () => {
    let EditIcon: React.FC<{ size?: number; color?: string }> | null = null;
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      EditIcon = require("@snhaman/pollymorph/react-icons").EditIcon;
    } catch { /* not installed */ }

    const fontChar = "\ue905"; // edit

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "1rem" }}>
        <div>
          <p style={{ fontSize: "0.75rem", fontFamily: "Inter, sans-serif", color: "var(--color-neutral-grey)", marginBottom: 12 }}>Icon font — set via <code>font-size</code></p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "1.5rem" }}>
            {[16, 20, 24, 32].map(sz => (
              <div key={sz} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <span style={{ fontFamily: "PDS-Icon-Font-20, sans-serif", fontSize: sz, color: "var(--color-primary-purple)" }}>{fontChar}</span>
                <span style={{ fontSize: 10, fontFamily: "monospace", color: "var(--color-neutral-grey)" }}>{sz}px</span>
              </div>
            ))}
          </div>
        </div>
        {EditIcon && (
          <div>
            <p style={{ fontSize: "0.75rem", fontFamily: "Inter, sans-serif", color: "var(--color-neutral-grey)", marginBottom: 12 }}>SVG icon — set via <code>size</code> prop</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "1.5rem" }}>
              {[16, 20, 24, 32].map(sz => (
                <div key={sz} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <EditIcon size={sz} color="var(--color-primary-purple)" />
                  <span style={{ fontSize: 10, fontFamily: "monospace", color: "var(--color-neutral-grey)" }}>{sz}px</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  },
};
