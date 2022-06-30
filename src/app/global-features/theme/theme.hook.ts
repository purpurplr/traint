import { StateUpdater, useEffect, useState } from 'preact/hooks';
import { Theme } from './models/theme.type';
import { themeService } from './theme.service';
import { DEFAULT_THEME } from './configs/default-theme.config';

// TODO fix flickering on reload
export function useTheme(): [Theme, StateUpdater<Theme>] {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    if (typeof theme === 'string') {
      themeService.assignThemeByName(theme);
    } else {
      themeService.assignThemeByConfig(theme);
    }
  });

  return [theme, setTheme];
}
