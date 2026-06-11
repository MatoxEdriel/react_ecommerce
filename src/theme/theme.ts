// Centralized color palettes. index.css defines the same CSS variables as the
// no-JS default (following the system preference via prefers-color-scheme);
// applyTheme() overrides them at runtime for an explicit user choice.

export interface ThemePalette {
  text: string
  textHeading: string
  bg: string
  border: string
  codeBg: string
  accent: string
  accentBg: string
  accentBorder: string
  socialBg: string
  shadow: string
}

export const lightTheme: ThemePalette = {
  text: '#6b6375',
  textHeading: '#08060d',
  bg: '#fff',
  border: '#e5e4e7',
  codeBg: '#f4f3ec',
  accent: '#aa3bff',
  accentBg: 'rgba(170, 59, 255, 0.1)',
  accentBorder: 'rgba(170, 59, 255, 0.5)',
  socialBg: 'rgba(244, 243, 236, 0.5)',
  shadow:
    'rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px',
}

export const darkTheme: ThemePalette = {
  text: '#9ca3af',
  textHeading: '#f3f4f6',
  bg: '#16171d',
  border: '#2e303a',
  codeBg: '#1f2028',
  accent: '#c084fc',
  accentBg: 'rgba(192, 132, 252, 0.15)',
  accentBorder: 'rgba(192, 132, 252, 0.5)',
  socialBg: 'rgba(47, 48, 58, 0.5)',
  shadow:
    'rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px',
}

export type ThemeName = 'light' | 'dark'

export const themes: Record<ThemeName, ThemePalette> = {
  light: lightTheme,
  dark: darkTheme,
}

const cssVarByToken: Record<keyof ThemePalette, string> = {
  text: '--text',
  textHeading: '--text-h',
  bg: '--bg',
  border: '--border',
  codeBg: '--code-bg',
  accent: '--accent',
  accentBg: '--accent-bg',
  accentBorder: '--accent-border',
  socialBg: '--social-bg',
  shadow: '--shadow',
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
