import { ThemeConfig } from './models/theme-config.type';
import { Palette } from './models/palette.type';
import { ThemeName } from './models/theme-name.enum';

const rootStyles = document.documentElement.style;

function assignPalette(palette: Palette): void {
  Object.entries(palette).forEach(([key, value]: [string, string]) => {
    rootStyles.setProperty(`--${key}`, value);
  });
}

function assignThemeByConfig(theme: ThemeConfig): void {
  const palettes: Palette[] = Object.values(theme);
  palettes.forEach((palette) => assignPalette(palette));
}

function detectBrowserTheme(): ThemeName {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDark ? ThemeName.Dark : ThemeName.Light
}

export const themeService = {
  assignThemeByConfig,
  detectBrowserTheme
};
