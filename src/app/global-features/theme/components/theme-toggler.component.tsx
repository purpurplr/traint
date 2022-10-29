import './theme-toggler.component.scss';

import { IconButton } from '@material-ui/core';
import SunIcon from '@material-ui/icons/WbSunnyTwoTone';
import MoonIcon from '@material-ui/icons/Brightness2';

import { useTheme } from '../use-theme.hook';
import { ThemeName } from '../models/theme-name.enum';

export const ThemeToggler = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

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
    <IconButton aria-label="Theme toggler" onClick={toggleTheme}>
      <Icon className="theme-toggler__icon" />
    </IconButton>
  );
};
