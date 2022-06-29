import { DARK_THEME_CONFIG } from './configs/dark-theme.config';
import { LIGHT_THEME_CONFIG } from './configs/light-theme.config';
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

function assignThemeByName(themeName: ThemeName): void {
  switch (themeName) {
    case ThemeName.Dark:
      assignThemeByConfig(DARK_THEME_CONFIG);
      break;
    case ThemeName.Light:
    default:
      assignThemeByConfig(LIGHT_THEME_CONFIG);
  }
}

export const themeService = {
  assignThemeByConfig,
  assignThemeByName,
};
