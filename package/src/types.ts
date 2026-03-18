// Auto-generated from PollyMorph.json v1.4.0
// Do not edit manually — regenerate via build script.

export interface ColorStep {
  base: string;
  "98": string; "95": string; "92": string; "90": string;
  "85": string; "80": string; "75": string; "70": string;
  "60": string; "50": string; "40": string; "30": string;
  "20": string; "10": string;  "0": string;
  "-10": string; "-20": string; "-30": string;
  "-40": string; "-50": string; "-60": string; "-80": string;
}

export interface PlatformSurface {
  type: "gradient";
  stops: Array<{ color: string; stop: string }>;
  css: string;
}

export interface ColorTokens {
  primary: {
    purple: ColorStep;
    orange: ColorStep;
  };
  secondary: {
    cyan: ColorStep;
    pink: ColorStep;
    blue: ColorStep;
    yellow: ColorStep;
    red: ColorStep;
    green: ColorStep;
    purple: ColorStep;
  };
  neutral: {
    warm: ColorStep;
    cool: ColorStep;
    pure: ColorStep;
  };
  brand: {
    altPurple: ColorStep;
  };
  platform: {
    surface: PlatformSurface;
    sidebar: { background: string; nestedPanel: string; stroke: string };
  };
  standard: {
    white: string;
    black: string;
    transparent: string;
  };
  surface: {
    primary: string;
    secondary: string;
    tertiary: string;
    overlay: string;
  };
}

export interface ElevationLevel {
  shadow: string;
}

export interface ElevationTokens {
  none: { shadow: string };
  sm: ElevationLevel;
  md: ElevationLevel;
  lg: ElevationLevel;
  xl: ElevationLevel;
}

export interface FontTokens {
  family: {
    sans: string;
    display: string;
    mono: string;
    icon: string;
  };
  size: Record<string, string>;
  weight: {
    regular: number;
    book: number;
    medium: number;
    thick: number;
    semibold: number;
    bold: number;
  };
  height: Record<string, string>;
  letter: { spacing: Record<string, string> };
}

export interface PollyMorphTokens {
  color: ColorTokens;
  elevation: ElevationTokens;
  font: FontTokens;
  radius: Record<string, string>;
  spacing: Record<string, string>;
  state: Record<string, unknown>;
}

export interface StatusColorRules {
  yellow: string;
  red: string;
  green: string;
  blue: string;
}

export interface PollyMorphRules {
  color: {
    brand: {
      primary_purple: string;
      primary_orange: string;
      non_brand_accents: string;
      status_colors: StatusColorRules;
    };
    surface: Record<string, string>;
    text: Record<string, string>;
    badges: Record<string, string>;
  };
  typography: {
    font_families: Record<string, string>;
    scale_rules: Record<string, string>;
  };
  layout: Record<string, string>;
  components: {
    buttons: Record<string, string>;
    tabs: string;
    table_sort: string;
    pagination: string;
    sidebar_active_state: string;
    notification_badges: string;
  };
  spacing: Record<string, string>;
}

export interface PollyMorph {
  meta: {
    name: string;
    version: string;
    description: string;
    generatedAt: string;
  };
  core: PollyMorphTokens;
  semantic: Record<string, unknown>;
  rules: PollyMorphRules;
}
