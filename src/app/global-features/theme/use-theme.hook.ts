import { useLocalStorage } from '@hooks/local-storage.hook';
import { ThemeName } from '@global-features/theme/models/theme-name.enum';
import { ThemeConfig } from '@global-features/theme/models/theme-config.type';
import { THEME_CONFIG_MAP } from '@global-features/theme/configs/themes-map.config';
import { LocalStorageKeys } from '@interfaces/local-storage-keys.enum';
import { useEffect } from 'react';

import { themeService } from './theme.service';
import { StateUpdaterType } from '@interfaces/react/state-updater.type';

interface ThemeAttributes {
  theme: ThemeName;

  setTheme: StateUpdaterType<ThemeName>;

  themeConfig: ThemeConfig;
}

// TODO fix flickering on page reload
export function useTheme(): ThemeAttributes {
  const [theme, setTheme] = useLocalStorage(LocalStorageKeys.Theme, themeService.detectBrowserTheme());

  const themeConfig = THEME_CONFIG_MAP[theme];

  useEffect(() => {
    themeService.assignThemeByConfig(themeConfig);
  }, [theme]);

  return { theme, setTheme, themeConfig };
}
