import { StateUpdater, useEffect } from 'preact/compat';

import { useLocalStorage } from '@hooks/use-local-storage.hook';
import { ThemeName } from '@global-features/theme/models/theme-name.enum';
import { ThemeConfig } from '@global-features/theme/models/theme-config.type';
import { THEME_CONFIG_MAP } from '@global-features/theme/configs/theme.map';
import { LocalStorageKeys } from '@typings/local-storage-keys.enum';

import { themeService } from './theme.service';
import { DEFAULT_THEME } from './configs/default-theme.config';

interface ThemeAttributes {
  theme: ThemeName;
  setTheme: StateUpdater<ThemeName>;
  themeConfig: ThemeConfig;
}

export function useTheme(): ThemeAttributes {
  const [theme, setTheme] = useLocalStorage(LocalStorageKeys.Theme, DEFAULT_THEME);

  const themeConfig = THEME_CONFIG_MAP[theme];

  useEffect(() => {
    themeService.assignThemeByConfig(themeConfig);
  }, [theme]);

  return { theme, setTheme, themeConfig };
}
