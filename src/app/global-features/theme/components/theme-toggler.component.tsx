import { IconButton } from '@material-ui/core';
import SunIcon from '@material-ui/icons/WbSunnyTwoTone';
import MoonIcon from '@material-ui/icons/Brightness2';

import { useTheme } from '../use-theme.hook';
import { ThemeName } from '../models/theme-name.enum';

export const ThemeToggler = (): JSX.Element => {
  const { theme, setTheme, themeConfig } = useTheme();

  const Icon = {
    [ThemeName.Light]: SunIcon,
    [ThemeName.Dark]: MoonIcon,
  }[theme];

  const toggleTheme = (): void => {
    setTheme((prevTheme) => {
      return prevTheme === ThemeName.Light ? ThemeName.Dark : ThemeName.Light;
    });
  };

  return (
    <IconButton aria-label="Theme switcher" onClick={toggleTheme}>
      <Icon htmlColor={themeConfig.accentsPalette?.['color-accent-400']} />
    </IconButton>
  );
};
