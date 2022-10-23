import { ThemeName } from '@global-features/theme/models/theme-name.enum';
import { DARK_THEME_CONFIG } from '@global-features/theme/configs/dark-theme.config';
import { LIGHT_THEME_CONFIG } from '@global-features/theme/configs/light-theme.config';

export const THEME_CONFIG_MAP = {
  [ThemeName.Dark]: DARK_THEME_CONFIG,
  [ThemeName.Light]: LIGHT_THEME_CONFIG
}
