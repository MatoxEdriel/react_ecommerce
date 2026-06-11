// Centralized color palettes — warm & friendly: pale orange + terracotta on cream.
// index.css defines the same CSS variables as the no-JS default (following the
// system preference via prefers-color-scheme); applyTheme() overrides them at
// runtime for an explicit user choice. Tailwind utilities (bg-surface,
// text-primary-deep, ...) read these variables through @theme inline.

export interface ThemePalette {
  surface: string
  card: string
  body: string
  heading: string
  line: string
  primary: string
  primarySoft: string
  primaryDeep: string
  secondary: string
  secondarySoft: string
  secondaryDeep: string
}

export const lightTheme: ThemePalette = {
  surface: '#fff8f0',
  card: '#fffdfa',
  body: '#8a7866',
  heading: '#43302b',
  line: '#f3e3d3',
  primary: '#fb923c',
  primarySoft: '#ffedd5',
  primaryDeep: '#c2410c',
  secondary: '#e2725b',
  secondarySoft: '#fbe2db',
  secondaryDeep: '#b3402a',
}

export const darkTheme: ThemePalette = {
  surface: '#221a14',
  card: '#2b211a',
  body: '#c4b3a3',
  heading: '#f8ede2',
  line: '#463528',
  primary: '#fdba74',
  primarySoft: 'rgba(253, 186, 116, 0.15)',
  primaryDeep: '#fdba74',
  secondary: '#f0937c',
  secondarySoft: 'rgba(240, 147, 124, 0.15)',
  secondaryDeep: '#f0937c',
}

export type ThemeName = 'light' | 'dark'

export const themes: Record<ThemeName, ThemePalette> = {
  light: lightTheme,
  dark: darkTheme,
}

const cssVarByToken: Record<keyof ThemePalette, string> = {
  surface: '--surface',
  card: '--card',
  body: '--body',
  heading: '--heading',
  line: '--line',
  primary: '--primary',
  primarySoft: '--primary-soft',
  primaryDeep: '--primary-deep',
  secondary: '--secondary',
  secondarySoft: '--secondary-soft',
  secondaryDeep: '--secondary-deep',
}

export function applyTheme(name: ThemeName): void {
  const palette = themes[name]
  for (const token of Object.keys(cssVarByToken) as (keyof ThemePalette)[]) {
    document.documentElement.style.setProperty(cssVarByToken[token], palette[token])
  }
}

// Removes the runtime overrides so prefers-color-scheme rules again.
export function resetTheme(): void {
  for (const token of Object.keys(cssVarByToken) as (keyof ThemePalette)[]) {
    document.documentElement.style.removeProperty(cssVarByToken[token])
  }
}
